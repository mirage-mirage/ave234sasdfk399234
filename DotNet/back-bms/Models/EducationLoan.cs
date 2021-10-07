using System;
using System.Collections.Generic;

#nullable disable

namespace back_bms.Models
{
    public partial class EducationLoan
    {
        public EducationLoan()
        {
            Loans = new HashSet<Loan>();
        }

        public int EducationLoanId { get; set; }
        public string CourseFee { get; set; }
        public string Course { get; set; }
        public string FatherName { get; set; }
        public string FatherOccupation { get; set; }
        public string FatherTotalExp { get; set; }
        public string FatherExpCurrentCompany { get; set; }
        public string RationCardNo { get; set; }
        public string AnnualIncome { get; set; }

        public virtual ICollection<Loan> Loans { get; set; }
    }
}
