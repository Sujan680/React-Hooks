import { useState } from "react";

const Form = () => {
    const [name, setName] = useState([]);
    const [email, setEmail] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name);
        console.log(email);
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div style={{ textAlign: 'center' }}>
                    <label>Name:</label>
                    <input type="text" value={name} onChange={(e) => { setName(e.target.value) }} />
                  
                </div>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Form;