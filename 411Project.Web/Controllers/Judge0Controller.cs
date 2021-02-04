using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Threading.Tasks;
using _411Project.Web.Features.Judge;


namespace _411Project.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class Judge0Controller : ControllerBase
    {
        [HttpPost]
        public async Task<ActionResult<String>> Post(JudgeDto dto) // change <String> to a responseDto
        {
            var returnBody = "";

            var plainCodeBytes = System.Text.Encoding.UTF8.GetBytes(dto.source_code);
            var codeBase64EncodedString = System.Convert.ToBase64String(plainCodeBytes);

            var plainStdinBytes = System.Text.Encoding.UTF8.GetBytes(dto.stdin);
            var stdinBase64EncodedString = System.Convert.ToBase64String(plainStdinBytes);
            
            var client = new HttpClient();
            var request = new HttpRequestMessage
            {
                Method = HttpMethod.Post,
                RequestUri =
                    new Uri("https://judge0-ce.p.rapidapi.com/submissions?base64_encoded=true&wait=true&fields=stdout"),
                Headers =
                {
                    {"x-rapidapi-key", ""},
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
            using (var response = await client.SendAsync(request))
            {
                response.EnsureSuccessStatusCode();
                returnBody = await response.Content.ReadAsStringAsync();
            }

            return Ok(returnBody);
        }
    }
}
