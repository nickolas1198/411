using System.ComponentModel.DataAnnotations;

namespace _411Project.Web.Features.Authentication
{
    public class CreateUserDto
    {
        [Required]
        public string Email { get; set; }

        [Required]
        public string Password { get; set; }
    }
}
