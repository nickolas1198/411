import React from "react";
import "../Styles/App.css";
import Navbar from "../components/Navbar";
import TextEditorGrid from "../components/TextEditorGrid/TextEditorGrid";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <TextEditorGrid />
      </Router>
    </div>
  );
}

export default App;
