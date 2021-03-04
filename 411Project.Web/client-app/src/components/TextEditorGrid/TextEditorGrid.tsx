import React, { useState } from "react";
import { Grid } from "semantic-ui-react";
import RGL, { WidthProvider } from "react-grid-layout";

import GridLayout from "react-grid-layout";
import "../../../node_modules/react-grid-layout/css/styles.css";
import "../../../node_modules/react-resizable/css/styles.css";

// @ts-ignore
import LoadingOverlay from "react-loading-overlay";
import AceEditorCode from "./AceEditors/AceEditorCode";
import AceEditorConsoleInput from "./AceEditors/AceEditorConsoleInput";
import AceEditorConsoleOutput from "./AceEditors/AceEditorConsoleOutput";

import Navbar from "../Navbar";
import EditorHeadder from "./EditorHeader/EditorHeader";

const ReactGridLayout = WidthProvider(RGL);

const TextEditorGrid = () => {
  const [source_code, setSource_code] = useState("");
  const [stdin, setStdin] = useState("");
  const [stdout, setStdout] = useState("");
  const [stderr, setStderr] = useState("");
  const [compile_output, setCompile_output] = useState("");
  const [loading, setLoading] = useState(false);
  const [languageName, setLanguageName] = useState("java");
  const [editorResize, setEditorResize] = useState(false);

  /* 
    MAX values to fill screen:
      - w -> 12
      - h -> by rowHeight?
  */
  const layout = [
    { i: "a", w: 8, h: 30, x: 0, y: 0 },
    { i: "b", w: 4, h: 15, x: 8, y: 0 },
    { i: "c", w: 4, h: 15, x: 8, y: 3 },
  ];

  return (
    <>
      <ReactGridLayout
        className="layout"
        layout={layout}
        cols={12}
        maxRows={30}
        rowHeight={21}
        isResizable={true}
        autoSize={true}
        onResizeStop={() => setEditorResize(true)}
      >
        <div key="a">
          <EditorHeadder headerName="Main Editor" />
          <AceEditorCode
            languageName={languageName}
            setEditorCode={(code: string) => setSource_code(code)}
            editorResize={editorResize}
            onResizeComplete={() => setEditorResize(false)}
          />
        </div>
        <div key="b">
          <EditorHeadder headerName="Console Input" />
          <AceEditorCode
            languageName={languageName}
            setEditorCode={(code: string) => setSource_code(code)}
            editorResize={editorResize}
            onResizeComplete={() => setEditorResize(false)}
          />
        </div>
        <div key="c">
          <EditorHeadder headerName="Console Output" />
          <AceEditorCode
            languageName={languageName}
            setEditorCode={(code: string) => setSource_code(code)}
            editorResize={editorResize}
            onResizeComplete={() => setEditorResize(false)}
          />
        </div>
      </ReactGridLayout>
      {/* 
      <LoadingOverlay
        active={loading}
        spinner
        text="Running code"
        fadeSpeed={250}
        
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
      */}
    </>
  );
};

export default TextEditorGrid;
