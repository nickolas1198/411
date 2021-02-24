import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "../Styles/App.css";

import Navbar from "../components/Navbar";
import TextEditorGrid from "../components/TextEditorGrid/TextEditorGrid";

function App() {
  const [source_code, setSource_code] = useState("");
  const [stdin, setStdin] = useState("");
  const [stdout, setStdout] = useState("");
  const [stderr, setStderr] = useState("");

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
