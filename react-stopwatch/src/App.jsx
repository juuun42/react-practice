import { useState, useEffect } from "react";
import Controls from "./Controls";

function StopWatch() {
  const [time, setTime] = useState(0);

  useEffect(() =>{
    const timer = setInterval(() => {
      setTime((prevTime) => prevTime + 1)
    },1000);

    return () => clearInterval(timer);
  },[]);

  const resetTimer = () => {
    setTime(0);
  }

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>ストップウォッチ</h1>
      <h2>{time}秒</h2>
      <Controls onReset={resetTimer}/>
    </div>
  )
}

export default StopWatch;