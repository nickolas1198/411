using System.Threading;
using System.Threading.Tasks;
using _411Project.Web.Data;
using _411Project.Web.Features.Authentication;
using _411Project.Web.Features.SaveCodeFiles;
using MediatR;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

namespace _411Project.Web.Requests.SaveCodeRequests
{
    public class SaveCodeDeleteRequest : DeleteSaveCodeDto, IRequest<bool>
    {
    }

    public class SaveCodeDeleteRequestHandler : IRequestHandler<SaveCodeDeleteRequest, bool>
    {
        private readonly UserManager<User> _userManager;
        private readonly DataContext _dataContext;
        private readonly IHttpContextAccessor _httpContextAccessor;

        public SaveCodeDeleteRequestHandler(UserManager<User> userManager, DataContext dataContext, IHttpContextAccessor httpContextAccessor)
        {
            _userManager = userManager;
            _dataContext = dataContext;
            _httpContextAccessor = httpContextAccessor;
        }

        public async Task<bool> Handle(SaveCodeDeleteRequest request, CancellationToken cancellationToken)
        {
            var claimUser = _httpContextAccessor.HttpContext?.User;
            var user = await _userManager.GetUserAsync(claimUser);

            var deleteMe = await _dataContext.Set<SaveCode>().FirstOrDefaultAsync(x => x.UserId == user.Id && x.Id == request.FileToDeleteId);
            if (deleteMe != null)
            {
                _dataContext.Set<SaveCode>().Remove(deleteMe);
                await _dataContext.SaveChangesAsync();

                return true;
            }

            return false;
        }
    }
}
