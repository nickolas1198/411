﻿using Microsoft.AspNetCore.Identity;
using System.Collections.Generic;

namespace _411Project.Web.Features.Authentication
{
    public class User : IdentityUser<int>
    {
        public virtual ICollection<UserRole> Roles { get; set; } = new List<UserRole>();
    }
}
