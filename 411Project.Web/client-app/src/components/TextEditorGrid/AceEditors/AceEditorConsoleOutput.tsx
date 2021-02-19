import AceEditor from "react-ace";
import brace from "brace";

import "brace/mode/csharp";

import "brace/theme/solarized_dark";

const AceEditorConsoleOutput = () => (
  <AceEditor
    mode="csharp"
    theme="solarized_dark"
    name="consoleOutput"
    width="auto"
    height="50%"
    fontSize={16}
    showPrintMargin={false}
    readOnly={true}
  />
);

export default AceEditorConsoleOutput;
