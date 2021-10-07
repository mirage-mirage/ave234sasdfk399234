using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using back_bms.Models;
using back_bms.DTOs;
using back_bms.Reposotories;

namespace back_bms.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoansController : ControllerBase
    {
        private readonly BMSContext _context;
        private readonly ILoanRepo loanRepo;

        public LoansController(BMSContext context, ILoanRepo repo)
        {
            _context = context;
            loanRepo = repo;
        }

        // GET: api/Loans/5
        [HttpGet("{id}")]
        public async Task<ActionResult<LoanDTO>> GetLoan(string id)
        {
            var loan = await loanRepo.GetLoan(int.Parse(id));

            if (loan == null)
            {
                return NotFound();
            }

            return loan;
        }

        // POST: api/Loans
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<LoanDTO>> PostLoan(LoanDTO loanDTO)
        {
                   string loan = await loanRepo.NewLoan(loanDTO);

            if (loan == null)
                return StatusCode(StatusCodes.Status500InternalServerError);

            return Ok(new { loanId=loan});
        }      
    }
}
