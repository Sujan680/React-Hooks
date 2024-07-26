import { useEffect, useState } from "react"

export default function Clock() {

    const [date, setDate] =useState();

    useEffect(() => {
        setInterval(() => {
            const updateDate = new Date();
            setDate(updateDate.toLocaleTimeString())
        }, 1000)
        
    }, [ ])

   

  return (

    <div className="container">
        <h1>Todays Time</h1>
        <h2 style={{
            border:'2px solid red',
            padding: '10px',
            backgroundColor: 'brown',
            borderRadius: '5px'
        }}>Date: {date}</h2>
    </div>
  )
}
