using System;
using System.Text;
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
        /// Preps the response before it is sent to user
        /// </summary>
        /// <remarks>
        /// Decode console output from Base64 to string
        /// </remarks>
        public static JObject PrepResponse(string s)
        {
            var jsonResponse = JObject.Parse(s);

            // First check if JSON property is null. If not, then convert.
            if ((string)jsonResponse[Judge0Constants.Stdout] != null)
            {
                jsonResponse[Judge0Constants.Stdout] =
                    ConvertFromBase64((string)jsonResponse[Judge0Constants.Stdout]);
            }

            if ((string) jsonResponse[Judge0Constants.Stderr] != null)
            {
                jsonResponse[Judge0Constants.Stderr] =
                    ConvertFromBase64((string)jsonResponse[Judge0Constants.Stderr]);
            }
            
            return jsonResponse;
        }
    }
}
 