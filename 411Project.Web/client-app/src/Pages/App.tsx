import React, {useState} from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "../Styles/App.css";
import TextEditorGrid from "../components/TextEditorGrid/TextEditorGrid";
import valueContext from "../components/valueContext"

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const value = { loggedIn, setLoggedIn };

  return (
    <valueContext.Provider value={value}>
    <div className="App">
      <Router>
        <TextEditorGrid/>
      </Router>
    </div>
    </valueContext.Provider>
  );
}

export default App;
