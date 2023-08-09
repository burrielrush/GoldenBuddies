import React, { useState } from 'react';
import { useSignup } from '../hooks/useSignup';
import "./signup.css";

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { signup, error, isLoading } = useSignup();

  const handleSubmit = async (e) => { // <-- 'e' is now defined as a parameter
    e.preventDefault();

    await signup(email, password);
  };

  return (
    <form className="signup" onSubmit={handleSubmit}> {/* 'onSubmit' should start with lowercase 's' */}
      <h3>Sign up</h3> {/* Corrected the spelling of "Sign up" */}

      <label>Email:</label>
      <input 
        type="email" 
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />

      <label>Password:</label> {/* Removed unnecessary quotes */}
      <input 
        type="password" 
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />

      <button disabled={isLoading}>Sign up</button> {/* Corrected the spelling of "Sign up" */}
      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default Signup;
