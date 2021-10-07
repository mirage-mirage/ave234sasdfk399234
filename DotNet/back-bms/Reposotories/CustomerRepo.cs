using back_bms.DTOs;
using back_bms.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace back_bms.Reposotories
{
    public class CustomerRepo : ICustomerRepo
    {
        private readonly BMSContext _context;
        public CustomerRepo(BMSContext context)
        {
            _context = context;
        }
        public CustomerDTO GetCustomerDetail(string customerId)
        {
            var customerDetail =  _context.CustomerDetails.Find(customerId);

            if (customerDetail == null)
            {
                return null;
            }

            CustomerDTO customer = convertCustomerDetails_to_CustomerDTO(customerDetail);

            return customer;
        }
        public  bool UpdateCustomerDetail(string id, CustomerDTO customerDTO)
        {
           CustomerDetail customer= convert_CustomerDTO_to_CustomerDetail(customerDTO);
            _context.Entry(customer).State = EntityState.Modified;
            try
            {
                 _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CustomerDetailExists(id))
                {
                    return false;
                }
                else
                {
                    throw;
                }
            }

            return true;
        }

        private CustomerDetail convert_CustomerDTO_to_CustomerDetail(CustomerDTO customerDetail)
        {
            CustomerDetail customer = new CustomerDetail()
            { 
                Name = customerDetail.Name,
                CustomerId = customerDetail.CustomerId,
                GuardianType = customerDetail.GuardianType,
                GuardianName = customerDetail.GuardianName,
                Address = customerDetail.Address,
                Citizenship = customerDetail.Citizenship,
                State = customerDetail.State,
                Country = customerDetail.Country,
                Email = customerDetail.Email,
                Gender = customerDetail.Gender,
                MaritalStatus = customerDetail.MaritalStatus,
                ContactNo = customerDetail.ContactNo,
                Dob = customerDetail.Dob,
                RegistrationDate = customerDetail.RegistrationDate,
                AccountType = customerDetail.AccountType,
                BranchName = customerDetail.BranchName,
                CitizenStatus = customerDetail.CitizenStatus,
                InitialDepositAmount = customerDetail.InitialDepositAmount,
                IdProofType = customerDetail.IdProofType,
                IdDocumentNo = customerDetail.IdDocumentNo,
                RefAccHolderName = customerDetail.RefAccHolderName,
                RefAccHolderAccNo = customerDetail.RefAccHolderAccNo,
                RefAccHolderAddress = customerDetail.RefAccHolderAddress,
                IsProfileComplete = customerDetail.IsProfileComplete,
                AccountNumber=customerDetail.AccountNumber,
            };
            return customer;
        }
        private CustomerDTO convertCustomerDetails_to_CustomerDTO(CustomerDetail customerDetail)
        {
            CustomerDTO customer = new CustomerDTO() { 
                Name = customerDetail.Name,
                CustomerId = customerDetail.CustomerId,
                GuardianType= customerDetail.GuardianType,
                GuardianName = customerDetail.GuardianName,
                Address= customerDetail.Address,
                Citizenship = customerDetail.Citizenship,
                State= customerDetail.State,
                Country = customerDetail.Country,
                Email= customerDetail.Email,
                Gender= customerDetail.Gender,
                MaritalStatus= customerDetail.MaritalStatus,
                ContactNo = customerDetail.ContactNo,
                Dob= customerDetail.Dob,
                RegistrationDate= customerDetail.RegistrationDate,
                AccountType= customerDetail.AccountType,
                BranchName= customerDetail.BranchName,
                CitizenStatus= customerDetail.CitizenStatus,
                InitialDepositAmount= customerDetail.InitialDepositAmount,
                IdProofType = customerDetail.IdProofType,
                IdDocumentNo= customerDetail.IdDocumentNo,
                RefAccHolderName= customerDetail.RefAccHolderName,
                RefAccHolderAccNo= customerDetail.RefAccHolderAccNo,
                RefAccHolderAddress= customerDetail.RefAccHolderAddress,
                IsProfileComplete= customerDetail.IsProfileComplete,
                AccountNumber=customerDetail.AccountNumber
            };
            return customer;
        }
        private bool CustomerDetailExists(string id)
        {
            return _context.CustomerDetails.Any(e => e.CustomerId == id);
        }
    }
}
