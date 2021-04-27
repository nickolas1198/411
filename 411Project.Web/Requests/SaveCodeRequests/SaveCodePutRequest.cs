using System.Threading;
using System.Threading.Tasks;
using _411Project.Web.Data;
using _411Project.Web.Features.Authentication;
using _411Project.Web.Features.SaveCodeFiles;
using FluentValidation;
using MediatR;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

namespace _411Project.Web.Requests.SaveCodeRequests
{
    public class SaveCodePutRequest : PutSaveCodeDto, IRequest<SaveCodeDto>
    {
    }

    public class SaveCodePutRequestHandler : IRequestHandler<SaveCodePutRequest, SaveCodeDto>
    {
        private readonly UserManager<User> _userManager;
        private readonly DataContext _dataContext;
        private readonly IHttpContextAccessor _httpContextAccessor;

        public SaveCodePutRequestHandler(UserManager<User> userManager, DataContext dataContext, IHttpContextAccessor httpContextAccessor)
        {
            _userManager = userManager;
            _dataContext = dataContext;
            _httpContextAccessor = httpContextAccessor;
        }

        public async Task<SaveCodeDto> Handle(SaveCodePutRequest request, CancellationToken cancellationToken)
        {
            var claimUser = _httpContextAccessor.HttpContext?.User;
            var user = await _userManager.GetUserAsync(claimUser);

            var updateMe = await _dataContext.Set<SaveCode>().FirstOrDefaultAsync(x => x.UserId == user.Id && x.Id == request.Id);
            if (updateMe != null)
            {
                updateMe.FileName = request.FileName;
                updateMe.Code = request.Code;
                updateMe.Language = request.Language;

                await _dataContext.SaveChangesAsync();

                return new SaveCodeDto
                {
                    Id = updateMe.Id,
                    FileName = updateMe.FileName,
                    Code = updateMe.Code,
                    Language = updateMe.Language,
                    UserId = user.Id
                };
            }

            return null;
        }
    }

    public class SaveCodePutRequestValidator : AbstractValidator<SaveCodePutRequest>
    {
        // no special characters
        private string regex = "^[A-Za-z0-9]+$";

        public SaveCodePutRequestValidator()
        {
            RuleFor(x => x.FileName)
                .NotEmpty()
                .WithMessage("File name required.")
                .MaximumLength(30)
                .WithMessage("File name length cannot be longer than 30 characters.")
                .Matches(regex)
                .WithMessage("File name cannot contain special characters.");
        }
    }
}
