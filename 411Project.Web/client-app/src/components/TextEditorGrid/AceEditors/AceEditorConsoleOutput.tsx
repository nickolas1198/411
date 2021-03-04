import AceEditor from "react-ace";
import brace from "brace";

import "brace/mode/csharp";
import "brace/theme/solarized_dark";

type AceEditorConsoleOutputProps = {
  stdout: string;
  stderr: string;
  compile_output: string;
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
    highlightActiveLine={false}
    wrapEnabled={true}
    readOnly={true}
    value={props.stdout ?? props.stderr ?? props.compile_output}
  />
);

export default AceEditorConsoleOutput;
