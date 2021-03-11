import AceEditor from "react-ace";
import brace from "brace";

import "brace/mode/csharp";

import "brace/theme/solarized_dark";

type consoleInputEditor = {
  setConsoleInput: (input: string) => void;
};

const AceEditorConsoleInput = (props: consoleInputEditor) => (
  <AceEditor
    mode="csharp"
    theme="solarized_dark"
    name="consoleInput"
    width="100%"
    height="100%"
    fontSize={16}
    showPrintMargin={false}
    wrapEnabled={true}
    highlightActiveLine={false}
    onChange={(event) => props.setConsoleInput(event)}
  />
);

export default AceEditorConsoleInput;
