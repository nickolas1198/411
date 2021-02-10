using _411Project.Web.Features.Judge;
using MediatR;
using System;
using System.Configuration;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Threading;
using System.Threading.Tasks;

namespace _411Project.Web.Features.Requests
{
    public class Judge0Request : JudgeDto, IRequest<String>
    {
    }

    public class Judge0RequestHandler : IRequestHandler<Judge0Request, String>
    {
        public async Task<String> Handle(Judge0Request request, CancellationToken cancellationToken)
        {
            var returnBody = "";
            var apiKey = ConfigurationManager.AppSettings.Get("xRapidapiKey");

            var plainCodeBytes = System.Text.Encoding.UTF8.GetBytes(request.source_code);
            var codeBase64EncodedString = System.Convert.ToBase64String(plainCodeBytes);

            var plainStdinBytes = System.Text.Encoding.UTF8.GetBytes(request.stdin);
            var stdinBase64EncodedString = System.Convert.ToBase64String(plainStdinBytes);

            var client = new HttpClient();
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
                                            "\"language_id\": 70,\r" +
                                            "\"source_code\": \"" + codeBase64EncodedString + "\",\r" +
                                            "\"stdin\": \"" + stdinBase64EncodedString + "\"\r}")
                {
                    Headers =
                    {
                        ContentType = new MediaTypeHeaderValue("application/json")
                    }
                }
            };
            using (var response = await client.SendAsync(sendRequest))
            {
                response.EnsureSuccessStatusCode();
                returnBody = await response.Content.ReadAsStringAsync();
            }

            return returnBody;
        }
    }
}
