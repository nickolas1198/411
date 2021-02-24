import AceEditor from "react-ace";
import brace from "brace";

import "brace/mode/csharp";
import "brace/theme/solarized_dark";

type AceEditorConsoleOutputProps = {
  stdout: string;
  stderr: string;
};

const AceEditorConsoleOutput = (props: AceEditorConsoleOutputProps) => (
  <AceEditor
    mode="csharp"
    theme="solarized_dark"
    name="consoleOutput"
    width="auto"
    height="50%"
    fontSize={16}
    showPrintMargin={false}
    readOnly={true}
    value={props.stdout ?? props.stderr}
  />
);

export default AceEditorConsoleOutput;
