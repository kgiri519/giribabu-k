// FundCollection.js
import React, { useState } from 'react';
import MonthlyMaintenanceFee from './MonthlyMaintenanceFee';
import InvoiceGeneration from './InvoiceGeneration';
import ActivityManagement from './ActivityManagement';
import PaymentRequests from './PaymentRequests';
import './FundCollection.css';

function FundCollection() {
  const [fundsAvailable, setFundsAvailable] = useState(0);
  const [plannedActivities, setPlannedActivities] = useState([]);
  const [monthlyFee, setMonthlyFee] = useState(0);

  // Function to calculate monthly fee based on funds available, cash in hand, and planned activities
  const calculateMonthlyFee = () => {
    // Your calculation logic here
    const calculatedFee = fundsAvailable / plannedActivities.length; // Example calculation
    setMonthlyFee(calculatedFee);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Your submission logic here
    console.log('Form submitted');
  };

  return (
    <div>
      <h1>Society Finance Management System</h1>
      <form onSubmit={handleSubmit}>
        <div className="fund-collection">
          <h2>Select month for Fund Collections</h2>
          <select name="Month" size="3" multiple>
            <option value="January">January</option>
            <option value="February">February</option>
            <option value="March">March</option>
            <option value="April">April</option>
            <option value="May">May</option>
            <option value="June">June</option>
            <option value="July">July</option>
            <option value="August">August</option>
            <option value="September">September</option>
            <option value="October">October</option>
            <option value="November">November</option>
            <option value="December">December</option>
          </select>
          <h2>Select Payment Method</h2>
          <select name="payment-Method">
            <option value="Check">Check</option>
            <option value="Credit card">Credit card</option>
            <option value="Debit card">Debit card</option>
            <option value="UPI">UPI</option>
            <option value="Net-Banking">Net-Banking</option>
          </select>
          <button type="submit">Submit</button>
        </div>
        </form>
        <div>
          <MonthlyMaintenanceFee monthlyFee={monthlyFee} calculateMonthlyFee={calculateMonthlyFee} />
        </div>
        <div>
          <InvoiceGeneration />
        </div>
        <div>
          <ActivityManagement activities={plannedActivities} setActivities={setPlannedActivities} />
        </div>
        <div>
          <PaymentRequests />
        </div>
    </div>
  );
}

export default FundCollection;
