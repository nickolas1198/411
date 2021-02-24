import React, { useState } from "react";
import { Grid } from "semantic-ui-react";

import AceEditorCode from "./AceEditors/AceEditorCode";
import AceEditorConsoleInput from "./AceEditors/AceEditorConsoleInput";
import AceEditorConsoleOutput from "./AceEditors/AceEditorConsoleOutput";

import RunButton from "../RunButton/RunButton";

const TextEditorGrid = (props: any) => {
  const [source_code, setSource_code] = useState("");
  const [stdin, setStdin] = useState("");
  const [stdout, setStdout] = useState("");
  const [stderr, setStderr] = useState("");

  return (
    <Grid style={{ marginTop: "80px" }}>
      <RunButton
        sourceCode={source_code}
        stdin={stdin}
        setStdout={(output: string) => setStdout(output)}
        setStderr={(err: string) => setStderr(err)}
      />
      <Grid.Row stretched style={{ padding: 0 }}>
        <Grid.Column floated="left" width={10} style={{ padding: 0 }}>
          <AceEditorCode
            setEditorCode={(code: string) => setSource_code(code)}
          />
        </Grid.Column>
        <Grid.Column floated="right" width={6} style={{ padding: 0 }}>
          <AceEditorConsoleInput
            setConsoleInput={(input: string) => setStdin(input)}
          />
          <AceEditorConsoleOutput stdout={stdout} stderr={stderr} />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default TextEditorGrid;
