import AceEditor from "react-ace";
import brace from "brace";

import "brace/mode/csharp";

import "brace/theme/solarized_dark";

const AceEditorCode = () => (
  <AceEditor
    mode="csharp"
    theme="solarized_dark"
    name="codeWindow"
    width="auto"
    fontSize={16}
    showPrintMargin={false}
    highlightActiveLine={true}
    setOptions={{
      enableBasicAutocompletion: true,
      enableLiveAutocompletion: true,
      enableSnippets: true,
    }}
  />
);

export default AceEditorCode;
