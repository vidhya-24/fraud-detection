import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    });
  };

  const handleSignup = async () => {
    try {
      await axios.post("http://localhost:5000/signup", data);
      alert("Signup Successful ✅");
      navigate("/login");
    } catch (error) {
      alert("Signup Failed ❌");
    }
  };

  return (
    <div className="container">
      <div className="card">
        <h2>Create Account</h2>

        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          onChange={handleChange}
        />

        <button onClick={handleSignup}>Signup</button>
      </div>
    </div>
  );
}

export default Signup;