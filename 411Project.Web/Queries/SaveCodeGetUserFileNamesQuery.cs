using System.Collections.Generic;
using System.Linq;
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
    public class SaveCodeGetUserFileNamesQuery : IRequest<IEnumerable<SaveCodeGetUserFileNamesDto>>
    {
    }

    public class SaveCodeGetUserFileNamesQueryHandler : IRequestHandler<SaveCodeGetUserFileNamesQuery, IEnumerable<SaveCodeGetUserFileNamesDto>>
    {
        private readonly UserManager<User> _userManager;
        private readonly DataContext _dataContext;
        private readonly IHttpContextAccessor _httpContextAccessor;

        public SaveCodeGetUserFileNamesQueryHandler(UserManager<User> userManager, DataContext dataContext, IHttpContextAccessor httpContextAccessor)
        {
            _userManager = userManager;
            _dataContext = dataContext;
            _httpContextAccessor = httpContextAccessor;
        }

        public async Task<IEnumerable<SaveCodeGetUserFileNamesDto>> Handle(SaveCodeGetUserFileNamesQuery request, CancellationToken cancellationToken)
        {
            var claimUser = _httpContextAccessor.HttpContext?.User;
            var user = await _userManager.GetUserAsync(claimUser);

            return await _dataContext
                .Set<SaveCode>()
                .Where(x => x.UserId == user.Id)
                .Select(x => new SaveCodeGetUserFileNamesDto()
                {
                    Id = x.Id,
                    FileName = x.FileName
                })
                .ToListAsync();
        }
    }
}
