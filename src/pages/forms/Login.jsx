import { useState } from "react";
import "./forms.css";
import { ToastContainer, toast } from 'react-toastify';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")

  // Form Submit Handler
  const formSubmitHandler = (event) => {
    event.preventDefault();
    
    if(email.trim() === ""){
      return toast.info("Email is required");
      
    }

    if(password.trim() === ""){
        return toast.info("Password is required");
    }

    console.log({email, password});
  };
  return (
    <div className="form-wrapper">
        <ToastContainer theme="light" />
      <form onSubmit={formSubmitHandler} className="form">
        <input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          type="email"
          placeholder="Email"
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          type="password"
          placeholder="Password"
        />
        <button className="form-btn">Login</button>
      </form>
    </div>
  );
};

export default Login;
