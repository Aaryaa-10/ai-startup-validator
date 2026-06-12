import { useState } from 'react';

import api from '../services/api';

function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        try{
            const res = await api.post("/auth/register", {name, email, password});
            console.log(res.data);
            alert("Registration Successful!");
        } catch (error) {
            console.log(error);
            console.log(error.response?.data);

            alert(error.response?.data?.message || "Registration Failed!");
        }
    };

    return (
        <div className="form-card">
            <h1>Register</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button  className="primary-btn" type="submit">Register</button> 
            </form>
        </div>
    );
}

export default Register;