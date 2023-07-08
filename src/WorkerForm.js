import React, { useState } from 'react';
import { appendData, authUrl } from './GoogleSheets';

function WorkerForm() {
  const [workerName, setWorkerName] = useState('');

  const handleNameChange = (e) => {
    setWorkerName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Get the current timestamp
    const timestamp = new Date().toLocaleString();

    // Prepare the data to be appended
    const data = [workerName, timestamp];

    // Call the appendData function to insert the data into the Google Sheets file
    appendData(data);

    // Reset the form fields
    setWorkerName('');
  };

  return (
    <div>
      <label htmlFor="workerName">Worker Name:</label>
      <input
        type="text"
        id="workerName"
        value={workerName}
        onChange={handleNameChange}
      />
      <button onClick={handleSubmit}>Submit</button>
      <a href={authUrl}>Authorize with Google</a>
    </div>
  );
}

export default WorkerForm;
