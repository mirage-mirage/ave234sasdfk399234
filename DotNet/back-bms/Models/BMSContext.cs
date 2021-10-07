using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

#nullable disable

namespace back_bms.Models
{
    public partial class BMSContext : DbContext
    {
        public BMSContext()
        {
        }

        public BMSContext(DbContextOptions<BMSContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Auth> Auths { get; set; }
        public virtual DbSet<CustomerDetail> CustomerDetails { get; set; }
        public virtual DbSet<EducationLoan> EducationLoans { get; set; }
        public virtual DbSet<Loan> Loans { get; set; }
        public virtual DbSet<PersonalLoan> PersonalLoans { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseSqlServer("Server=Laptop;Database=BMS;Integrated Security=True;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("Relational:Collation", "SQL_Latin1_General_CP1_CI_AS");

            modelBuilder.Entity<Auth>(entity =>
            {
                entity.HasKey(e => e.Username)
                    .HasName("PK__Auth__F3DBC573C53D4111");

                entity.ToTable("Auth");

                entity.Property(e => e.Username)
                    .HasMaxLength(30)
                    .IsUnicode(false)
                    .HasColumnName("username");

                entity.Property(e => e.CustomerId)
                    .IsRequired()
                    .HasMaxLength(5)
                    .IsUnicode(false)
                    .HasColumnName("customerId");

                entity.Property(e => e.Password)
                    .IsRequired()
                    .HasMaxLength(30)
                    .IsUnicode(false)
                    .HasColumnName("password");

                entity.HasOne(d => d.Customer)
                    .WithMany(p => p.Auths)
                    .HasForeignKey(d => d.CustomerId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__Auth__customerId__398D8EEE");
            });

            modelBuilder.Entity<CustomerDetail>(entity =>
            {
                entity.HasKey(e => e.CustomerId);

                entity.Property(e => e.CustomerId)
                    .HasMaxLength(5)
                    .IsUnicode(false);

                entity.Property(e => e.AccountNumber).HasMaxLength(16);

                entity.Property(e => e.AccountType).HasMaxLength(50);

                entity.Property(e => e.Address).HasMaxLength(50);

                entity.Property(e => e.BranchName).HasMaxLength(50);

                entity.Property(e => e.CitizenStatus).HasMaxLength(50);

                entity.Property(e => e.Citizenship).HasMaxLength(50);

                entity.Property(e => e.ContactNo).HasMaxLength(10);

                entity.Property(e => e.Country).HasMaxLength(50);

                entity.Property(e => e.Dob)
                    .HasColumnType("date")
                    .HasColumnName("DOB");

                entity.Property(e => e.Email).HasMaxLength(50);

                entity.Property(e => e.Gender).HasMaxLength(50);

                entity.Property(e => e.GuardianName).HasMaxLength(50);

                entity.Property(e => e.GuardianType).HasMaxLength(50);

                entity.Property(e => e.IdDocumentNo).HasMaxLength(50);

                entity.Property(e => e.IdProofType).HasMaxLength(50);

                entity.Property(e => e.InitialDepositAmount).HasMaxLength(50);

                entity.Property(e => e.IsProfileComplete)
                    .HasColumnName("isProfileComplete")
                    .HasDefaultValueSql("((0))");

                entity.Property(e => e.MaritalStatus).HasMaxLength(50);

                entity.Property(e => e.Name).HasMaxLength(50);

                entity.Property(e => e.RefAccHolderAccNo).HasMaxLength(50);

                entity.Property(e => e.RefAccHolderAddress).HasMaxLength(50);

                entity.Property(e => e.RefAccHolderName).HasMaxLength(50);

                entity.Property(e => e.RegistrationDate).HasColumnType("date");

                entity.Property(e => e.State).HasMaxLength(50);
            });

            modelBuilder.Entity<EducationLoan>(entity =>
            {
                entity.ToTable("EducationLoan");

                entity.Property(e => e.AnnualIncome)
                    .IsRequired()
                    .HasMaxLength(50);

                entity.Property(e => e.Course)
                    .IsRequired()
                    .HasMaxLength(50);

                entity.Property(e => e.CourseFee)
                    .IsRequired()
                    .HasMaxLength(50);

                entity.Property(e => e.FatherExpCurrentCompany)
                    .IsRequired()
                    .HasMaxLength(50);

                entity.Property(e => e.FatherName)
                    .IsRequired()
                    .HasMaxLength(50);

                entity.Property(e => e.FatherOccupation)
                    .IsRequired()
                    .HasMaxLength(50);

                entity.Property(e => e.FatherTotalExp)
                    .IsRequired()
                    .HasMaxLength(50);

                entity.Property(e => e.RationCardNo)
                    .IsRequired()
                    .HasMaxLength(50);
            });

            modelBuilder.Entity<Loan>(entity =>
            {
                entity.ToTable("Loan");

                entity.Property(e => e.CustomerId)
                    .IsRequired()
                    .HasMaxLength(5)
                    .IsUnicode(false);

                entity.Property(e => e.LoanAmount)
                    .IsRequired()
                    .HasMaxLength(50);

                entity.Property(e => e.LoanApplyDate).HasColumnType("date");

                entity.Property(e => e.LoanIssueDate).HasColumnType("date");

                entity.Property(e => e.RateOfInterest).HasColumnType("decimal(4, 2)");

                entity.HasOne(d => d.Customer)
                    .WithMany(p => p.Loans)
                    .HasForeignKey(d => d.CustomerId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Loan_CustomerDetails");

                entity.HasOne(d => d.EducationLoan)
                    .WithMany(p => p.Loans)
                    .HasForeignKey(d => d.EducationLoanId)
                    .HasConstraintName("FK_Loan_EducationLoan");

                entity.HasOne(d => d.PersonalLoan)
                    .WithMany(p => p.Loans)
                    .HasForeignKey(d => d.PersonalLoanId)
                    .HasConstraintName("FK_Loan_PersonalLoan");
            });

            modelBuilder.Entity<PersonalLoan>(entity =>
            {
                entity.ToTable("PersonalLoan");

                entity.Property(e => e.AnnualIncome)
                    .IsRequired()
                    .HasMaxLength(50);

                entity.Property(e => e.CompanyName)
                    .IsRequired()
                    .HasMaxLength(50);

                entity.Property(e => e.Designation)
                    .IsRequired()
                    .HasMaxLength(50);

                entity.Property(e => e.ExpCurrentCompany)
                    .IsRequired()
                    .HasMaxLength(50);

                entity.Property(e => e.TotalExp)
                    .IsRequired()
                    .HasMaxLength(50);
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
