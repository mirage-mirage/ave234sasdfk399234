import { lazy, Suspense, useEffect, useState } from "react";
import LoanAmount from "./CommonDetails/LoanAmount";
import LoanApplyDate from "./CommonDetails/LoanApplyDate";
import LoanType from "./CommonDetails/LoanType";
import LoanIssueDate from "./CommonDetails/LoanIssueDate";
import RateOfInterest from "./CommonDetails/RateOfInterest";
import DurationOfLoan from "./CommonDetails/DurationOfLoan";
import PersonalHomeLoan from "./LoanType/PersonalHomeLoan";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
const EducationLoan = lazy(() => import("./LoanType/EducationLoan"));

const CommonLoanDetails = () => {
  const customerId = useSelector((s) => s.auth.id);

  const history = useHistory();

  const [loanType, setLoanType] = useState("");
  const [loanTypeIsValid, setLoanTypeIsValid] = useState(false);

  const [subLoan, setSubLoan] = useState("");
  const [subLoanIsValid, setSubLoanIsValid] = useState(false);

  const [loanAmount, setLoanAmount] = useState("");
  const [loanAmountIsValid, setLoanAmountIsValid] = useState(false);

  const [loanApplyDate, setLoanApplyDate] = useState("");
  const [loanApplyDateIsValid, setLoanApplyDateIsValid] = useState(false);

  const [loanIssueDate, setLoanIssueDate] = useState("");
  const [loanIssueDateIsValid, setLoanIssueDateIsValid] = useState(false);

  const [roi, setRoi] = useState("");
  const [roiIsValid, setRoiIsValid] = useState(false);

  const [loanDuration, setLoanDuration] = useState("");
  const [loanDurationIsValid, setLoanDurationIsValid] = useState(false);

  useEffect(() => {
    setSubLoan("");
    setSubLoanIsValid(false);
  }, [loanType]);

  const commonDetailsAreValid = () =>
    loanTypeIsValid &&
    loanAmountIsValid &&
    loanApplyDateIsValid &&
    loanDurationIsValid &&
    roiIsValid &&
    loanIssueDateIsValid &&
    subLoanIsValid;

  const onFormSubmit = (event) => {
    event.preventDefault();
    //   "customerId": "string",
    // "loanAmount": "string",
    // "loanApplyDate": "2021-10-04T04:49:24.624Z",
    // "loanIssueDate": "2021-10-04T04:49:24.624Z",
    // "rateOfInterest": 0,
    // "durationOfTheLoan": 0,
    const data = {
      customerId: customerId,
      loanAmount: loanAmount,
      loanApplyDate: loanApplyDate,
      loanIssueDate: loanIssueDate,
      rateOfInterest: roi,
      durationOfTheLoan: DurationOfLoan,
      loanType: loanType,
    };
    if (loanType == "Education") {
      data.educationLoan = subLoan;
    } else {
      data.personalLoan = subLoan;
    }
    fetch("https://localhost:44329/api/Loans", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((r) => r.json())
      .then((r) => alert("Loan Applied!! Loan Id=" + r.loanId))
      .then(() => history.push("/"));
  };
  return (
    <div className="container">
      <div className=" card  mt-3">
        <div className="card-header">Apply Loan</div>
        <form onSubmit={onFormSubmit} className="card-body">
          <div className="row row-cols-lg-3">
            <LoanType
              value={loanType}
              setValue={setLoanType}
              setIsValid={setLoanTypeIsValid}
            />
            <LoanAmount
              value={loanAmount}
              setValue={setLoanAmount}
              setIsValid={setLoanAmountIsValid}
            />
            <LoanApplyDate
              value={loanApplyDate}
              setValue={setLoanApplyDate}
              setIsValid={setLoanApplyDateIsValid}
            />
            <LoanIssueDate
              value={loanIssueDate}
              setValue={setLoanIssueDate}
              setIsValid={setLoanIssueDateIsValid}
            />
            <RateOfInterest
              value={roi}
              setValue={setRoi}
              setIsValid={setRoiIsValid}
            />
            <DurationOfLoan
              value={loanDuration}
              setValue={setLoanDuration}
              setIsValid={setLoanDurationIsValid}
            />
          </div>
          {loanType == "Education" && (
            <Suspense fallback={<div>Loading...</div>}>
              <EducationLoan
                setValue={setSubLoan}
                setValueIsValid={setSubLoanIsValid}
                valueIsValid={subLoanIsValid}
              />
            </Suspense>
          )}
          {loanType == "Personal/Home" && (
            <PersonalHomeLoan
              setValue={setSubLoan}
              setValueIsValid={setSubLoanIsValid}
              valueIsValid={subLoanIsValid}
            />
          )}
          <button
            type="submit"
            className="btn btn-primary "
            disabled={!commonDetailsAreValid()}
          >
            Apply Loan
          </button>
        </form>
      </div>
    </div>
  );
};

export default CommonLoanDetails;
