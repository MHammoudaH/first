import React, { useState } from 'react';

function ClockButtons() {
  const [clockedIn, setClockedIn] = useState(false);

  const handleClockIn = () => {
    setClockedIn(true);
  };

  const handleClockOut = () => {
    setClockedIn(false);
  };

  return (
    <div>
      {clockedIn ? (
        <button onClick={handleClockOut}>Clock Out</button>
      ) : (
        <button onClick={handleClockIn}>Clock In</button>
      )}
    </div>
  );
}

export default ClockButtons;
