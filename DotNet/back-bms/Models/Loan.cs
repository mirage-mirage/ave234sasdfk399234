using System;
using System.Collections.Generic;

#nullable disable

namespace back_bms.Models
{
    public partial class Loan
    {
        public string CustomerId { get; set; }
        public int LoanId { get; set; }
        public string LoanAmount { get; set; }
        public DateTime LoanApplyDate { get; set; }
        public DateTime LoanIssueDate { get; set; }
        public decimal RateOfInterest { get; set; }
        public int DurationOfTheLoan { get; set; }
        public int? EducationLoanId { get; set; }
        public int? PersonalLoanId { get; set; }

        public virtual CustomerDetail Customer { get; set; }
        public virtual EducationLoan EducationLoan { get; set; }
        public virtual PersonalLoan PersonalLoan { get; set; }
    }
}
