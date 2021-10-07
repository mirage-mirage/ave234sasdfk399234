using back_bms.DTOs;
using back_bms.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace back_bms.Reposotories
{
    public class AuthRepo : IAuthRepo
    {
        private readonly BMSContext context;
        public AuthRepo(BMSContext context)
        {
            this.context = context;
        }

        public string GetNewId(string value)
        {
            string number = value.Substring(2);
            int num = int.Parse(number);
            num++;
            number = num < 10 ? "R-00" + num : num < 100 ? "R-0" + num : "R-" + num;
            return number;
        }

        public string CreateUser(Customer user)
        {
            if (UsernameAvailable(user.Username))
            {

                string lastId = GetLastId();
                string newId = lastId == null ? "R-000" : GetNewId(lastId);
                context.Auths.Add(new Auth { CustomerId = newId, Username = user.Username, Password = user.Password });
                string accountNumber = NewAccountNumber(); 
                CustomerDetail customerDetail = new CustomerDetail() { CustomerId = newId, Email = user.Email, Name = user.Name, RegistrationDate = DateTime.Today,AccountNumber=accountNumber };
                context.Add(customerDetail);
                context.SaveChanges();
                return newId;
            }
            return null;
        }

        public string GetLastId()
        {
            return context.CustomerDetails.OrderBy(a => a.CustomerId).Reverse().Select(a => a.CustomerId).FirstOrDefault();
        }

        public bool UsernameAvailable(string username)
        {
            string isDatabase = context.Auths.Where(a => a.Username == username).Select(a => a.Username).FirstOrDefault();
            return isDatabase == null;
        }

        public string Login(LoginDetails loginDetails)
        {
            string customerId = context.Auths
                .Where(a => a.Username == loginDetails.Username)
                .Where(a => a.Password == loginDetails.Password)
                .Select(a => a.CustomerId)
                .FirstOrDefault();
            return customerId;
        }

        public string NewAccountNumber()
        {
            var number = new Random();

            var acc = number.NextDouble();
            Console.WriteLine(acc);
            var stringacc = acc.ToString();
            return stringacc.Substring(2,16);

        }
    }
}
