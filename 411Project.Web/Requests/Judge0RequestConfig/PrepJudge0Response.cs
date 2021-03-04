using System;
using System.Text;
using _411Project.Web.Features.Judge;
using _411Project.Web.Requests.Judge0RequestConfig;
using Newtonsoft.Json.Linq;

namespace _411Project.Web.Requests.Judge0Request
{
    public static class PrepJudge0Response
    {
        public static string ConvertFromBase64(string s)
        {
            var data = Convert.FromBase64String(s);
            return Encoding.UTF8.GetString(data);
        }

        /// <summary>
        /// Preps the response from the Judge0 API before it is sent to user
        /// </summary>
        /// <remarks>
        /// Decode console output/error from Base64 to string, and then map the
        /// Judge0 API outputs to a JudgeResponseDto
        /// </remarks>
        public static JudgeResponseDto PrepResponse(string judge0ApiResponseString)
        {
            var jsonResponse = JObject.Parse(judge0ApiResponseString);
            var responseDto = new JudgeResponseDto();

            // First check if JSON property is null. Then convert and map to the dto
            if ((string)jsonResponse[Judge0Constants.Stdout] != null)
            {
                responseDto.Stdout =
                    ConvertFromBase64((string)jsonResponse[Judge0Constants.Stdout]);
            }

            if ((string) jsonResponse[Judge0Constants.Stderr] != null)
            {
                responseDto.Stderr =
                    ConvertFromBase64((string)jsonResponse[Judge0Constants.Stderr]);
            }

            if ((string)jsonResponse[Judge0Constants.Compile_output] != null)
            {
                responseDto.Compile_output =
                    ConvertFromBase64((string)jsonResponse[Judge0Constants.Compile_output]);
            }

            return responseDto;
        }
    }
}
 