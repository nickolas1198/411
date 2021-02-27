import AceEditor from "react-ace";
import brace from "brace";

import "brace/mode/csharp";
import "brace/snippets/html";
import "brace/ext/language_tools";
import "brace/theme/solarized_dark";

type sourceCodeEditor = {
  language?: string;
  setEditorCode: (code: string) => void;
};

// setting the height in this way is kinda funky, need
// to fix
const AceEditorCode = (props: sourceCodeEditor) => {
  return (
    <AceEditor
      mode="csharp"
      theme="solarized_dark"
      name="codeWindow"
      width="100%"
      height="100%"
      fontSize={16}
      showPrintMargin={false}
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
