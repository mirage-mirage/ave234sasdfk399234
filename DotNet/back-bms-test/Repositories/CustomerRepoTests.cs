using back_bms.DTOs;
using back_bms.Models;
using back_bms.Reposotories;
using Moq;
using NUnit.Framework;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace back_bms_test.Repositories
{
    [TestFixture]
    class CustomerRepoTests
    {
        Mock<BMSContext> mockBMSContext;
        CustomerRepo repo;
        public CustomerRepoTests()
        {

            mockBMSContext = new MockBMSContext().mockBMSContext;
            repo = new CustomerRepo(mockBMSContext.Object);

        }

        [Test]
        public void GetCustomerDetail_WithIdR000_ReturnValidCustomer()
        {

            mockBMSContext.Setup(a => a.CustomerDetails.Find(It.IsAny<string>())).Returns(new CustomerDetail
            {
                CustomerId = "R-000",
                Name = "name",
            });

            var result = repo.GetCustomerDetail("R-000");
            Assert.That(result.CustomerId, Is.EqualTo("R-000"));
        }
        [Test]
        public void GetCustomerDetail_invalidDetails_ReturnNull()
        {

            mockBMSContext.Setup(a => a.CustomerDetails.Find(It.IsAny<string>())).Returns(()=>null);

            var result = repo.GetCustomerDetail("R-000");
            Assert.That(result, Is.Null);
        }



    }
}
