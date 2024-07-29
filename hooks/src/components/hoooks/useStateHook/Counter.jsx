import { useEffect, useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);
    const [date, setDate] =useState('');

   useEffect(() => {
    const timer = setInterval(() => {
        setCount(count => count + 1);
    }, 1000);
    return () => clearInterval(timer);
   }, []);
    
   useEffect(() => {
    setInterval(() => {
        const date = new Date();
        setDate(date.toLocaleTimeString())
    }, 1000);
   }, [])

  return (
    <div style={{textAlign: 'center', display:' flex', justifyContent: 'center',gap: '20px'}}>
        
        <button style={{
            backgroundColor: 'blueviolet',
            padding: '10px',
            color: 'white',
            fontSize: '20px'
        }}> Timer:  {count} </button>
        <button style={{
            backgroundColor: 'blueviolet',
            padding: '10px',
            color: 'white',
            fontSize: '20px'
        }}>Today Time : {date}  </button>
    </div>
  )
}

export default Counter;