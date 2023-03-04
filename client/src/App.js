import './App.css';
import React, { useState, useEffect } from 'react';
import ParticlesBackground from './components/ParticlesBackground';
function App() {
  const [logoSize, setLogoSize] = useState('large');
  const [showTile, setShowTile] = useState(false);
  const[data,setData] = React.useState(null);
  React.useEffect(()=>{
    fetch('/api').then(res=>res.json().then(data=>setData(data.message)));
  },[]);
  useEffect(() =>{
    setTimeout(() =>{
      setLogoSize('small');
      setShowTile(true);
    },3000);
  },[]);
  console.log(data);
  return (
    <div className="home-page">
      <ParticlesBackground/>
      <div className={`logo ${logoSize}`}>MetaCall</div>
      <div className={`description ${showTile ? 'show' : ''}`}>
        <p>Welcome to MetaCall, the next generation video conferencing platform.</p>
        <button>Get started</button>
        <p>{!data ? "Loading..." : data}</p>
      </div>
    </div>
  );
}

export default App;
/*
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
    </div>*/