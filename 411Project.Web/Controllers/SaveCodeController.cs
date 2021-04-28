using System.Collections.Generic;
using System.Threading.Tasks;
using _411Project.Web.Features.SaveCodeFiles;
using _411Project.Web.Queries;
using _411Project.Web.Requests.SaveCodeRequests;
using Microsoft.AspNetCore.Mvc;
using MediatR;

namespace _411Project.Web.Controllers
{
    [Route("api/saveCodeController")]
    [ApiController]
    public class SaveCodeController : Controller
    {
        public IMediator Mediator { get; set; }

        public SaveCodeController(IMediator mediator)
        {
            Mediator = mediator;
        }

        [HttpGet("getUserFileNames")]
        public async Task<ActionResult<IEnumerable<SaveCodeDto>>> GetUserFileNames()
        {
            var result = await Mediator.Send(new SaveCodeGetUserFileNamesQuery());

            return Ok(result);
        }

        [HttpGet("getUserFile")]
        public async Task<ActionResult<SaveCodeGetUserFileReturnDto>> GetUserFile([FromQuery]SaveCodeGetUserFileQuery saveCodeGetUserFileQuery)
        {
            var result = await Mediator.Send(saveCodeGetUserFileQuery);

            return Ok(result);
        }

        [HttpPost("post")]
        public async Task<ActionResult<SaveCodeDto>> Post(SaveCodePostRequest saveCodeRequest)
        {
            var result = await Mediator.Send(saveCodeRequest);

            return Ok(result);
        }

        [HttpPut("put")]
        public async Task<ActionResult<SaveCodeDto>> Put(SaveCodePutRequest saveCodeRequest)
        {
            var result = await Mediator.Send(saveCodeRequest);

            return Ok(result);
        }

        [HttpDelete("delete")]
        public async Task<ActionResult> Delete(SaveCodeDeleteRequest saveCodeRequest)
        {
            var result = await Mediator.Send(saveCodeRequest);

            return Ok(result);
        }
    }
}
