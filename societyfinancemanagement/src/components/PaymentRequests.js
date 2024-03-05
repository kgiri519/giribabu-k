import React, { useState } from 'react';

function PaymentRequests() {
  const [requests, setRequests] = useState([]);
  const [newRequest, setNewRequest] = useState({
    requestID: '',
    amount: 0,
    recipient: '',
    description: ''
  });

  const addRequest = () => {
    if (newRequest.requestID.trim() !== '' && newRequest.amount > 0 && newRequest.recipient.trim() !== '' && newRequest.description.trim() !== '') {
      setRequests([...requests, newRequest]);
      setNewRequest({
        requestID: '',
        amount: 0,
        recipient: '',
        description: ''
      });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewRequest({
      ...newRequest,
      [name]: value
    });
  };

  const removeRequest = (index) => {
    const updatedRequests = [...requests];
    updatedRequests.splice(index, 1);
    setRequests(updatedRequests);
  };

  return (
    <div>
      <h2>Payment Requests</h2>
      <div>
        <input
          type="text"
          placeholder="Request ID"
          name="requestID"
          value={newRequest.requestID}
          onChange={handleChange}
        />
        <input
          type="number"
          placeholder="Amount"
          name="amount"
          value={newRequest.amount}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Recipient"
          name="recipient"
          value={newRequest.recipient}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Description"
          name="description"
          value={newRequest.description}
          onChange={handleChange}
        />
        <button onClick={addRequest}>Add Request</button>
      </div>
      <ul>
        {requests.map((request, index) => (
          <li key={index}>
            Request ID: {request.requestID}, Amount: {request.amount}, Recipient: {request.recipient}, Description: {request.description}
            <button onClick={() => removeRequest(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PaymentRequests;
