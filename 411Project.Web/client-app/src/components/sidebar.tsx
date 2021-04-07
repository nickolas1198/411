import React from "react";
import { Card, Sidebar, Label } from "semantic-ui-react";
import FontSizeDropdown from "./FontSizeDropdown/FontSizeDropdown";

import "../Styles/Navbar.css";

type SidebarExampleSidebarType = {
  sidebarVisible: boolean;
  setSidebarVisible: (sidebarVisible: boolean) => void;
  setFontSize: (fontSize: number) => void;
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
        <Card.Group>
          <Card>
            <Label>
              Font size
              <FontSizeDropdown
                setFontSize={(fontSize: number) => props.setFontSize(fontSize)}
              />
            </Label>
          </Card>
        </Card.Group>
      </Sidebar>
    </>
  );
};

export default SidebarExampleSidebar;
