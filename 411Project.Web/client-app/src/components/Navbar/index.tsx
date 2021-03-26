import React, { useState } from "react";
import { NavLink } from "./NavbarElements";
import "../../../src/Styles/Navbar.css";
import Example from "../languageDropDown";
import RunButton from "./RunButton";
import RegisterModal from "../registerModal";
import Dropdown from "../Dropdown";

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
  const [dropdown, setDropdown] = useState(false);
  const [languageId, setLanguageId] = useState(62); // 62 is Java's language_id

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };
  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };
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
      {/*
        <li
          
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          <a className="fileButton">
            File <i className="fas fa-caret-down fa-fw" />
            {dropdown && <Dropdown />}
          </a>
        </li>
       <a className="item">
          Settings <i className="fas fa-caret-down fa-fw" />
          
        </a>
      */}
      <RegisterModal />
    </div>
  );
}

export default Navbar;
