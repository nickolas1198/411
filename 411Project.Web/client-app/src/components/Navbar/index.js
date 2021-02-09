import React, {useState} from 'react';
import Dropdown from '../Dropdown';
import {Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink} from './NavbarElements';
import '../../../src/Styles/Navbar.css'

function Navbar() {

    const [dropdown, setDropdown] = useState(false);

    const onMouseEnter = () => {
        if(window.innerWidth < 960){
            setDropdown(false)
        } else {
            setDropdown(true)
        }
    }
    const onMouseLeave = () => {
        if(window.innerWidth < 960){
            setDropdown(false)
        } else {
            setDropdown(false)
        }
    }

    return (
        <>
        <Nav>
          <NavLink to ="/">
          <i class='fas fa-desktop fa-fw'/>
              <h1>codePlay</h1>
              
          </NavLink>
          <Bars/>
            <NavMenu>
                <NavLink to="/languages" activeStyle>
                    Languages
                </NavLink>
                <NavLink to="/run" activeStyle>
                 <i className ='fas fa-play fa-fw'/>Run
                </NavLink>
                <li className='nav-item' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                <NavLink  to="/file" activeStyle>
                    File <i className ='fas fa-caret-down fa-fw'/>
                </NavLink>
                {dropdown && <Dropdown />}
                </li>
                <NavLink to="/settings" activeStyle>
                    Settings <i className ='fas fa-caret-down fa-fw'/>
                </NavLink>

                
            </NavMenu>
            <NavBtn>
                <NavBtnLink to ="/signin">Sign In</NavBtnLink>
                <NavBtnLink to="/signup" activeStyle>Sign Up</NavBtnLink>
            </NavBtn>
        </Nav>
        </>
    );
};

export default Navbar;