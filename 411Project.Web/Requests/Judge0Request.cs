using _411Project.Web.Features.Judge;
using MediatR;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using _411Project.Web.Requests.Judge0Request;
using Newtonsoft.Json.Linq;

namespace _411Project.Web.Features.Requests
{
    public class Judge0Request : JudgeDto, IRequest<JObject>
    {
    }

    public class Judge0RequestHandler : IRequestHandler<Judge0Request, JObject>
    {
        public async Task<JObject> Handle(Judge0Request request, CancellationToken cancellationToken)
        {
            var client = new HttpClient();
            var sendRequest = PrepJudge0Request.PrepHttpRequestMessage(request);

            // send request and await response
            using (var response = await client.SendAsync(sendRequest))
            {
                response.EnsureSuccessStatusCode();
                // Use cancellation token on ReadAsStringAsync() to handle errors maybe?
                var returnBody = await response.Content.ReadAsStringAsync(); 
                var jsonResponse = PrepJudge0Response.PrepResponse(returnBody);
                return jsonResponse;
            }
        }
    }
}
