import React from 'react';
import './App.css';
import SideBar from './components/SideBar.js';
import HomePage from './components/HomePage.js';

const App = () => {
return(
  <div className="container">
    <SideBar/>
    <HomePage/>
  </div>
)
};

export default App;
