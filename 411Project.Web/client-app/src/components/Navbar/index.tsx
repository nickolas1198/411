import React, { useState } from "react";
import "../../../src/Styles/Navbar.css";
import Example from "../languageDropDown";
import RunButton from "./RunButton";
import RegisterModal from "../registerModal";
import Sidebar from "../sidebar";
import SidebarButton from "../SidebarButton/SidebarButton";
import NewFile from "../newFileDropdown";
import valueContext from "../valueContext"
type NavbarInfo = {
  sourceCode: string;
  stdin: string;
  setStdout: (stdout: string) => void;
  setStderr: (stderr: string) => void;
  setCompileOutput: (compile_output: string) => void;
  setLoading: (loading: boolean) => void;
  setLanguageName: (languageName: string) => void;
  setFontSize: (fontSize: number) => void;
  setTheme: (theme: string) => void;
};

function Navbar(props: NavbarInfo) {

  const [languageId, setLanguageId] = useState(62); // 62 is Java's language_id
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const value = React.useContext(valueContext);

  const refreshPage = () => {
    window.location.reload();
  };

  if (value.loggedIn){
    return (
    
      <div className="ui navMenu">
        <div className = "NavHeader">
          <h1 className="navbar-logo" onClick={refreshPage}><i className="fas fa-desktop fa-fw" />codePlay</h1>
        </div>
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
        <NewFile />
        <SidebarButton
          setSidebarVisible={(sidebarVisible: boolean) => setSidebarVisible(true)}
        />
        <Sidebar
          sidebarVisible={sidebarVisible}
          setSidebarVisible={(sidebarVisible: boolean) =>
            setSidebarVisible(false)
          }
          setFontSize={(fontSize: number) => props.setFontSize(fontSize)}
          setTheme={(theme: string) => props.setTheme(theme)}
        />
      </div>
    );
  }
  else {
    return (
    
      <div className="ui navMenu">
        <div className = "NavHeader">
          <h1 className="navbar-logo" onClick={refreshPage}><i className="fas fa-desktop fa-fw" />codePlay</h1>
        </div>
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
        
        <NewFile />
        <RegisterModal /> 
        <SidebarButton
          setSidebarVisible={(sidebarVisible: boolean) => setSidebarVisible(true)}
        />
        <Sidebar
          sidebarVisible={sidebarVisible}
          setSidebarVisible={(sidebarVisible: boolean) =>
            setSidebarVisible(false)
          }
          setFontSize={(fontSize: number) => props.setFontSize(fontSize)}
          setTheme={(theme: string) => props.setTheme(theme)}
        />
        
      </div>
    );
  }
  }
 

export default Navbar;
