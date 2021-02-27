using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using _411Project.Web.Features.Judge;
using _411Project.Web.Features.Requests;
using MediatR;

namespace _411Project.Web.Controllers
{
    [Route("api/judge0Controller")]
    [ApiController]
    public class Judge0Controller : ControllerBase
    {
        public IMediator Mediator { get; set; }

        public Judge0Controller(IMediator mediator)
        {
            Mediator = mediator;
        }

        [HttpPost("sendRequest")]
        public async Task<ActionResult<JudgeResponseDto>> Post(Judge0Request judge0Request)
        {
            var result = await Mediator.Send(judge0Request);

            return Ok(result);
        }
    }
}
