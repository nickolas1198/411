import React, { useState } from "react";
import { Grid } from "semantic-ui-react";
// @ts-ignore
import LoadingOverlay from "react-loading-overlay";
import AceEditorCode from "./AceEditors/AceEditorCode";
import AceEditorConsoleInput from "./AceEditors/AceEditorConsoleInput";
import AceEditorConsoleOutput from "./AceEditors/AceEditorConsoleOutput";

import Navbar from "../Navbar";

const TextEditorGrid = (props: any) => {
  const [source_code, setSource_code] = useState("");
  const [stdin, setStdin] = useState("");
  const [stdout, setStdout] = useState("");
  const [stderr, setStderr] = useState("");
  const [loading, setLoading] = useState(false);

  return (
    <>
      <LoadingOverlay
        active={loading}
        spinner
        text="Running code"
        fadeSpeed={250}
      >
        <Grid
          style={{
            height: "100vh",
            marginTop: "0px",
            marginBottom: "0px",
            marginLeft: "0px",
            marginRight: "0px",
          }}
        >
          <Grid.Row style={{ height: "60px" }}>
            <Navbar
              sourceCode={source_code}
              stdin={stdin}
              setStdout={(output: string) => setStdout(output)}
              setStderr={(err: string) => setStderr(err)}
              setLoading={(loading: boolean) => setLoading(loading)}
            />
          </Grid.Row>
          <Grid.Row stretched style={{ padding: 0, height: "100%" }}>
            <Grid.Column
              floated="left"
              width={10}
              style={{ padding: 0, height: "inherit" }}
            >
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
      </LoadingOverlay>
    </>
  );
};

export default TextEditorGrid;
