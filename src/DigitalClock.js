// 1. Import necessary libraries
import React, { useState, useEffect } from "react";
import "./clock.css";  // Optional: for styling the clock

// 2. Create the Clock component
const DigitalClock = () => {
  // 3. Set the initial state to the current time
  const [time, setTime] = useState(new Date());

  // 4. Update the time every second
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000); // Update every 1 second

    // 5. Cleanup function to clear interval when component unmounts
    return () => clearInterval(interval);
  }, []); // Empty dependency array so this effect runs once on mount

  // 6. Format the time to display as HH:MM:SS
  const formattedTime = time.toLocaleTimeString();

  return (
    <div className="digitalclock">
      <h1>{formattedTime}</h1>
    </div>
  );
};

export default DigitalClock;
