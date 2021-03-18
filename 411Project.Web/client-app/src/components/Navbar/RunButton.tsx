import Judge0ApiCall from "../../ApiCalls/Judge0ApiCall";
import { Judge0Dto } from "../../ApiCalls/Judge0ApiCall";
import "../../../src/Styles/Navbar.css";

export type RunButtonInfo = Judge0Dto & {
  setStdout: (stdout: string) => void;
  setStderr: (stderr: string) => void;
  setLoading: (loading: boolean) => void;
};

const RunButton = (props: RunButtonInfo) => {
  const handleSubmit = async (dto: Judge0Dto) => {
    props.setLoading(true);
    let res = await Judge0ApiCall(dto);
    props.setLoading(false);

    props.setStdout(res.data.stdout);
    props.setStderr(res.data.stderr);
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
