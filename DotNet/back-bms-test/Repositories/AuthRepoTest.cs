using back_bms.DTOs;
using back_bms.Models;
using back_bms.Reposotories;
using Microsoft.EntityFrameworkCore;
using Moq;
using NUnit.Framework;
using System.Collections.Generic;
using System.Linq;

namespace back_bms_test.Repositories
{
    [TestFixture]
    class AuthRepoTest
    {
        Mock<BMSContext> mockBMSContext ;

        AuthRepo authRepo ;
        public AuthRepoTest()
        {

           mockBMSContext = new MockBMSContext().mockBMSContext;

           authRepo = new AuthRepo(mockBMSContext.Object);

        }
        public void Setup()
        {

        }
        
        [Test]
        public void IfUserExist_UsernameAvailableReturns_False_and_viceVera()
        {

            AuthRepo authRepo = new AuthRepo(mockBMSContext.Object);
            bool result = authRepo.UsernameAvailable("username");
            Assert.IsFalse(result);
            result = authRepo.UsernameAvailable("usname");
            Assert.IsTrue(result);
        } 

        [Test]
        public void NewCustomer_validDetails_AddsToDB()
        {
            Customer customer = new Customer()
            {
                Username = "newUser",
                Password = "newPass",
                Email = "notchecking"
            };

            string result = authRepo.CreateUser(customer);
            Assert.IsNotNull(result);
        }
        
        [Test]
        public void GetLastID_ReturnsR000()
        {
            string result =authRepo.GetLastId();
            Assert.That(result, Is.EqualTo("R-000"));
        }

        [Test]
        public void GetNewId_PassingR004_ReturnsR005()
        {
            AuthRepo repo = new AuthRepo(mockBMSContext.Object);
            string result=repo.GetNewId("R-004");
            Assert.That(result, Is.EqualTo("R-005"));

        }

        [Test]
        public void Login_validDetails_returnsCustomerID()
        {
          
            AuthRepo repo = new AuthRepo(mockBMSContext.Object);
            LoginDetails loginDetails = new LoginDetails { Username = "username", Password = "password" };

            string result = repo.Login(loginDetails);
            Assert.That(result, Is.EqualTo("R-000"));

        } 
        [Test]
        public void Login_invalidDetails_returnsNull()
        {
            
            AuthRepo repo = new AuthRepo(mockBMSContext.Object);
            LoginDetails loginDetails = new LoginDetails { Username = "invalidUsername", Password = "password" };

            string result = repo.Login(loginDetails);
            Assert.That(result, Is.Null);

        }

        [Test]
        public void GetNewAccountNumber()
        {
            AuthRepo repo = new AuthRepo(mockBMSContext.Object);
            string result = repo.NewAccountNumber();
            Assert.That(result, Is.Not.Null);
            Assert.That(result.Length, Is.EqualTo(16));

        }


    }
}
