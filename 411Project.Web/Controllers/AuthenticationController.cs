using _411Project.Web.Data;
using _411Project.Web.Features.Authentication;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace _411Project.Web.Controllers
{
    [Route("api/authentication")]
    [ApiController]
    public class AuthenticationController : ControllerBase
    {
        private readonly UserManager<User> userManager;
        private readonly SignInManager<User> signInManager;
        private readonly DataContext dataContext;

        public AuthenticationController(UserManager<User> userManager, SignInManager<User> signInManager, DataContext dataContext)
        {
            this.userManager = userManager;
            this.signInManager = signInManager;
            this.dataContext = dataContext;
        }

        // this endpoint is used to automagically log the user in
        // upon reopening the webpage if they haven't logged out.
        [HttpGet("me")]
        [Authorize]
        public async Task<UserDto> Me()
        {
            var username = User.Identity.Name;

            return await dataContext.Set<User>()
                .Where(x => x.UserName == username)
                .Select(x => new UserDto
                {
                    Email = x.Email
                })
                .FirstOrDefaultAsync();
        }

        [HttpPost("login")]
        public async Task<ActionResult<UserDto>> Login(LoginDto dto)
        {
            // checks if user exist
            var user = await userManager.FindByNameAsync(dto.Email); 
            if (user == null)
            {
                return BadRequest();
            }

            // checks password
            var result = await signInManager.CheckPasswordSignInAsync(user, dto.Password, true); 
            if (!result.Succeeded)
            {
                return BadRequest();
            }

            // log user in
            await signInManager.SignInAsync(user, false, "Password");
            return Ok(new UserDto
            {
                Email = user.Email
            });
        }

        [HttpPost("logout")]
        public async Task<ActionResult<UserDto>> Logout()
        {
            await signInManager.SignOutAsync();
            return Ok();
        }
    }
}
