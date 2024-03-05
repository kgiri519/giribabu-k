import React, { useState } from 'react';

function MonthlyMaintenanceFee() {
  const [fundsAvailable, setFundsAvailable] = useState(100);
  const [cashInHand, setCashInHand] = useState(100);
  const [plannedActivities, setPlannedActivities] = useState([]);
  const [monthlyFee, setMonthlyFee] = useState(100);

  // Function to calculate monthly fee based on funds available, cash in hand, and planned activities
  const calculateMonthlyFee = () => {
    // Your calculation logic here
    const calculatedFee = (fundsAvailable + cashInHand) / plannedActivities.length; // Example calculation
    setMonthlyFee(calculatedFee);
  };

  return (
    <div>
      <h2>Planned Activities:</h2>
      <ul>
        {plannedActivities.map((activity, index) => (
          <li key={index}>{activity}</li>
        ))}
      </ul>
      <input
        type="text"
        placeholder="Enter planned activity"
        value={plannedActivities}
        onChange={(e) => setPlannedActivities(e.target.value.split(','))}
      />

      <button onClick={calculateMonthlyFee}>Calculate Monthly Fee</button>

      <h2>Monthly Maintenance Fee: {monthlyFee}</h2>
    </div>
  );
}

export default MonthlyMaintenanceFee;
