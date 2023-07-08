import React, { useState } from 'react';

function ClockStatus() {
  const [clockedIn, setClockedIn] = useState(false);

  return (
    <div>
      <p>Current Status: {clockedIn ? 'Clock In' : 'Clock Out'}</p>
    </div>
  );
}

export default ClockStatus;
