using _411Project.Web.Data;
using _411Project.Web.Features.Authentication;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.DependencyInjection;
using System.Linq;
using System.Threading.Tasks;

namespace _411Project.Web.Features.DemoSeeding
{
    public class SeedDemoRolesUsers
    {
        public static async Task SeedDemoRolesAndUsersAsync(IApplicationBuilder app)
        {
            await AddRoles(app);
            await AddUsers(app);
        }

        private static async Task AddRoles(IApplicationBuilder app)
        {
            using var serviceScope = app.ApplicationServices.GetRequiredService<IServiceScopeFactory>().CreateScope();

            var roleManager = serviceScope.ServiceProvider.GetService<RoleManager<Role>>();

            if (roleManager.Roles.Any())
            {
                return;
            }

            await roleManager.CreateAsync(new Role { Name = Roles.User });
        }

        private static async Task AddUsers(IApplicationBuilder app)
        {
            using var serviceScope = app.ApplicationServices.GetRequiredService<IServiceScopeFactory>().CreateScope();

            var userManager = serviceScope.ServiceProvider.GetService<UserManager<User>>();
            var dataContext = serviceScope.ServiceProvider.GetService<DataContext>();

            if (userManager.Users.Any())
            {
                return;
            }

            await CreateUser(dataContext, userManager, "demoEmail@gmail.com", Roles.User);
        }

        private static async Task CreateUser(DataContext dataContext, UserManager<User> userManager, string email, string role)
        {
            const string password = "Password1337!";
            var user = new User
            {
                UserName = email,
                Email = email
            };

            await userManager.CreateAsync(user, password);
            await userManager.AddToRoleAsync(user, role);
        }
    }
}
