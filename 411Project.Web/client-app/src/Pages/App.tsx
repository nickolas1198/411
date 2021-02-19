import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "../Styles/App.css";

import AppGrid from "../components/AppGrid/AppGrid";

function App() {
  return (
    <div className="App">
      <Router>
        <AppGrid />
      </Router>
    </div>
  );
}

export default App;
