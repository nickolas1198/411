import React from 'react'
import { Dropdown } from 'semantic-ui-react'
import "../Styles/Navbar.css"
const DropdownExampleDropdown = () => (
  <Dropdown className = "NavItem" text='File'
  floating = "bottom">
    <Dropdown.Menu>
      <Dropdown.Item className = "dropdownItem" icon = 'file' text='New file' />
      <Dropdown.Item className = "dropdownItem" icon = 'folder open' text='Open...'/>
      <Dropdown.Item className = "dropdownItem" icon = 'save' text='Save as...'/>

    </Dropdown.Menu>
  </Dropdown>
)

export default DropdownExampleDropdown