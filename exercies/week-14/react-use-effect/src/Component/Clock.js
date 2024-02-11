import React, { useState, useEffect } from 'react';

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // Clean up the interval when the component unmounts or when time is no longer needed
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array ensures the effect runs only once when the component mounts

  const formattedTime = time.toLocaleTimeString();

  return (
    <div>
      <h1>Current Time:</h1>
      <p>{formattedTime}</p>
    </div>
  );
};

export default Clock;
