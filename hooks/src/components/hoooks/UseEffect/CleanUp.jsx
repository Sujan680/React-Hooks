import { useEffect, useState } from "react"

const CleanUp = () => {

    const [count, setCount] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCount((prev) => prev + 1)
        }, 1000)

        return() => clearInterval(timer);

    }, [])
  return (
    <div style={{
        textAlign:'center',
        fontSize: '20px',
        border: '2px solid black',
        backgroundColor: 'green',
        color: 'white'
    }}>
        <h2>My Youtube Subscriberr</h2>
        <p><span style={{
            fontSize: '42px', fontWeight: '700'
        }}>{count} </span></p>
        <h4>Realtime Counter</h4>
    </div>
  )
}
export default CleanUp;