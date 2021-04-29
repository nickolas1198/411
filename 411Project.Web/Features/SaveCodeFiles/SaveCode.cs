using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using _411Project.Web.Features.Authentication;

namespace _411Project.Web.Features.SaveCodeFiles
{
    public class SaveCode
    {
        public int Id { get; set; }

        [Required]
        public string FileName { get; set; }

        [Required]
        public string Code { get; set; }

        [Required]
        public string Language { get; set; }

        [ForeignKey(nameof(UserId))]
        public virtual User User { get; set; }
        public int UserId { get; set; }
    }
}
