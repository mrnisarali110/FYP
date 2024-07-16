import React, { useState } from 'react';
import Papa from 'papaparse';

const FileUpload = () => {
  const [file, setFile] = useState(null);
  const [orders, setOrders] = useState([]);
  const [parsedData, setParsedData] = useState([]);
  const [showUploadOption, setShowUploadOption] = useState(true);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleFileUpload = () => {
    if (file) {
      Papa.parse(file, {
        header: true,
        complete: (results) => {
          setParsedData(results.data);
          setShowUploadOption(false);
        },
      });
    }
  };

  const handleSendOrder = () => {
    console.log('Send order button clicked!');
    // You can add your logic to send the orders here
  };

  const handleUploadNewFile = () => {
    setShowUploadOption(true);
    setParsedData([]);
  };

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
              </tr>
            </thead>
            <tbody>
              {parsedData.map((order, index) => (
                <tr key={index}>
                  <td>{order.OrderNo}</td>
                  <td>{order.Name}</td>
                  <td>{order.Item}</td>
                  <td>{order.Quantity}</td>
                  <td>{order.Address}</td>
                  <td>{order.City}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <button onClick={handleSendOrder}>Send Order</button>
          <button onClick={handleUploadNewFile}>Upload New File</button>
        </div>
      )}
    </div>
  );
};

export default FileUpload;