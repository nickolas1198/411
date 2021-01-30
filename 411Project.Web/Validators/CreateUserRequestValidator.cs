using _411Project.Web.Features.Authentication;
using FluentValidation;

namespace _411Project.Web.Validators
{
    public class CreateUserRequestValidator : AbstractValidator<CreateUserRequest>
    {
        public CreateUserRequestValidator()
        {
            // Regex info:
            // - at least one uppercase letter
            // - at least one lowercase letter
            // - at least one digit
            // - at least one non-word character
            var passwordRegex = @"^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[\W])$";

            RuleFor(x => x.Email)
                .EmailAddress()
                .WithMessage("Please use a valid email address.")

                .MaximumLength(100)
                .WithMessage("Email length must be under 100 characters.");

            RuleFor(x => x.Password)
                .NotNull()
                .NotEmpty()

                .MinimumLength(6)
                .WithMessage("Password must contain at least 6 characters.")

                .MaximumLength(50)
                .WithMessage("Password cannot be longer than 50 characters.")

                .Matches(passwordRegex)
                .WithMessage("Password must contain at least:\n" + 
                    "- one lowercase letter\n" +
                    "- one lowercase letter\n" +
                    "- one digit\n" +
                    "- one special character");
        }
    }
}
