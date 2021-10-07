using back_bms.DTOs;
using back_bms.Models;
using back_bms.Reposotories;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace back_bms.Controllers
{
    [Route("api/[controller]/[action]")]
    [EnableCors()]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly IAuthRepo authRepo;
        public AuthController(IAuthRepo authRepo)
        {
            this.authRepo = authRepo;
        }

        [HttpGet]
        [Route("{username}")]
        public IActionResult ValidUsername(string username)
        {
            var result = authRepo.UsernameAvailable(username);

            return Ok(result);
        }
        [HttpPost]
        public IActionResult AddUser([FromBody] Customer customer)
        {
            var result = authRepo.CreateUser(customer);

            return Ok(JsonConvert.SerializeObject(result));
        }
        [HttpPost]
        public IActionResult Login([FromBody] LoginDetails loginDetails)
        {
            var result = authRepo.Login(loginDetails);

            return Ok(JsonConvert.SerializeObject(result));
        }

    }
}
