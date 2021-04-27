﻿using System.Collections.Generic;
using System.Threading.Tasks;
using _411Project.Web.Features.SaveCodeFiles;
using _411Project.Web.Migrations;
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

        // TODO: seperate into two endpoints. One to get list of file Id's, another to retreive single file.
        [HttpGet("get")]
        public async Task<ActionResult<IEnumerable<SaveCodeDto>>> GetUserFiles()
        {
            var result = await Mediator.Send(new SaveCodeGetUserFilesQuery());

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
