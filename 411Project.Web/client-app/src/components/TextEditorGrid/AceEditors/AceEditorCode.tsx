import AceEditor from "react-ace";
import "ace-builds/src-noconflict/ext-language_tools";
import "ace-builds/src-noconflict/ext-beautify";

// Below lies all of the language modes and
// their snippets
import "ace-builds/src-noconflict/mode-c_cpp";
import "ace-builds/src-noconflict/snippets/c_cpp";

import "ace-builds/src-noconflict/mode-csharp";
import "ace-builds/src-noconflict/snippets/csharp";

import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/snippets/java";

import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/snippets/javascript";

import "ace-builds/src-noconflict/mode-kotlin";
import "ace-builds/src-noconflict/snippets/kotlin";

import "ace-builds/src-noconflict/mode-php";
import "ace-builds/src-noconflict/snippets/php";

import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/snippets/python";

import "ace-builds/src-noconflict/mode-ruby";
import "ace-builds/src-noconflict/snippets/ruby";

import "ace-builds/src-noconflict/mode-rust";
import "ace-builds/src-noconflict/snippets/rust";

import "ace-builds/src-noconflict/mode-swift";
import "ace-builds/src-noconflict/snippets/swift";

import "ace-builds/src-noconflict/mode-typescript";
import "ace-builds/src-noconflict/snippets/typescript";

// Themes
import "ace-builds/src-noconflict/theme-solarized_dark";

type sourceCodeEditor = {
  languageName: string;
  // hook setter from TextEditorGrid.tsx
  setEditorCode: (code: string) => void;
};

const AceEditorCode = (props: sourceCodeEditor) => {
  return (
    <AceEditor
      mode={props.languageName}
      theme="solarized_dark"
      name="codeWindow"
      width="100%"
      height="100%"
      fontSize={16}
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
