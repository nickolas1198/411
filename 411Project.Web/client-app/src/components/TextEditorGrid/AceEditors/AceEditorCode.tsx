import AceEditor from "react-ace";
import brace from "brace";

import "brace/mode/csharp";

import "brace/theme/solarized_dark";

// setting the height in this way is kinda funky, but
// works for now
const AceEditorCode = () => (
  <AceEditor
    mode="csharp"
    theme="solarized_dark"
    name="codeWindow"
    width="auto"
    height="92vh"
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
