import React from "react";
import { Grid } from "semantic-ui-react";

import Navbar from "../Navbar";
import TextEditorGrid from "../TextEditorGrid/TextEditorGrid";

const AppGrid = () => (
  <>
    <Grid columns="equal" style={{ height: "100vh" }}>
      <Grid.Row style={{ height: "80px", flexDirection: "column", padding: 0 }}>
        <Navbar />
      </Grid.Row>
      <TextEditorGrid />
    </Grid>
  </>
);

export default AppGrid;
