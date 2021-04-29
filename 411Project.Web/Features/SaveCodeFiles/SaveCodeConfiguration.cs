using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace _411Project.Web.Features.SaveCodeFiles
{
    public class SaveCodeConfiguration : IEntityTypeConfiguration<SaveCode>
    {
        public void Configure(EntityTypeBuilder<SaveCode> builder)
        {
            builder.Property(x => x.FileName)
                .HasMaxLength(30);
        }
    }
}
