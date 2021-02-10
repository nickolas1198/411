using Microsoft.AspNetCore.Http;
using System.Configuration;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Threading.Tasks;
using _411Project.Web.Features.Requests;
using MediatR;

namespace _411Project.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class Judge0Controller : ControllerBase
    {
        public IMediator Mediator { get; set; }

        public Judge0Controller(IMediator mediator)
        {
            Mediator = mediator;
        }

        [HttpPost]
        public async Task<ActionResult<String>> Post(Judge0Request judge0Request) // possibly change <String> to a responseDto
        {
            var result = await Mediator.Send(judge0Request);

            return Ok(result);
        }
    }
}
