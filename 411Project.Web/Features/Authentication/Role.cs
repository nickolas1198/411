using Microsoft.AspNetCore.Identity;
using System.Collections.Generic;

namespace _411Project.Web.Features.Authentication
{
    public class Role : IdentityRole<int>
    {
        public virtual ICollection<UserRole> Users { get; set; } = new List<UserRole>();
    }
}
