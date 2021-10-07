using back_bms.Models;
using Microsoft.EntityFrameworkCore;
using Moq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace back_bms_test
{
    class MockBMSContext
    {

       public Mock<BMSContext> mockBMSContext = new Mock<BMSContext>();
       public Mock<DbSet<Auth>> mockDbSetAuth = new Mock<DbSet<Auth>>();
       public Mock<DbSet<Loan>> mockDbSetLoan = new Mock<DbSet<Loan>>();
       public Mock<DbSet<CustomerDetail>> mockDbSetCustomerDetail = new Mock<DbSet<CustomerDetail>>();

        public MockBMSContext()
        {
            #region AuthsMocking
            var data = new List<Auth>
            {
                new Auth {Username="username",Password="password",CustomerId="R-000"}
            }.AsQueryable();

            mockDbSetAuth.As<IQueryable<Auth>>().Setup(a => a.Provider).Returns(data.Provider);
            mockDbSetAuth.As<IQueryable<Auth>>().Setup(a => a.Expression).Returns(data.Expression);
            mockDbSetAuth.As<IQueryable<Auth>>().Setup(a => a.ElementType).Returns(data.ElementType);
            mockDbSetAuth.As<IQueryable<Auth>>().Setup(a => a.GetEnumerator()).Returns(data.GetEnumerator());

            mockBMSContext.Setup(a => a.Auths).Returns(mockDbSetAuth.Object);
            #endregion

            #region CustomerDetailsMocking
            var customerDetails = new List<CustomerDetail>
            {
                new CustomerDetail
                {
                    CustomerId="R-000",
                    Name="name",                    
                },
               
                
            }.AsQueryable();

            mockDbSetCustomerDetail.As<IQueryable<CustomerDetail>>().Setup(a => a.Provider).Returns(customerDetails.Provider);
            mockDbSetCustomerDetail.As<IQueryable<CustomerDetail>>().Setup(a => a.Expression).Returns(customerDetails.Expression);
            mockDbSetCustomerDetail.As<IQueryable<CustomerDetail>>().Setup(a => a.ElementType).Returns(customerDetails.ElementType);
            mockDbSetCustomerDetail.As<IQueryable<CustomerDetail>>().Setup(a => a.GetEnumerator()).Returns(customerDetails.GetEnumerator());

            mockBMSContext.Setup(a => a.CustomerDetails).Returns(mockDbSetCustomerDetail.Object);
            
            #endregion

            #region LoanMock
            var loans = new List<Loan>
            {
                new Loan
                {
                    LoanId=0,
                },


            }.AsQueryable();

            mockDbSetLoan.As<IQueryable<Loan>>().Setup(a => a.Provider).Returns(loans.Provider);
            mockDbSetLoan.As<IQueryable<Loan>>().Setup(a => a.Expression).Returns(loans.Expression);
            mockDbSetLoan.As<IQueryable<Loan>>().Setup(a => a.ElementType).Returns(loans.ElementType);
            mockDbSetLoan.As<IQueryable<Loan>>().Setup(a => a.GetEnumerator()).Returns(loans.GetEnumerator());

            mockBMSContext.Setup(a => a.Loans).Returns(mockDbSetLoan.Object);
            #endregion
        }
    }
}
