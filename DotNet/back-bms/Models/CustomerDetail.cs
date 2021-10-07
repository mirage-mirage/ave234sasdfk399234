using System;
using System.Collections.Generic;

#nullable disable

namespace back_bms.Models
{
    public partial class CustomerDetail
    {
        public CustomerDetail()
        {
            Auths = new HashSet<Auth>();
            Loans = new HashSet<Loan>();
        }

        public string CustomerId { get; set; }
        public string GuardianType { get; set; }
        public string GuardianName { get; set; }
        public string Address { get; set; }
        public string Citizenship { get; set; }
        public string State { get; set; }
        public string Country { get; set; }
        public string Email { get; set; }
        public string Gender { get; set; }
        public string MaritalStatus { get; set; }
        public string ContactNo { get; set; }
        public DateTime? Dob { get; set; }
        public DateTime? RegistrationDate { get; set; }
        public string AccountType { get; set; }
        public string BranchName { get; set; }
        public string CitizenStatus { get; set; }
        public string InitialDepositAmount { get; set; }
        public string IdProofType { get; set; }
        public string IdDocumentNo { get; set; }
        public string RefAccHolderName { get; set; }
        public string RefAccHolderAccNo { get; set; }
        public string RefAccHolderAddress { get; set; }
        public bool? IsProfileComplete { get; set; }
        public string Name { get; set; }
        public string AccountNumber { get; set; }

        public virtual ICollection<Auth> Auths { get; set; }
        public virtual ICollection<Loan> Loans { get; set; }
    }
}
