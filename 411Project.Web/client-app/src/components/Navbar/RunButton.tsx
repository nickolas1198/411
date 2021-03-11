import Judge0ApiCall from "../../ApiCalls/Judge0ApiCall";
import { Judge0Dto } from "../../ApiCalls/Judge0ApiCall";

import "../../../src/Styles/Navbar.css";

export type RunButtonInfo = Judge0Dto & {
  setStdout: (stdout: string) => void;
  setStderr: (stderr: string) => void;
  setCompileOutput: (compile_output: string) => void;
  setLoading: (loading: boolean) => void;
};

const RunButton = (props: RunButtonInfo) => {
  const handleSubmit = async (dto: Judge0Dto) => {
    // Activate the LoadingOverlay component
    props.setLoading(true);

    // Empty the AceEditorConsoleOutput "value" prop
    props.setStdout("");
    props.setStderr("");
    props.setCompileOutput("");

    let res = await Judge0ApiCall(dto);
    props.setLoading(false);

    // Display the response in AceEditorConsoleOutput
    props.setStdout(res.data.stdout);
    props.setStderr(res.data.stderr);
    props.setCompileOutput(res.data.compile_output);
  };

  return (
    <>
      <a className="item" onClick={() => handleSubmit(props)}>
        <i className="fas fa-play fa-fw" />
        Run
      </a>
    </>
  );
};

export default RunButton;
