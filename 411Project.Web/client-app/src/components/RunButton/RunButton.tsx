import { Button } from "semantic-ui-react";
import Judge0ApiCall from "../../ApiCalls/Judge0ApiCall";
import { Judge0Dto } from "../../ApiCalls/Judge0ApiCall";

type RunButton = Judge0Dto & {
  setStdout: (stdout: string) => void;
  setStderr: (stderr: string) => void;
};

const RunButton = (props: RunButton) => {
  const handleSubmit = async (dto: Judge0Dto) => {
    let res = await Judge0ApiCall(dto);
    props.setStdout(res.data.stdout);
    props.setStderr(res.data.stderr);
  };

  return <Button onClick={() => handleSubmit(props)}>R u n</Button>;
};

export default RunButton;
