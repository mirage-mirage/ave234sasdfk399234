using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace back_bms.DTOs
{
    public class LoanDTO
    {
        public string CustomerId { get; set; }
        public string LoanAmount { get; set; }
        public DateTime LoanApplyDate { get; set; }
        public DateTime LoanIssueDate { get; set; }
        public decimal RateOfInterest { get; set; }
        public int DurationOfTheLoan { get; set; }
        public string LoanType { get; set; }
        public EducationLoanDTO EducationLoan { get; set; }
        public PersonalLoanDTO PersonalLoan { get; set; }
    }
}
