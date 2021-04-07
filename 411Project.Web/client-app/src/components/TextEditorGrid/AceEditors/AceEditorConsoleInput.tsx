import AceEditorResizeable from "./AceEditorResizeable";

export type aceEditorConsoleInput = {
  setConsoleInput: (input: string) => void;
  editorResize: boolean;
  onResizeComplete: () => void;
  fontSize: number;
};

const AceEditorConsoleInput = (props: aceEditorConsoleInput) => (
  <AceEditorResizeable
    editorResize={props.editorResize}
    onResizeComplete={props.onResizeComplete}
    mode="text"
    theme="solarized_dark"
    name="consoleInput"
    width="100%"
    height="100%"
    fontSize={props.fontSize}
    showPrintMargin={false}
    wrapEnabled={true}
    highlightActiveLine={false}
    onChange={(event) => props.setConsoleInput(event)}
  />
);

export default AceEditorConsoleInput;
