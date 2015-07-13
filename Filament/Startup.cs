using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(Filament.Startup))]
namespace Filament
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
