import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "../Styles/App.css";
import TextEditorGrid from "../components/TextEditorGrid/TextEditorGrid";
import { UserContext } from "../Context/UserContext";

function App() {
  const [user, setUser] = useState(true);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <div className="App">
        <Router>
          <TextEditorGrid />
        </Router>
      </div>
    </UserContext.Provider>
  );
}

export default App;
