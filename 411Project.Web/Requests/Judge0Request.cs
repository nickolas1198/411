using _411Project.Web.Features.Judge;
using MediatR;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using _411Project.Web.Requests.Judge0Request;

namespace _411Project.Web.Features.Requests
{
    public class Judge0Request : JudgeDto, IRequest<JudgeResponseDto>
    {
    }

    public class Judge0RequestHandler : IRequestHandler<Judge0Request, JudgeResponseDto>
    {
        public async Task<JudgeResponseDto> Handle(Judge0Request request, CancellationToken cancellationToken)
        {
            var client = new HttpClient();
            var sendRequest = PrepJudge0Request.PrepHttpRequestMessage(request);

            // send request and await 
            using (var response = await client.SendAsync(sendRequest))
            {
                // response.EnsureSuccessStatusCode();
                // Use cancellation token on ReadAsStringAsync() to handle errors maybe?
                var returnBody = await response.Content.ReadAsStringAsync(); 
                var responseDto = PrepJudge0Response.PrepResponse(returnBody);
                return responseDto;
            }
        }
    }
}
