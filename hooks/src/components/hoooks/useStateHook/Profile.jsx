import { useState } from "react";

const Profile = () => {

    const [profile, setProfile] = useState({
        name: '',
        age:  '',
        email: ''
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setProfile({
            ...profile,
            [name]: value,
        });
    };

    const handleSubmit =(e) => {
        e.preventDefault();
        console.log(`Name: ${profile.name}, Age: ${profile.age}, Email: ${profile.email}`);
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name:</label>
                <input type="text" name="name" value={profile.name} onChange={handleChange} />
            </div>
            <div>
                <label>Age:</label>
                <input type="number" name="age" value={profile.age} onChange={handleChange} />
            </div>
            <div>
                <label>Email</label>
                <input type="email" name="email" value={profile.email} onChange={handleChange} />
            </div>
            <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default Profile;