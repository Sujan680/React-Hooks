import { useState } from "react"

const Todo = () => {
    const [name, setName] = useState('');
    const [todo, setTodo] = useState([]);

    const handleClick = () => {
        setTodo([...todo, name]);
        setName('');
    }
  return (
    <div style={{textAlign:'center'}}>
        <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} />
        <button onClick={handleClick}>
            Add Todo
        </button>
        <ul>
            {
               todo.map((item, index) => (
                <li
                style={{
                    listStyle: 'none',
                    border:'2px solid red',
                    padding: '5px',
                    margin:' 4px'
                }}
                 key={index}> {item} </li>
               ))
            }
        </ul>
    </div>
  )
}

export default Todo