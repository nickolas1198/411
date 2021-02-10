using _411Project.Web.Data;
using MediatR;
using Microsoft.AspNetCore.Identity;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace _411Project.Web.Features.Authentication
{
    public class CreateUserRequest : CreateUserDto, IRequest<UserDto>
    {
    }

    public class CreateUserRequestHandler : IRequestHandler<CreateUserRequest, UserDto>
    {
        private readonly UserManager<User> _userManager;
        private readonly DataContext _dataContext;

        public CreateUserRequestHandler(UserManager<User> userManager, DataContext dataContext)
        {
            _userManager = userManager;
            _dataContext = dataContext;
        }

        public async Task<UserDto> Handle(CreateUserRequest request, CancellationToken cancellationToken)
        {
            var newUser = new User
            {
                UserName = request.Email,
                Email = request.Email,
            };

            if (_dataContext.Users.Any(x => x.Email == newUser.Email))
            {
                return null;
            }

            await _userManager.CreateAsync(newUser, request.Password);
            await _userManager.AddToRoleAsync(newUser, Roles.User);

            var dto = new UserDto
            {
                Email = request.Email
            };

            return dto;
        }
    }
}
