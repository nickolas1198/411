import React from "react";
import { Card, Sidebar, Label } from "semantic-ui-react";
import FontSizeDropdown from "./FontSizeDropdown/FontSizeDropdown";
import ThemeDropdown from "./ThemeDropdown/ThemeOptionsDropdown";
import "../Styles/Navbar.css";

type SidebarExampleSidebarType = {
  sidebarVisible: boolean;
  setSidebarVisible: (sidebarVisible: boolean) => void;
  setFontSize: (fontSize: number) => void;
  setTheme: (theme: string) => void;
};

const SidebarExampleSidebar = (props: SidebarExampleSidebarType) => {
  return (
    <>
      <Sidebar
        as={Card}
        animation="push"
        icon="labeled"
        inverted
        onHide={() => props.setSidebarVisible(!props.sidebarVisible)}
        vertical
        visible={props.sidebarVisible}
        direction="right"
      >
        <Card.Group centered>
          <Card.Header>Editor Settings<i 
              className="fa fa-times closeButton"
              aria-hidden="true"
              onClick={() => props.setSidebarVisible(!props.sidebarVisible)}
            ></i></Card.Header>
          <Card centered>
            <Label horizontal>
              Font size &nbsp;
              <FontSizeDropdown
                setFontSize={(fontSize: number) => props.setFontSize(fontSize)}
              />
            </Label>
            <Label horizontal>
              Theme &nbsp;
              <ThemeDropdown
                setTheme={(theme: string) => props.setTheme(theme)}
              />
            </Label>
          </Card>
        </Card.Group>
      </Sidebar>
    </>
  );
};

export default SidebarExampleSidebar;
