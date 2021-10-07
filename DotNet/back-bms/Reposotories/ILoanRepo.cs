using back_bms.DTOs;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace back_bms.Reposotories
{
   public interface ILoanRepo
    {
        /// <summary>
        /// Return loanId on success else return null
        /// </summary>
        /// <param name="loan"></param>
        /// <returns><param loanId></param></returns>
        public Task<string> NewLoan(LoanDTO loan);
        public Task<LoanDTO> GetLoan(int loanId);
    }
}
