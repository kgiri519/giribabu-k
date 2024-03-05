import React, { useState } from 'react';

function InvoiceGeneration() {
  const [invoiceNumber, setInvoiceNumber] = useState('');
  const [amount, setAmount] = useState(0);
  const [recipient, setRecipient] = useState('');
  const [date, setDate] = useState('');

  const generateInvoice = () => {
    // Your logic to generate invoice
    // This is a simplified example
    const invoiceData = {
      invoiceNumber,
      amount,
      recipient,
      date,
    };
    console.log('Generated Invoice:', invoiceData);
    // You can also send this data to backend for further processing
  };

  return (
    <div>
      <h2>Invoice Generation</h2>
      <input
        type="text"
        placeholder="Invoice Number"
        value={invoiceNumber}
        onChange={(e) => setInvoiceNumber(e.target.value)}
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
      />
      <input
        type="text"
        placeholder="Recipient"
        value={recipient}
        onChange={(e) => setRecipient(e.target.value)}
      />
      <input
        type="date"
        placeholder="Date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <button onClick={generateInvoice}>Generate Invoice</button>
    </div>
  );
}

export default InvoiceGeneration;
