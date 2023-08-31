import React, { useState } from 'react';
import './index.css';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUserNameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Username:', username);
    console.log('Password', password);
  };

  const loginWithSSO = (e) => {
    e.preventDefault();
    console.log('loginWithSSO');
  }

  return (
    <div className="form-wrapper">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-item">
          <label>Username:</label>
          <input 
            type="text"
            value={username}
            onChange={handleUserNameChange}
          />
        </div>
        <div className="form-item">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <div className='form-item'>
          <button disabled={username === '' || password === ''} type="submit">Login</button>
          <button onClick={loginWithSSO}>Login with SSO</button>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
