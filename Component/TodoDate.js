import { useState, useEffect } from "react";


const TodoDate = () => {
  const [dateTime,setDateTime] = useState("");

  useEffect(()=>{
    const interval = setInterval(() => {
      const now = new Date();
      const formatteedDate = now.toLocaleDateString();
      const formatteedTime = now.toLocaleTimeString();
      setDateTime(`${formatteedDate} - ${formatteedTime}`);
    },1000);
    return () => clearInterval(interval);
  },[]);

  return (
    <>
            <h2 className="date-time">{dateTime}</h2>
    </>
  );
};

export default TodoDate;

