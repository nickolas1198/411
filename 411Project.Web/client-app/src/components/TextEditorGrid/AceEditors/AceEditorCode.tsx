import React from "react";
import AceEditorResizeable from "./AceEditorResizeable";

export type aceEditorSourceCodeEditor = {
  languageName: string;
  editorResize: boolean;
  fontSize: number;
  theme: string;
  onResizeComplete: () => void;
  // hook setter from TextEditorGrid.tsx
  setEditorCode: (code: string) => void;
};

const AceEditorCode = (props: aceEditorSourceCodeEditor) => {
  return (
    <AceEditorResizeable
      editorResize={props.editorResize}
      onResizeComplete={props.onResizeComplete}
      mode={props.languageName}
      theme={props.theme}
      name="codeWindow"
      width="100%"
      height="100%"
      fontSize={props.fontSize}
      showPrintMargin={false}
      wrapEnabled={true}
      highlightActiveLine={true}
      onChange={(event) => props.setEditorCode(event)}
      setOptions={{
        enableBasicAutocompletion: true,
        enableLiveAutocompletion: true,
        enableSnippets: true,
      }}
    />
  );
};

export default AceEditorCode;
