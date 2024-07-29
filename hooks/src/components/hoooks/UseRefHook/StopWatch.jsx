

import  { useRef, useState } from 'react'

export default function StopWatch() {

    const [startTime, setStartTime] = useState(0);
    const [now, setNow] = useState(null);
    const intervalRef = useRef(null);

    const handleStart = () => {
        setStartTime(Date.now());
        setNow(Date.now());

        clearInterval(intervalRef.current);   //ensures any previous interval is cleared to avoid multiple intervals running simultaneously.
        
        intervalRef.current = setInterval(() => {
            setNow(Date.now());
        }, 10)
    }

    const handleStop = () => {
        clearInterval(intervalRef.current)
    }

    const handleReset = () => {
        clearInterval(intervalRef.current);
        setStartTime(0);
        setNow(null)
    }

    let secondPassed = 0;
    if (startTime !== null && now !== null) {
        secondPassed = (now - startTime) / 1000;
    }
    return (
        <div style={{
            backgroundColor: 'cyan',
            textAlign: 'center',
            width: '60%',
            margin: 'auto',
            marginBottom: '20px',
            padding: '20px',
            borderRadius: '10px'
        }}>
            <p style={{
                fontSize: '20px',
                fontWeight: '900'
            }}>
                Time passed: {secondPassed.toFixed(3)} </p>
            <button style={{
                backgroundColor: 'green',
                color: 'white',
                fontSize: '20px',
                marginRight: '10px',
                fontWeight: '900'
            }}
                onClick={handleStart}>Start</button>
            <button style={{
                backgroundColor: 'green',
                color: 'white',
                fontSize: '20px',
                fontWeight: '900'
            }}
                onClick={handleStop}>Stop</button>

            <button style={{
                backgroundColor: 'green',
                color: 'white',
                fontSize: '20px',
                fontWeight: '900',
                marginLeft:'10px'
            }}
                onClick={handleReset}>Reset</button>

        </div>
    )
}
