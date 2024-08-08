import React, { useState, useEffect } from 'react';
import Papa from 'papaparse';

const FileUpload = () => {
  const [file, setFile] = useState(null);
  const [orders, setOrders] = useState([]);
  const [parsedData, setParsedData] = useState([]);
  const [showUploadOption, setShowUploadOption] = useState(true);
  const [nextOrderNo, setNextOrderNo] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleFileUpload = () => {
    if (file) {
      Papa.parse(file, {
        header: true,
        complete: (results) => {
          const newData = results.data.filter((row) => Object.values(row).some((value) => value!== '')); 
          newData.map((row, index) => {
            return {
              OrderNo: `ORD${index + 1}`,
              Name: row.Name,
              Item: row.Item,
              Quantity: row.Quantity,
              Address: row.Address,
              City: row.City,
            };
          });
          setParsedData(newData);
          setShowUploadOption(false);
          const lastOrderNo = newData[newData.length - 1].OrderNo;
          const nextOrderNoValue = `ORD${parseInt(lastOrderNo.substring(3)) + 1}`;
          setNextOrderNo(nextOrderNoValue);
        },
      });
    }
  };

  const handleSendOrder = () => {
    console.log('Send order button clicked!');
    // add  logic to send the orders here
  };

  const handleUploadNewFile = () => {
    setShowUploadOption(true);
    setParsedData([]);
  };

  const handleOrderChange = (index, key, value) => {
    const updatedOrders = [...parsedData];
    updatedOrders[index][key] = value;
    setParsedData(updatedOrders);
  };

  const handleAddNewOrder = () => {
    const newOrder = {
      OrderNo: nextOrderNo,
      Name: '',
      Item: '',
      Quantity: '',
      Address: '',
      City: '',
    };
    setParsedData([...parsedData, newOrder]);
    const nextOrderNoValue = `ORD${parseInt(nextOrderNo.substring(3)) + 1}`;
    setNextOrderNo(nextOrderNoValue);
  };

  const handleDeleteOrder = (index) => {
    const updatedOrders = [...parsedData];
    updatedOrders.splice(index, 1);
    setParsedData(updatedOrders);
  };

  useEffect(() => {
    const handleBeforeUnload = (e) => {
      if (parsedData.length > 0) {
        e.preventDefault();
        e.returnValue = '';
        return 'You have unsaved changes. Are you sure you want to leave this page?';
      }
    };
    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [parsedData]);

  return (
    <div>
      {showUploadOption && (
        <div>
          <h1>File Upload</h1>
          <input type="file" onChange={handleFileChange} />
          <button onClick={handleFileUpload}>Upload File</button>
        </div>
      )}
      {!showUploadOption && (
        <div>
          <h2>Orders:</h2>
          <table>
            <thead>
              <tr>
                <th>Order No</th>
                <th>Name</th>
                <th>Item</th>
                <th>Quantity</th>
                <th>Address</th>
                <th>City</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {parsedData.map((order, index) => (
                <tr key={index}>
                  <td>{order.OrderNo}</td>
                  <td>
                    <input
                      type="text"
                      value={order.Name}
                      onChange={(e) => handleOrderChange(index, 'Name', e.target.value)}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      value={order.Item}
                      onChange={(e) => handleOrderChange(index, 'Item', e.target.value)}
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      value={order.Quantity}
                      onChange={(e) => handleOrderChange(index, 'Quantity', e.target.value)}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      value={order.Address}
                      onChange={(e) => handleOrderChange(index, 'Address', e.target.value)}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      value={order.City}
                      onChange={(e) => handleOrderChange(index, 'City', e.target.value)}
                    />
                  </td>
                  <td>
                    <button onClick={() => handleDeleteOrder(index)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <button onClick={handleAddNewOrder}>Add New Order</button>
          <button onClick={handleSendOrder}>Send Order</button>
          <button onClick={handleUploadNewFile}>Upload New File</button>
        </div>
      )}
    </div>
  );
};

export default FileUpload;