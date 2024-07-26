import { useEffect, useState } from 'react';
import './index.css'
const UseEffectChallenge = () => {

    const [count, setCount] = useState(0);
    const [name, setName] = useState()

   
    useEffect(() => {
        console.log(name);
    }, [name])

    //changing the title of the page
    useEffect(() => {
        document.title = `Count : ${count}`
    }, [count])

  return (
    <div className="container">
        <h1>useEffect Challenge</h1>
        <p>
            Count: <span> {count} </span>
        </p>

        <button onClick={() => setCount(count + 1)}>Increment</button>

        <p>
            Name: <span> {name} </span>
        </p>

        <input type="text"  value={name} onChange={(e) => setName(e.target.value)} />
    </div>
  )
}

export default UseEffectChallenge;