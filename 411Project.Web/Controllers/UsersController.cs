using _411Project.Web.Features.Authentication;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace _411Project.Web.Controllers
{
    [Route("api/UsersController")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        public IMediator Mediator { get; set; }

        public UsersController(IMediator mediator)
        {
            this.Mediator = mediator;
        }

        // POST api/<UsersController>
        [HttpPost]
        public async Task<UserDto> Post([FromBody] CreateUserRequest userRequest)
        {
            var result = await Mediator.Send(userRequest);
            return result;
        }
    }
}
