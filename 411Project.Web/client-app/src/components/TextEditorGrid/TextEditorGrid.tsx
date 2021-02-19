import React from "react";
import { Grid } from "semantic-ui-react";

import AceEditorCode from "./AceEditors/AceEditorCode";
import AceEditorConsoleInput from "./AceEditors/AceEditorConsoleInput";
import AceEditorConsoleOutput from "./AceEditors/AceEditorConsoleOutput";

const TextEditorGrid = () => (
  <Grid.Row stretched style={{ height: "100%", padding: 0 }}>
    <Grid.Column floated="left" width={10} style={{ padding: 0 }}>
      <AceEditorCode />
    </Grid.Column>
    <Grid.Column floated="right" width={6} style={{ padding: 0 }}>
      <AceEditorConsoleInput />
      <AceEditorConsoleOutput />
    </Grid.Column>
  </Grid.Row>
);

export default TextEditorGrid;
