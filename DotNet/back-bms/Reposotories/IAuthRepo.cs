using back_bms.DTOs;
using back_bms.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace back_bms.Reposotories
{
    public interface IAuthRepo
    {
        bool UsernameAvailable(string username);
        string CreateUser(Customer user);
        string Login(LoginDetails loginDetails);
    }
}
