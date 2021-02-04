using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace _411Project.Web.Features.Judge
{
    public class JudgeDto
    {
        public int language_id { get; set; }
        public string source_code { get; set; }
        public string stdin { get; set; }
    }
}
