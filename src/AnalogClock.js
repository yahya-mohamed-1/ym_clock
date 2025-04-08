import React, { useState, useEffect } from 'react';
import "./clock.css"

function AnalogClock() {
  const [hour, setHour] = useState(0);
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(0);

  useEffect(() => {
    document.title = "YM Clock"
    const deg = 6;
    const updateClock = () => {
      const day = new Date();
      const hh = day.getHours() * 30;
      const mm = day.getMinutes() * deg;
      const ss = day.getSeconds() * deg;
      setHour(hh + (mm / 12));
      setMinute(mm);
      setSecond(ss);
    };
    setInterval(updateClock, 1000);
  }, []);

  return (
    <div className="analogclock">
      <div className="ym">YM Clock</div>
      <div className="hr" style={{ transform: `rotateZ(${hour}deg)` }}></div>
      <div className="min" style={{ transform: `rotateZ(${minute}deg)` }}></div>
      <div className="sec" style={{ transform: `rotateZ(${second}deg)` }}></div>
    </div>
  );
}

export default AnalogClock;