using back_bms.DTOs;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace back_bms.Reposotories
{
   public interface ICustomerRepo
    {
        public CustomerDTO GetCustomerDetail(string customerId);
        public bool UpdateCustomerDetail(string id,CustomerDTO customerDetails);
    }
}
