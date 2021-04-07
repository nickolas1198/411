import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "../Styles/App.css";
import TextEditorGrid from "../components/TextEditorGrid/TextEditorGrid";

function App() {
  return (
    <div className="App">
      <Router>
        <TextEditorGrid/>
        
      </Router>
    </div>
  );
}

export default App;
