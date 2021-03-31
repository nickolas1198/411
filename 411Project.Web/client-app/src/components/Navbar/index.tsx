import React, { useState } from "react";
import { NavLink } from "./NavbarElements";
import "../../../src/Styles/Navbar.css";
import Example from "../languageDropDown";
import RunButton from "./RunButton";
import RegisterModal from "../registerModal";
import Sidebar from "../sidebar"
import NewFile from "../newFileDropdown"
type NavbarInfo = {
  sourceCode: string;
  stdin: string;
  setStdout: (stdout: string) => void;
  setStderr: (stderr: string) => void;
  setCompileOutput: (compile_output: string) => void;
  setLoading: (loading: boolean) => void;
  setLanguageName: (languageName: string) => void;
};

function Navbar(props: NavbarInfo) {

  const [languageId, setLanguageId] = useState(62); // 62 is Java's language_id

  const refreshPage = () => {
    window.location.reload();
  };
  return (
    <div className="ui navMenu">
      <NavLink to="/" onClick={refreshPage}>
        <i className="fas fa-desktop fa-fw" />
        <h1 className="navbar-logo">codePlay</h1>
        
      </NavLink>
      <Example
        setLanguageName={props.setLanguageName}
        setLanguageId={(languageId: number) => setLanguageId(languageId)}
      />
      <RunButton
        languageId={languageId}
        sourceCode={props.sourceCode}
        stdin={props.stdin}
        setStdout={props.setStdout}
        setStderr={props.setStderr}
        setCompileOutput={props.setCompileOutput}
        setLoading={props.setLoading}
      />  
      <RegisterModal />
      <NewFile/>
      <Sidebar/>
      
      
    </div>
  );
  
}

export default Navbar;
