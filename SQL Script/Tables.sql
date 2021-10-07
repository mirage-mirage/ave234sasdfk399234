USE [BMS]
GO

ALTER TABLE [dbo].[CustomerDetails] DROP CONSTRAINT [DF__CustomerD__isPro__36B12243]
GO

/****** Object:  Table [dbo].[CustomerDetails]    Script Date: 07-10-2021 17:34:55 ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[CustomerDetails]') AND type in (N'U'))
DROP TABLE [dbo].[CustomerDetails]
GO

/****** Object:  Table [dbo].[CustomerDetails]    Script Date: 07-10-2021 17:34:55 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[CustomerDetails](
	[CustomerId] [varchar](5) NOT NULL,
	[GuardianType] [nvarchar](50) NULL,
	[GuardianName] [nvarchar](50) NULL,
	[Address] [nvarchar](50) NULL,
	[Citizenship] [nvarchar](50) NULL,
	[State] [nvarchar](50) NULL,
	[Country] [nvarchar](50) NULL,
	[Email] [nvarchar](50) NULL,
	[Gender] [nvarchar](50) NULL,
	[MaritalStatus] [nvarchar](50) NULL,
	[ContactNo] [nvarchar](10) NULL,
	[DOB] [date] NULL,
	[RegistrationDate] [date] NULL,
	[AccountType] [nvarchar](50) NULL,
	[BranchName] [nvarchar](50) NULL,
	[CitizenStatus] [nvarchar](50) NULL,
	[InitialDepositAmount] [nvarchar](50) NULL,
	[IdProofType] [nvarchar](50) NULL,
	[IdDocumentNo] [nvarchar](50) NULL,
	[RefAccHolderName] [nvarchar](50) NULL,
	[RefAccHolderAccNo] [nvarchar](50) NULL,
	[RefAccHolderAddress] [nvarchar](50) NULL,
	[isProfileComplete] [bit] NULL,
	[Name] [nvarchar](50) NULL,
	[AccountNumber] [nvarchar](16) NULL,
 CONSTRAINT [PK_CustomerDetails] PRIMARY KEY CLUSTERED 
(
	[CustomerId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO

ALTER TABLE [dbo].[CustomerDetails] ADD  DEFAULT ((0)) FOR [isProfileComplete]
GO



USE [BMS]
GO

ALTER TABLE [dbo].[Auth] DROP CONSTRAINT [FK__Auth__customerId__398D8EEE]
GO

/****** Object:  Table [dbo].[Auth]    Script Date: 07-10-2021 17:34:50 ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[Auth]') AND type in (N'U'))
DROP TABLE [dbo].[Auth]
GO

/****** Object:  Table [dbo].[Auth]    Script Date: 07-10-2021 17:34:50 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[Auth](
	[username] [varchar](30) NOT NULL,
	[password] [varchar](30) NOT NULL,
	[customerId] [varchar](5) NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[username] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO

ALTER TABLE [dbo].[Auth]  WITH CHECK ADD FOREIGN KEY([customerId])
REFERENCES [dbo].[CustomerDetails] ([CustomerId])
GO

USE [BMS]
GO

/****** Object:  Table [dbo].[EducationLoan]    Script Date: 07-10-2021 17:35:01 ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[EducationLoan]') AND type in (N'U'))
DROP TABLE [dbo].[EducationLoan]
GO

/****** Object:  Table [dbo].[EducationLoan]    Script Date: 07-10-2021 17:35:01 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[EducationLoan](
	[EducationLoanId] [int] IDENTITY(1,1) NOT NULL,
	[CourseFee] [nvarchar](50) NOT NULL,
	[Course] [nvarchar](50) NOT NULL,
	[FatherName] [nvarchar](50) NOT NULL,
	[FatherOccupation] [nvarchar](50) NOT NULL,
	[FatherTotalExp] [nvarchar](50) NOT NULL,
	[FatherExpCurrentCompany] [nvarchar](50) NOT NULL,
	[RationCardNo] [nvarchar](50) NOT NULL,
	[AnnualIncome] [nvarchar](50) NOT NULL,
 CONSTRAINT [PK_EducationLoan] PRIMARY KEY CLUSTERED 
(
	[EducationLoanId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO

USE [BMS]
GO

/****** Object:  Table [dbo].[PersonalLoan]    Script Date: 07-10-2021 17:35:14 ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[PersonalLoan]') AND type in (N'U'))
DROP TABLE [dbo].[PersonalLoan]
GO

/****** Object:  Table [dbo].[PersonalLoan]    Script Date: 07-10-2021 17:35:14 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[PersonalLoan](
	[PersonalLoanId] [int] IDENTITY(1,1) NOT NULL,
	[AnnualIncome] [nvarchar](50) NOT NULL,
	[CompanyName] [nvarchar](50) NOT NULL,
	[Designation] [nvarchar](50) NOT NULL,
	[TotalExp] [nvarchar](50) NOT NULL,
	[ExpCurrentCompany] [nvarchar](50) NOT NULL,
 CONSTRAINT [PK_PersonalLoan] PRIMARY KEY CLUSTERED 
(
	[PersonalLoanId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO

USE [BMS]
GO

ALTER TABLE [dbo].[Loan] DROP CONSTRAINT [FK_Loan_PersonalLoan]
GO

ALTER TABLE [dbo].[Loan] DROP CONSTRAINT [FK_Loan_EducationLoan]
GO

ALTER TABLE [dbo].[Loan] DROP CONSTRAINT [FK_Loan_CustomerDetails]
GO

/****** Object:  Table [dbo].[Loan]    Script Date: 07-10-2021 17:35:06 ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[Loan]') AND type in (N'U'))
DROP TABLE [dbo].[Loan]
GO

/****** Object:  Table [dbo].[Loan]    Script Date: 07-10-2021 17:35:06 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[Loan](
	[CustomerId] [varchar](5) NOT NULL,
	[LoanId] [int] IDENTITY(1,1) NOT NULL,
	[LoanAmount] [nvarchar](50) NOT NULL,
	[LoanApplyDate] [date] NOT NULL,
	[LoanIssueDate] [date] NOT NULL,
	[RateOfInterest] [decimal](4, 2) NOT NULL,
	[DurationOfTheLoan] [int] NOT NULL,
	[EducationLoanId] [int] NULL,
	[PersonalLoanId] [int] NULL,
 CONSTRAINT [PK_Loan] PRIMARY KEY CLUSTERED 
(
	[LoanId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO

ALTER TABLE [dbo].[Loan]  WITH CHECK ADD  CONSTRAINT [FK_Loan_CustomerDetails] FOREIGN KEY([CustomerId])
REFERENCES [dbo].[CustomerDetails] ([CustomerId])
GO

ALTER TABLE [dbo].[Loan] CHECK CONSTRAINT [FK_Loan_CustomerDetails]
GO

ALTER TABLE [dbo].[Loan]  WITH CHECK ADD  CONSTRAINT [FK_Loan_EducationLoan] FOREIGN KEY([EducationLoanId])
REFERENCES [dbo].[EducationLoan] ([EducationLoanId])
GO

ALTER TABLE [dbo].[Loan] CHECK CONSTRAINT [FK_Loan_EducationLoan]
GO

ALTER TABLE [dbo].[Loan]  WITH CHECK ADD  CONSTRAINT [FK_Loan_PersonalLoan] FOREIGN KEY([PersonalLoanId])
REFERENCES [dbo].[PersonalLoan] ([PersonalLoanId])
GO

ALTER TABLE [dbo].[Loan] CHECK CONSTRAINT [FK_Loan_PersonalLoan]
GO

