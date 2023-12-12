import { useEffect, useState } from 'react';
import logo from './logo.svg';

const Home = ({user, session}) => {
  const idpLogoutUrl = `https://localhost:10443/samlslo`;


  const logout = (e) => {
    e.preventDefault();
    console.log('logout', idpLogoutUrl)
    window.location.href = idpLogoutUrl
  }

  return (
  <div>
    {/* <img src={logo} className="App-logo" alt="logo" /> */}
    <p>
      {/* Edit <code>src/App.js</code> and save to reload. */}
      SAML Application dashboard
    </p>
    {/* <a
      className="App-link"
      href="https://reactjs.org"
      target="_blank"
      rel="noopener noreferrer"
    >
      Learn React
    </a> */}
    {/* <div className='form-item'>
      <h6>User: {user}</h6>
    </div> */}
    <div className='form-item'>
      <h6>Session: {session}</h6>
    </div>
    <div className='form-item'>
      <button onClick={logout}>Logout</button>
    </div>
  </div>);
}

export default Home;