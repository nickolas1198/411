import React from "react";
import "../Styles/App.css";
import Navbar from '../components/Navbar';
import {BrowserRouter as Router} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
      </Router>
      
      <header className="App-header"></header>
    </div>
  );
}

export default App;
