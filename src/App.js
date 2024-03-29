import React from 'react';
import logo from './logo.svg';
import './App.css';
import MyNavBar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import MyCard from './components/Card';
import MyCarousel from './components/Carousel';
import Card from "./components/Card"




function App() {
  return (
    <Router>
      <MyNavBar />
     <div>
     <MyCarousel />  
     </div>
     <div>
      <Card />
      </div> 

      
      
    </Router>


    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
