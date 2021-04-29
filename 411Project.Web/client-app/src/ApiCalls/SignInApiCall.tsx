import axios from "axios";

export type LoginDto = {
  Email: string;
  Password: string;
};

export type LoginResponseDto = {
  Email: string;
};

const SignInApiCall = (dto: LoginDto) => {
  const Email = dto.Email;
  const Password = dto.Password;
  const url = "https://localhost:5001/api/authentication/login";

  return axios.post<LoginResponseDto>(
    url,
    { Email, Password },
    {
      headers: {
        "content-type": "application/json",
      },
    }
  );
};

export default SignInApiCall;
