import React, { useState } from "react";
import { Grid } from "semantic-ui-react";
// @ts-ignore
import LoadingOverlay from "react-loading-overlay";
import AceEditorCode from "./AceEditors/AceEditorCode";
import AceEditorConsoleInput from "./AceEditors/AceEditorConsoleInput";
import AceEditorConsoleOutput from "./AceEditors/AceEditorConsoleOutput";

import Navbar from "../Navbar";
import EditorHeadder from "./EditorHeader/EditorHeader";

const TextEditorGrid = () => {
  const [source_code, setSource_code] = useState("");
  const [stdin, setStdin] = useState("");
  const [stdout, setStdout] = useState("");
  const [stderr, setStderr] = useState("");
  const [compile_output, setCompile_output] = useState("");
  const [loading, setLoading] = useState(false);
  const [languageName, setLanguageName] = useState("java");

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
              setCompileOutput={(compileOutput: string) =>
                setCompile_output(compileOutput)
              }
              setLanguageName={(languageName: string) =>
                setLanguageName(languageName)
              }
            />
          </Grid.Row>
          <Grid.Row stretched style={{ padding: 0, height: "100%" }}>
            <Grid.Column
              floated="left"
              width={10}
              style={{ padding: 0, paddingRight: "3px", height: "inherit" }}
            >
              <EditorHeadder headerName="Main Editor" />
              <AceEditorCode
                languageName={languageName}
                setEditorCode={(code: string) => setSource_code(code)}
              />
            </Grid.Column>
            <Grid.Column floated="right" width={6} style={{ padding: 0 }}>
              <EditorHeadder headerName="Console Input" />
              <AceEditorConsoleInput
                setConsoleInput={(input: string) => setStdin(input)}
              />
              <EditorHeadder headerName="Console Output" />
              <AceEditorConsoleOutput
                stdout={stdout}
                stderr={stderr}
                compile_output={compile_output}
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </LoadingOverlay>
    </>
  );
};

export default TextEditorGrid;
