import React from 'react';
import logo from './logo.svg';
import './App.css';

const f ='HI'
const z = 2;
const b = 3

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Edit <code>src/App.js</code> and save to reload.</p>
        <p style={{color: 'red'}}>Hello World</p>
        <p>{f}</p>
        <p>{z+b}</p>
        <p>{258}</p>
        <p>{z<0 ? 'Ок' : 'Не ок'}</p>
        <p> {null}{undefined}{true}{false}</p>
        <p>{1 && 0}</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
