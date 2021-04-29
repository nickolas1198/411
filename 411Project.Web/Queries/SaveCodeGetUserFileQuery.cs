using System.Threading;
using System.Threading.Tasks;
using _411Project.Web.Data;
using _411Project.Web.Features.Authentication;
using _411Project.Web.Features.SaveCodeFiles;
using MediatR;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

namespace _411Project.Web.Queries
{
    public class SaveCodeGetUserFileQuery : SaveCodeGetUserFileDto, IRequest<SaveCodeGetUserFileReturnDto>
    {
    }

    public class SaveCodeGetUserFileQueryHandler : IRequestHandler<SaveCodeGetUserFileQuery, SaveCodeGetUserFileReturnDto>
    {
        private readonly UserManager<User> _userManager;
        private readonly DataContext _dataContext;
        private readonly IHttpContextAccessor _httpContextAccessor;

        public SaveCodeGetUserFileQueryHandler(UserManager<User> userManager, DataContext dataContext, IHttpContextAccessor httpContextAccessor)
        {
            _userManager = userManager;
            _dataContext = dataContext;
            _httpContextAccessor = httpContextAccessor;
        }

        public async Task<SaveCodeGetUserFileReturnDto> Handle(SaveCodeGetUserFileQuery request, CancellationToken cancellationToken)
        {
            var claimUser = _httpContextAccessor.HttpContext?.User;
            var user = await _userManager.GetUserAsync(claimUser);

            var file = await _dataContext.Set<SaveCode>().FirstOrDefaultAsync(x => x.UserId == user.Id && x.Id == request.Id);

            if (file == null)
            {
                return null;
            }

            return new SaveCodeGetUserFileReturnDto
            {
                Id = file.Id,
                FileName = file.FileName,
                Code = file.Code,
                Language = file.Language
            };
        }
    }
}
