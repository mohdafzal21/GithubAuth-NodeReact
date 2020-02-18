import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'
function App() {
  function handleClick(){
    axios.get('http://localhost:5000/github')
    .then((data)=> console.log(data))
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <button onClick={handleClick}>Signuo</button>
      <a href="http://localhost:5000/github">signup</a>
    </div>
  );
}

export default App;
