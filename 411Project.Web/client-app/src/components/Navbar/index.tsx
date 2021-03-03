import React, { useState } from "react";
import Dropdown from "../Dropdown";
import { NavLink, NavBtn, NavBtnLink } from "./NavbarElements";
import "../../../src/Styles/Navbar.css";
import Example from "../languageDropDown";
import RunButton from "./RunButton";
import { RunButtonInfo } from "./RunButton";
import Modal from '../signUpModal';
function Navbar(props: RunButtonInfo) {
  const [dropdown, setDropdown] = useState(false);

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

  return (

      <div className="ui navMenu">
        <NavLink to="/">
          <i className="fas fa-desktop fa-fw" />
          <h1 className="navbar-logo">codePlay</h1>
        </NavLink>
        <Example />
        <RunButton
          sourceCode={props.sourceCode}
          stdin={props.stdin}
          setStdout={props.setStdout}
          setStderr={props.setStderr}
          setLoading={props.setLoading}
        />
        {/**
        <li
          className="nav-item"
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          <a className="item">
            File <i className="fas fa-caret-down fa-fw" />
            {dropdown && <Dropdown />}
          </a>
        </li>
        <a className="item">
          Settings <i className="fas fa-caret-down fa-fw" />
        </a>
        
        <Modal/>*/}
      </div>
  );
}

export default Navbar;
