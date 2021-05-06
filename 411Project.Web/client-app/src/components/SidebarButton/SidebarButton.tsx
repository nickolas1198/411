import React from "react";
import { Button, Icon } from "semantic-ui-react";
import "./SidebarButton.css";
import { Dropdown } from 'semantic-ui-react'
type SidebarButtonType = {
  setSidebarVisible: (sidebarVisible: boolean) => void;
};
/* Nick's attempt at a hamburger menu
const SidebarButton = (props: SidebarButtonType) => {
  return (
      <div className="sidebarButton">
        <Dropdown className = "NavItem" icon= "sidebar">
    <Dropdown.Menu>
      <Dropdown.Item className = "dropdownItem" icon = 'setting' text='Account settings' />
      <Dropdown.Item className = "dropdownItem" icon = 'write' text='Editor Settings' onClick={(event) => props.setSidebarVisible(true)}/>
      <Dropdown.Item className = "dropdownItem" icon = 'file code outline' text='Manage Programs'/>

    </Dropdown.Menu>
  </Dropdown>
      </div>
  );
};*/
const SidebarButton = (props: SidebarButtonType) => {
  return (
      <div className="sidebarButton">
        <Button
          icon
          color="grey"
          size="small"
          onClick={(event) => props.setSidebarVisible(true)}
        >
          <Icon name="sidebar" />
        </Button>
      </div>
  );
};


export default SidebarButton;
