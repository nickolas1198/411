import React from "react";
import { Button, Icon } from "semantic-ui-react";
import "./SidebarButton.css";

type SidebarButtonType = {
  setSidebarVisible: (sidebarVisible: boolean) => void;
};

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
