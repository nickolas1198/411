using _411Project.Web.Data;
using _411Project.Web.Features.Authentication;
using _411Project.Web.Features.Requests;
using MediatR;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using System.Threading.Tasks;

namespace _411Project.Web.Controllers
{
    [Route("api/authentication")]
    [ApiController]
    public class AuthenticationController : ControllerBase
    {
        private readonly SignInManager<User> _signInManager;
        private readonly DataContext _dataContext;
        public IMediator Mediator { get; set; }

        public AuthenticationController(IMediator mediator, UserManager<User> userManager, SignInManager<User> signInManager, DataContext dataContext)
        {
            Mediator = mediator;
            _signInManager = signInManager;
            _dataContext = dataContext;
        }

        // this endpoint is used to automagically log the user in
        // upon reopening the webpage if they haven't logged out.
        [HttpGet("me")]
        [Authorize]
        public async Task<UserDto> Me()
        {
            var username = User.Identity.Name;

            return await _dataContext.Set<User>()
                .Where(x => x.UserName == username)
                .Select(x => new UserDto
                {
                    Email = x.Email
                })
                .FirstOrDefaultAsync();
        }

        [HttpPost("login")]
        public async Task<ActionResult<UserDto>> Login(LoginRequest loginRequest)
        {
            var result = await Mediator.Send(loginRequest);
            if (result == null)
            {
                return BadRequest();
            }

            return Ok(result);
        }

        [HttpPost("logout")]
        public async Task<ActionResult<UserDto>> Logout()
        {
            await _signInManager.SignOutAsync();
            return Ok();
        }
    }
}
