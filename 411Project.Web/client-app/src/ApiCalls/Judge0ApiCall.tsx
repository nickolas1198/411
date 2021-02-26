import axios from "axios";

export type Judge0Dto = {
  sourceCode: string;
  stdin: string;
};

export type Judge0Response = {
  stdout: string;
  stderr: string;
};

const Judge0ApiCall = (dto: Judge0Dto) => {
  const language_id = 51; // hehe change this. hardcoded to c# for testing
  const source_code = dto.sourceCode;
  const stdin = dto.stdin;
  const url = "https://localhost:5001/api/judge0Controller/sendRequest";

  return axios.post<Judge0Response>(
    url,
    { language_id, source_code, stdin },
    {
      headers: {
        "content-type": "application/json",
      },
    }
  );
};

export default Judge0ApiCall;
