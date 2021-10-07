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
    class LoanRepoTests
    {

        Mock<BMSContext> mockBMSContext;

        public LoanRepoTests()
        {

            mockBMSContext = new MockBMSContext().mockBMSContext;

        }
        [Test]
        public async Task GetLoan_sendsValidData()
        {
            mockBMSContext.Setup(a => a.Loans.FindAsync(It.IsAny<int>())).ReturnsAsync(new Loan { LoanId = 0 });
            var repo = new LoanRepo(mockBMSContext.Object);

            var result = await repo.GetLoan(0);
        
            Assert.That(result, Is.Not.Null);
        } 
        [Test]
        public async Task GetLoan_InValidLoanId_ReturnsNull()
        {
            mockBMSContext.Setup(a => a.Loans.FindAsync(It.IsAny<int>())).ReturnsAsync(()=>null);
            var repo = new LoanRepo(mockBMSContext.Object);

            var result = await repo.GetLoan(0);
        
            Assert.That(result, Is.Null);
        }
    }
}
