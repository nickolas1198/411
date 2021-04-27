using System.Threading;
using System.Threading.Tasks;
using _411Project.Web.Data;
using _411Project.Web.Features.Authentication;
using _411Project.Web.Features.SaveCodeFiles;
using FluentValidation;
using MediatR;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;

namespace _411Project.Web.Requests.SaveCodeRequests
{
    public class SaveCodePostRequest : CreateSaveCodeDto, IRequest<SaveCodeDto>
    {
    }

    public class SaveCodePostRequestHandler : IRequestHandler<SaveCodePostRequest, SaveCodeDto>
    {
        private readonly UserManager<User> _userManager;
        private readonly DataContext _dataContext;
        private readonly IHttpContextAccessor _httpContextAccessor;

        public SaveCodePostRequestHandler(UserManager<User> userManager, DataContext dataContext, IHttpContextAccessor httpContextAccessor)
        {
            _userManager = userManager;
            _dataContext = dataContext;
            _httpContextAccessor = httpContextAccessor;
        }

        public async Task<SaveCodeDto> Handle(SaveCodePostRequest request, CancellationToken cancellationToken)
        {
            var claimUser = _httpContextAccessor.HttpContext?.User;
            var user = await _userManager.GetUserAsync(claimUser);

            var result = _dataContext.Set<SaveCode>().Add(new SaveCode
            {
                FileName = request.FileName,
                Code = request.Code,
                Language = request.Language,
                UserId = user.Id
            });

            // TODO: overload with cancellationToken? how do?
            await _dataContext.SaveChangesAsync();

            return new SaveCodeDto
            {
                Id = result.Entity.UserId,
                FileName = result.Entity.FileName,
                Code = result.Entity.Code,
                Language = result.Entity.Language
            };
        }
    }

    public class SaveCodePostRequestValidator : AbstractValidator<SaveCodePostRequest>
    {
        // no special characters
        private string regex = "^[A-Za-z0-9]+$";

        public SaveCodePostRequestValidator()
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
