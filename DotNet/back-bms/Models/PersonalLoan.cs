using System;
using System.Collections.Generic;

#nullable disable

namespace back_bms.Models
{
    public partial class PersonalLoan
    {
        public PersonalLoan()
        {
            Loans = new HashSet<Loan>();
        }

        public int PersonalLoanId { get; set; }
        public string AnnualIncome { get; set; }
        public string CompanyName { get; set; }
        public string Designation { get; set; }
        public string TotalExp { get; set; }
        public string ExpCurrentCompany { get; set; }

        public virtual ICollection<Loan> Loans { get; set; }
    }
}
