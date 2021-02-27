using _411Project.Web.Features.Authentication;
using FluentValidation;
using System.Text.RegularExpressions;

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
            var containsDigit = new Regex(@"^(?=.*[0-9])");
            var containsUpperCase = new Regex(@"^(?=.*[A-Z])");
            var containsLowerCase = new Regex(@"^(?=.*[a-z])");
            var containsSpecialChar = new Regex(@"^(?=.*[\W])");

            RuleFor(x => x.Email)
                .EmailAddress()
                .WithMessage("Please use a valid email address.")

                .MaximumLength(100)
                .WithMessage("Email length must be under 100 characters.");

            RuleFor(x => x.Password)
                .NotNull()
                .NotEmpty()

                .MaximumLength(50)
                .WithMessage("Password cannot be longer than 50 characters.")

                .MinimumLength(6)
                .WithMessage("6 characters.")
                
                .Matches(containsDigit)
                .WithMessage("one digit.")
                
                .Matches(containsUpperCase)
                .WithMessage("one uppercase letter.")

                .Matches(containsLowerCase)
                .WithMessage("one lowercase letter.")
                
                .Matches(containsSpecialChar)
                .WithMessage("one special character");
        }
    }
}
