using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using back_bms.Models;
using back_bms.Reposotories;
using back_bms.DTOs;

namespace back_bms.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CustomerDetailsController : ControllerBase
    {
        private readonly BMSContext _context;
        private readonly ICustomerRepo _customerRepo;

        public CustomerDetailsController(BMSContext context, ICustomerRepo customerRepo)
        {
            _context = context;
            _customerRepo = customerRepo;
        }

        // GET: api/CustomerDetails/5
        [HttpGet("{id}")]
        public async Task<ActionResult<CustomerDTO>> GetCustomerDetail(string id)
        {
            var customerDetail = _customerRepo.GetCustomerDetail(id);

            if (customerDetail == null)
            {
                return NotFound();
            }

            return customerDetail;
        }

        // PUT: api/CustomerDetails/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutCustomerDetail(string id, CustomerDTO customerDetail)
        {
            if (id != customerDetail.CustomerId)
            {
                return BadRequest();
            }

            bool detailsUpdated =  _customerRepo.UpdateCustomerDetail(id, customerDetail);

            if (!detailsUpdated)
            {
                return NotFound();
            }
            return NoContent();
        }

    }
}
