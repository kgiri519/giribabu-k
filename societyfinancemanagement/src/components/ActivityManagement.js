import React, { useState } from 'react';

function ActivityManagement() {
  const [activities, setActivities] = useState([]);
  const [newActivity, setNewActivity] = useState('');

  const addActivity = () => {
    if (newActivity.trim() !== '') {
      setActivities([...activities, newActivity.trim()]);
      setNewActivity('');
    }
  };

  const removeActivity = (index) => {
    const updatedActivities = [...activities];
    updatedActivities.splice(index, 1);
    setActivities(updatedActivities);
  };

  return (
    <div>
      <h2>Activity Management</h2>
      <input
        type="text"
        placeholder="Enter new activity"
        value={newActivity}
        onChange={(e) => setNewActivity(e.target.value)}
      />
      <button onClick={addActivity}>Add Activity</button>
      <ul>
        {activities.map((activity, index) => (
          <li key={index}>
            {activity}
            <button onClick={() => removeActivity(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ActivityManagement;
