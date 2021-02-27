using System;
using System.Configuration;
using System.Net.Http;
using System.Net.Http.Headers;
using _411Project.Web.Requests.Judge0RequestConfig;

namespace _411Project.Web.Requests.Judge0Request
{
    /// <see>
    /// Folllowing link for config_info and their default values.
    /// Useful for advanced user options
    /// https://ce.judge0.com/#system-and-configuration-configuration-info-get
    /// </see>
    public static class PrepJudge0Request
    {
        public static string ConvertToBase64(string s)
        {
            var plainCodeBytes = System.Text.Encoding.UTF8.GetBytes(s);
            return Convert.ToBase64String(plainCodeBytes);
        }

        /// <summary>
        /// Preps the HttpRequestMessage for Judge0 API post method
        /// </summary>
        /// <remarks>
        /// Will create HttpRequest with chosen options sent through 'request'
        /// </remarks>
        public static HttpRequestMessage PrepHttpRequestMessage(Features.Requests.Judge0Request request)
        {
            // Convert data to Base64 encoded(recommended by Judge0 docs)
            // Useful if there are non-printable characters or characters that 
            // cannot be sent with JSON.
            // Will also need to convert 'expected_output' if ever used
            var sourceCodeBase64EncodedString = PrepJudge0Request.ConvertToBase64(request.source_code);
            var stdinBase64EncodedString = PrepJudge0Request.ConvertToBase64(request.stdin);

            var apiKey = ConfigurationManager.AppSettings.Get(Judge0Constants.XRapidapiKey);

            var sendRequest = new HttpRequestMessage
            {
                Method = HttpMethod.Post,
                RequestUri =
                    new Uri("https://judge0-ce.p.rapidapi.com/submissions?base64_encoded=true&wait=true"),
                Headers =
                {
                    {"x-rapidapi-key", apiKey},
                    {"x-rapidapi-host", "judge0-ce.p.rapidapi.com"},
                },
                Content = new StringContent("{\r" +
                                            "\"language_id\": \"" + request.language_id + "\",\r" +
                                            "\"source_code\": \"" + sourceCodeBase64EncodedString + "\",\r" +
                                            "\"stdin\": \"" + stdinBase64EncodedString + "\"\r}")
                {
                    Headers =
                    {
                        ContentType = new MediaTypeHeaderValue("application/json")
                    }
                }
            };

            return sendRequest;
        }
    }
}
