import React from "react";
import {
  Checkbox,
  Grid,
  Header,
  Icon,
  Image,
  Menu,
  Segment,
  Sidebar,
} from "semantic-ui-react";
import "../Styles/Navbar.css";
import { Dropdown } from 'semantic-ui-react'
const SidebarExampleSidebar = () => {
  const [visible, setVisible] = React.useState(false);

  return (
    <>
    <Dropdown className = "hamburgerMenu" icon ='bars' floating = "bottom">
    <Dropdown.Menu className = "dropdownMenu">
       
      <Dropdown.Item className = "dropdownItem" icon='settings' text="Settings" onClick={setVisible}/>
      
    </Dropdown.Menu>
  </Dropdown>

      <Sidebar
        as={Menu}
        animation="overlay"
        icon="labeled"
        inverted
        onHide={() => setVisible(false)}
        vertical
        visible={visible}
        width="thin"
        direction="right"
      >
        <Menu.Item as="a">
          <Icon name="home" />
          Home
        </Menu.Item>
        <Menu.Item as="a">
          <Icon name="gamepad" />
          Games
        </Menu.Item>
        <Menu.Item as="a">
          <Icon name="camera" />
          Channels
        </Menu.Item>
      </Sidebar>
    </>
  );
};

export default SidebarExampleSidebar;

