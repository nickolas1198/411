using _411Project.Web.Data;
using _411Project.Web.Features.Authentication;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace _411Project.Web.Controllers
{
    [Route("api/UsersController")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        public IMediator Mediator { get; set; }
        private readonly DataContext _dataContext;

        public UsersController(IMediator mediator, DataContext dataContext)
        {
            Mediator = mediator;
            _dataContext = dataContext;
        }

        // POST api/<UsersController>
        [HttpPost]
        public async Task<ActionResult<UserDto>> Post([FromBody] CreateUserRequest userRequest)
        {
            var result = await Mediator.Send(userRequest);

            // It would be nice for this code to not be in this file. We would probably need some 
            // type of return message wrapper around the ActionResult.
            if (result == null)
            {
                return Conflict("Email is already in use.");
            }
            return Ok(result);
        }

        [HttpDelete]
        public async Task<ActionResult> Delete()
        {
            var user = await _dataContext.Set<User>().FirstOrDefaultAsync(x => x.Email == User.Identity.Name);
            if (user == null)
            {
                return NotFound();
            }

            _dataContext.Set<User>().Remove(user);
            await _dataContext.SaveChangesAsync();

            return Ok();
        }
    }
}
