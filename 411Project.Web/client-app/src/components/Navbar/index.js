import React, { useState } from 'react';
import Dropdown from '../Dropdown';
import {Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink} from './NavbarElements';
import '../../../src/Styles/Navbar.css';
import Example from '../languageDropDown';

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
        <div> 
                <div class="ui navMenu">
                    <NavLink to= "/">
                    
                    <i class='fas fa-desktop fa-fw'/>
                    <h1 className ='navbar-logo'>codePlay</h1>
                   
                    </NavLink>
                    <Example/>
                    <a class="item">
                    <i className ='fas fa-play fa-fw'/> Run (F9)
                    </a>
                    <li className='nav-item' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                    <a class="item">
                    File <i className ='fas fa-caret-down fa-fw'/>
                    {dropdown && <Dropdown />}
                    </a>
                    </li>
                    <a class="item">
                        Settings <i className ='fas fa-caret-down fa-fw'/>
                    </a>
                    <NavBtn>
                    <NavBtnLink to ="/signin">Sign In</NavBtnLink>
                    <NavBtnLink to="/signup" >Sign Up</NavBtnLink>
                    </NavBtn>
                </div>
            

        
        </div>
    );
};

export default Navbar;
