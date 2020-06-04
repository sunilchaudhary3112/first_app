import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';


const Button = (props) => {
  const handleClick = (event) => {
    event.preventDefault();
    console.log('clicked');
  }
  return (
    <button onClick={handleClick}> {props.name} </button>
  );
}

function App() {
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
        <Button name="click us" className="btn" />
      </header>
    </div>
  );
}

export default App;
