import React, { useState, useEffect } from "react";

function Timer() {
  const [timerValue, setTimerValue] = useState(30);
  const [timerRemain, setTimerRemain] = useState(false);

  const startTimer = () => {
    setTimerRemain(true);
    setTimerValue(30);
  };

  const stopTimer = () => {
    setTimerRemain(false);
    // setTimerValue(30);
  };

  useEffect(() => {
    let interval;

    if (timerRemain && timerValue > 0) {
      interval = setInterval(() => {
        setTimerValue((prev) => prev - 1);
      }, 1000);
    }

    if (timerValue === 0) {
      setTimerRemain(false);
    }

    return () => clearInterval(interval);
  }, [timerRemain, timerValue]);

  return (
    <div>
      <h1>Timer 30 seconds</h1>
      <p>{timerValue} sec</p>
      <button onClick={startTimer} disabled={timerRemain}>Start</button>
      <button onClick={stopTimer}>Stop</button>
    </div>
  );
}

export default Timer;
