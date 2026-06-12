import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import api from "../services/api";
import { AuthContext } from "../context/AuthContext";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { login } = useContext(AuthContext);

    const navigate = useNavigate();
    const handleSubmit = async (e) =>{
        e.preventDefault();

        try {
            const res = await api.post("/auth/login" , {
                email,
                password,
            });
            login(res.data.token);
            alert("Login Succesful");
            navigate("/dashboard");

        } catch (error) {
    console.log(error);
    console.log(error.response?.data);
    alert("Login Failed");
}
    };

    return (
        <div className="form-card">
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button className="primary-btn" type="submit">Login</button>
            </form>
        </div>
    );
}

export default Login;