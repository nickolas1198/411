import React, { useState } from "react";
import { Grid } from "semantic-ui-react";
import FlexLayout from "flexlayout-react";
import { json } from "./FlexLayoutConfig";
import "flexlayout-react/style/dark.css";
// @ts-ignore
import LoadingOverlay from "react-loading-overlay";
import AceEditorCode from "./AceEditors/AceEditorCode";
import AceEditorConsoleInput from "./AceEditors/AceEditorConsoleInput";
import AceEditorConsoleOutput from "./AceEditors/AceEditorConsoleOutput";

import Navbar from "../Navbar";

const TextEditorGrid = () => {
  const [model, setModel] = useState(FlexLayout.Model.fromJson(json));
  const [source_code, setSource_code] = useState("");
  const [stdin, setStdin] = useState("");
  const [stdout, setStdout] = useState("");
  const [stderr, setStderr] = useState("");
  const [compile_output, setCompile_output] = useState("");
  const [loading, setLoading] = useState(false);
  const [languageName, setLanguageName] = useState("java");

  // This "factory" is used to generate the FlexLayout(resizeable grid)
  var factory = (node: any) => {
    var component = node.getComponent();

    if (component === "AceEditorCode") {
      return (
        <AceEditorCode
          languageName={languageName}
          setEditorCode={(code: string) => setSource_code(code)}
        />
      );
    } else if (component === "AceEditorConsoleInput") {
      return (
        <AceEditorConsoleInput
          setConsoleInput={(input: string) => setStdin(input)}
        />
      );
    } else if (component === "AceEditorConsoleOutput") {
      return (
        <AceEditorConsoleOutput
          stdout={stdout}
          stderr={stderr}
          compile_output={compile_output}
        />
      );
    }
  };

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
          <Grid.Row
            stretched
            style={{ padding: 0, height: "calc(100% - 60px)" }}
          >
            <FlexLayout.Layout model={model} factory={factory} />
          </Grid.Row>
        </Grid>
      </LoadingOverlay>
    </>
  );
};

export default TextEditorGrid;
