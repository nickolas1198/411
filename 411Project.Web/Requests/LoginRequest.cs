using _411Project.Web.Features.Authentication;
using MediatR;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace _411Project.Web.Features.Requests
{
    public class LoginRequest : LoginDto, IRequest<UserDto>
    {
    }

    public class LoginRequestHandler : IRequestHandler<LoginRequest, UserDto>
    {
        private readonly UserManager<User> _userManager;
        private readonly SignInManager<User> _signInManager;

        public virtual BadRequestResult BadRequest { get; }
        public virtual OkResult Ok { get; }

        public LoginRequestHandler(UserManager<User> userManager, SignInManager<User> signInManager)
        {
            _userManager = userManager;
            _signInManager = signInManager;
        }

        public async Task<UserDto> Handle(LoginRequest request, CancellationToken cancellationToken)
        {
            // checks if user exist
            var user = await _userManager.FindByNameAsync(request.Email);
            if (user == null)
            {
                return null;
            }

            // checks password
            var result = await _signInManager.CheckPasswordSignInAsync(user, request.Password, true);
            if (!result.Succeeded)
            {
                return null;
            }

            // log user in
            await _signInManager.SignInAsync(user, false, "Password");
            return new UserDto
            {
                Email = request.Email
            };
        }
    }
}
