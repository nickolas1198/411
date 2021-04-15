import AceEditorResizeable from "./AceEditorResizeable";

export type aceEditorConsoleOutput = {
  languageName: string;
  stdout: string;
  stderr: string;
  compile_output: string;
  editorResize: boolean;
  onResizeComplete: () => void;
  fontSize: number;
  theme: string;
};

const AceEditorConsoleOutput = (props: aceEditorConsoleOutput) => (
  <AceEditorResizeable
    editorResize={props.editorResize}
    onResizeComplete={props.onResizeComplete}
    mode={props.languageName}
    theme={props.theme}
    name="consoleOutput"
    width="auto"
    height="100%"
    fontSize={props.fontSize}
    showPrintMargin={false}
    highlightActiveLine={false}
    wrapEnabled={true}
    readOnly={true}
    value={props.stdout ?? props.stderr ?? props.compile_output}
  />
);

export default AceEditorConsoleOutput;
