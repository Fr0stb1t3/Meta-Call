import './App.css';
import React, { useState, useEffect } from 'react';
import ParticlesBackground from './components/ParticlesBackground';
function App() {
  const [logoSize, setLogoSize] = useState('large');
  const [showTile, setShowTile] = useState(false);
  const[data,setData] = React.useState(null);
  React.useEffect(()=>{
    fetch('/users').then(res=>res.json().then(data=>setData(data.message)));
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
        <a href='https://meta-call.onrender.com/'><button>Get started</button></a>
      </div>
    </div>
  );
}

export default App;
