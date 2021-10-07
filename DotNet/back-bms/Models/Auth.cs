using System;
using System.Collections.Generic;

#nullable disable

namespace back_bms.Models
{
    public partial class Auth
    {
        public string Username { get; set; }
        public string Password { get; set; }
        public string CustomerId { get; set; }

        public virtual CustomerDetail Customer { get; set; }
    }
}
