import React, { Component, useState } from "react";
import { Dimmer, Grid, Loader, Segment } from "semantic-ui-react";
// @ts-ignore
import LoadingOverlay from "react-loading-overlay";
import AceEditorCode from "./AceEditors/AceEditorCode";
import AceEditorConsoleInput from "./AceEditors/AceEditorConsoleInput";
import AceEditorConsoleOutput from "./AceEditors/AceEditorConsoleOutput";

import Navbar from "../Navbar";
import "@annotationhub/react-golden-layout/dist/css/goldenlayout-base.css";
import "@annotationhub/react-golden-layout/dist/css/themes/goldenlayout-dark-theme.css";
import { GoldenLayoutComponent } from "@annotationhub/react-golden-layout";

const TextEditorGrid = () => {
  const [source_code, setSource_code] = useState("");
  const [stdin, setStdin] = useState("");
  const [stdout, setStdout] = useState("");
  const [stderr, setStderr] = useState("");
  const [compile_output, setCompile_output] = useState("");
  const [loading, setLoading] = useState(false);
  const [languageName, setLanguageName] = useState("java");

  return (
    <div style={{ height: "100vh" }}>
      <Dimmer active={loading}>
        <Loader active={loading} />
      </Dimmer>
      <div style={{ height: "60px" }}>
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
      </div>
      <div
        style={{
          width: "100%",
          height: "calc(100% - 60px)",
          position: "fixed",
        }}
      >
        <GoldenLayoutComponent
          // (Required) Golden Layout Config. (See http://golden-layout.com/docs/Config.html)
          config={{
            settings: {
              showPopoutIcon: false,
              showCloseIcon: false,
              showMaximiseIcon: true,
            },
            content: [
              {
                type: "row",
                content: [
                  {
                    type: "stack",
                    content: [
                      {
                        component: () => (
                          <>
                            <AceEditorCode
                              languageName={languageName}
                              setEditorCode={(code: string) =>
                                setSource_code(code)
                              }
                            />
                          </>
                        ),
                        title: "Main Editor",
                        isClosable: false,
                      },
                      // BELOW IS USED TO ADD A TAB
                      // {
                      //   component: () => (
                      //     <>
                      //       <AceEditorCode
                      //         languageName={languageName}
                      //         setEditorCode={(code: string) =>
                      //           setSource_code(code)
                      //         }
                      //       />
                      //     </>
                      //   ),
                      //   title: "Settings",
                      //   isClosable: false,
                      // },
                    ],
                  },
                  {
                    type: "column",
                    content: [
                      {
                        type: "stack",
                        content: [
                          {
                            component: () => (
                              <>
                                <AceEditorConsoleInput
                                  setConsoleInput={(input: string) =>
                                    setStdin(input)
                                  }
                                />
                              </>
                            ),
                            title: "Console Input",
                            isClosable: false,
                          },
                          // BELOW IS USED TO ADD A TAB
                          // {
                          //   component: () => (
                          //     <>
                          //       <AceEditorConsoleOutput
                          //         stdout={stdout}
                          //         stderr={stderr}
                          //         compile_output={compile_output}
                          //       />
                          //     </>
                          //   ),
                          //   title: "Settings",
                          //   isClosable: false,
                          // },
                        ],
                      },
                      {
                        type: "stack",
                        content: [
                          {
                            component: () => (
                              <>
                                <AceEditorConsoleOutput
                                  stdout={stdout}
                                  stderr={stderr}
                                  compile_output={compile_output}
                                />
                              </>
                            ),
                            title: "Console Output",
                            isClosable: false,
                          },
                          // BELOW IS USED TO ADD A TAB
                          // {
                          //   component: () => (
                          //     <>
                          //       <AceEditorConsoleInput
                          //         setConsoleInput={(input: string) =>
                          //           setStdin(input)
                          //         }
                          //       />
                          //     </>
                          //   ),
                          //   title: "Settings",
                          //   isClosable: false,
                          // },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          }}
          // (Optional) Set up auto-resizing. Layout will resize when the window resizes.
          autoresize={true}
          // (Optional) (Milliseconds) Debounce resize to prevent excessive re-renders.
          debounceResize={100}
          // (Optional) Grab the instance of the GoldenLayout Manager. Gives you full access to GL API.
        />
      </div>
    </div>
  );
};

export default TextEditorGrid;
