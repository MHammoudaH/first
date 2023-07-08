import React, { useState } from 'react';

function TimeDisplay() {
  const [clockInTime, setClockInTime] = useState('');
  const [clockOutTime, setClockOutTime] = useState('');

  return (
    <div>
      <p>Clock In Time: {clockInTime ? clockInTime : '00:00'}</p>
      <p>Clock Out Time: {clockOutTime ? clockOutTime : '00:00'}</p>
    </div>
  );
}

export default TimeDisplay;
