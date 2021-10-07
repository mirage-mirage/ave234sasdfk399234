using back_bms.DTOs;
using back_bms.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace back_bms.Reposotories
{
    public class LoanRepo : ILoanRepo
    {
        readonly BMSContext _context;
        public LoanRepo(BMSContext context)
        {
            _context = context;
        }
        public async Task<LoanDTO> GetLoan(int loanId)
        {
            var loan = await _context.Loans.FindAsync(loanId);

            if (loan == null)
            {
                return null;
            }

            LoanDTO loanDTO = convert_loan_to_loanDTO(loan);

            return loanDTO;
        }

      
        public async Task<string> NewLoan(LoanDTO loanDTO)
        {
                Loan loan = convert_LoanDTO_to_Loan(loanDTO);
            _context.Loans.Add(loan);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (LoanExists(loan.LoanId))
                {
                    return null;
                }
                else
                {
                    throw;
                }
            }

            return loan.LoanId.ToString();
        }

        private Loan convert_LoanDTO_to_Loan(LoanDTO l)
        {
            Loan loan = new Loan { CustomerId=l.CustomerId,
            LoanAmount=l.LoanAmount,
            LoanApplyDate=l.LoanApplyDate,
            LoanIssueDate=l.LoanIssueDate,
            RateOfInterest=l.RateOfInterest,
            DurationOfTheLoan=l.DurationOfTheLoan,
            EducationLoan=null,
            PersonalLoan=null
            };

            if (l.LoanType == "Education")
            {
                loan.EducationLoan = new EducationLoan
                {
                    Course =l.EducationLoan.Course,
                    CourseFee=l.EducationLoan.CourseFee,
                    FatherName=l.EducationLoan.FatherName,
                    FatherOccupation=l.EducationLoan.FatherOccupation,
                    FatherTotalExp=l.EducationLoan.FatherTotalExp,
                    FatherExpCurrentCompany= l.EducationLoan.FatherExpCurrentCompany,
                    RationCardNo=l.EducationLoan.RationCardNo,
                    AnnualIncome = l.EducationLoan.AnnualIncome,
                };
            }
            else
            {
                loan.PersonalLoan = new PersonalLoan { 
                    AnnualIncome=l.PersonalLoan.AnnualIncome,
                    CompanyName=l.PersonalLoan.CompanyName,
                    Designation=l.PersonalLoan.Designation,
                    TotalExp=l.PersonalLoan.TotalExp,
                    ExpCurrentCompany=l.PersonalLoan.ExpCurrentCompany
                };
            }
            return loan;
        }
        private LoanDTO convert_loan_to_loanDTO(Loan loan)
        {
            LoanDTO loanDTO = new LoanDTO { CustomerId = loan.CustomerId };
            return loanDTO;
        }
        private bool LoanExists(int id)
        {
            return _context.Loans.Any(e => e.LoanId == id);
        }
    }
}
