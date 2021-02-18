import AceEditor from "react-ace";
import brace from "brace";

import "brace/mode/csharp";

import "brace/theme/solarized_dark";

const AceEditorConsoleInput = () => (
  <AceEditor
    mode="csharp"
    theme="solarized_dark"
    name="consoleInput"
    width="auto"
    fontSize={16}
    showPrintMargin={false}
  />
);

export default AceEditorConsoleInput;
