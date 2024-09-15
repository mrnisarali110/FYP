import React, { useState, useEffect } from 'react';
import Papa from 'papaparse';

const FileUpload = () => {
  const [file, setFile] = useState(null);
  const [parsedData, setParsedData] = useState([]);
  const [selectedColumns, setSelectedColumns] = useState({});
  const [showPopup, setShowPopup] = useState(false);
  const [editableData, setEditableData] = useState({});
  const [error, setError] = useState('');
  const [columnNames, setColumnNames] = useState([]);

  useEffect(() => {
    console.log('Parsed Data:', parsedData);
    console.log('Editable Data:', editableData);
  }, [parsedData, editableData]);
  useEffect(() => {
    const handleBeforeUnload = (event) => {
      if (Object.keys(editableData).length > 0) {
        event.preventDefault();
        event.returnValue = 'You have unsaved changes. Are you sure you want to leave this page?';
      }
    };
  
    window.addEventListener('beforeunload', handleBeforeUnload);
  
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [editableData]);
  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile && selectedFile.type === 'text/csv') {
      setFile(selectedFile);
      setError('');
    } else {
      setError('Please upload a valid CSV file.');
    }
  };

  const handleParseFile = () => {
    if (!file) {
      setError('No file selected.');
      return;
    }
    
    Papa.parse(file, {
      header: true,
      complete: (results) => {
        console.log('Parsed Results:', results);
        const columns = results.meta.fields;
        const data = results.data;
        setParsedData(data);
        setColumnNames(columns);
        const initialSelectedColumns = columns.reduce((acc, column) => ({ ...acc, [column]: true }), {});
        setSelectedColumns(initialSelectedColumns);
        setShowPopup(true);
      },
      error: (err) => setError(`Parsing error: ${err.message}`)
    });
  };

  const handleColumnSelect = (columnName) => {
    setSelectedColumns((prevSelectedColumns) => ({
      ...prevSelectedColumns,
      [columnName]: !prevSelectedColumns[columnName]
    }));
  };

  const handleContinue = () => {
    if (parsedData.length === 0) {
      setError('No data available to process.');
      return;
    }

    const filteredData = parsedData.map((row) => {
      const newRow = {};
      Object.keys(row).forEach((columnName) => {
        if (selectedColumns[columnName]) {
          newRow[columnName] = row[columnName];
        }
      });
      return newRow;
    });

    const editableData = filteredData.reduce((acc, row) => {
      const orderNo = row.OrderNo || `ORD${getMaxSerialNo() + 1}`;
      if (!acc[orderNo]) {
        acc[orderNo] = [];
      }
      acc[orderNo].push({ ...row, SerialNo: `ORD${getMaxSerialNo() + acc[orderNo].length + 1}` });
      return acc;
    }, {});
    console.log('Editable Data after Continue:', editableData);
    setEditableData(editableData);
    setShowPopup(false);
  };

  const getMaxSerialNo = () => {
    let maxSerialNo = 0;
    Object.values(editableData).forEach((rows) => {
      rows.forEach((row) => {
        const serialNo = parseInt(row.SerialNo.replace('ORD', ''), 10);
        if (serialNo > maxSerialNo) {
          maxSerialNo = serialNo;
        }
      });
    });
    return maxSerialNo;
  };

  const handleCellChange = (orderNo, rowIndex, columnName, newValue) => {
    setEditableData((prevEditableData) => {
      const newRow = { ...prevEditableData[orderNo][rowIndex] };
      newRow[columnName] = newValue;
      prevEditableData[orderNo][rowIndex] = newRow;
      return { ...prevEditableData };
    });
  };

  const handleDeleteRow = (orderNo, rowIndex) => {
    setEditableData((prevEditableData) => {
      const newData = { ...prevEditableData };
      newData[orderNo].splice(rowIndex, 1);
      if (newData[orderNo].length === 0) {
        delete newData[orderNo];
      }
      return newData;
    });
  };

  const handleAddNewOrder = () => {
    const newOrderNo = `ORD${getMaxSerialNo() + 1}`;
    const newEmptyRow = Object.keys(selectedColumns).reduce((acc, column) => {
      if (selectedColumns[column]) {
        acc[column] = ''; // Initialize with empty values only for selected columns
      }
      return acc;
    }, {});
    setEditableData((prevEditableData) => ({
      ...prevEditableData,
      [newOrderNo]: [{ ...newEmptyRow, SerialNo: newOrderNo }]  // Add an empty row with the new order number
    }));
  };

  const handleGenerateLabel = () => {
    console.log('Preparing to send data:', editableData);
    alert('Data prepared for sending: Check console for details.');
  };

  return (
    <div>
      <input type="file" accept=".csv" onChange={handleFileChange} />
      <button onClick={handleParseFile}>Upload File</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {showPopup && (
        <div className="popup">
          <h2>Select columns to display</h2>
          <ul>
            {Object.keys(selectedColumns).map((columnName) => (
              <li key={columnName}>
                <input
                  type="checkbox"
                  checked={selectedColumns[columnName]}
                  onChange={() => handleColumnSelect(columnName)}
                />
                <span>{columnName}</span>
              </li>
            ))}
          </ul>
          <button onClick={handleContinue}>Continue</button>
        </div>
      )}
      {Object.keys(editableData).length > 0 && (
        <div>
          <table>
            <thead>
              <tr>
                <th>Serial No.</th>
                {Object.keys(selectedColumns).map((columnName) => (
                  columnName !== 'SerialNo' && selectedColumns[columnName] && (
                    <th key={columnName}>{columnName}</th>
                  )
                ))}
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {Object.keys(editableData).map((orderNo) => (
                editableData[orderNo].map((row, rowIndex) => (
                  <tr key={rowIndex}>
                    <td>{row.SerialNo}</td>
                    {Object.keys(selectedColumns).map((columnName) => (
                      columnName !== 'SerialNo' && selectedColumns[columnName] && (
                        <td key={columnName}>
                          <input
                            type="text"
                            value={row[columnName] || ''}
                            onChange={(e) => handleCellChange(orderNo, rowIndex, columnName, e.target.value)}
                          />
                        </td>
                      )
                    ))}
                    <td>
                      <button onClick={() => handleDeleteRow(orderNo, rowIndex)}>Delete</button>
                    </td>
                  </tr>
                ))
              ))}
            </tbody>
          </table>
          <button onClick={handleAddNewOrder}>Add New Order</button>
          <button onClick={handleGenerateLabel}>Generate Label</button>
        </div>
      )}
    </div>
  );
};

export default FileUpload;
