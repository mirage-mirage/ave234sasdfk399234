import { useState, useEffect } from "react";
import propTypes from "prop-types";
import InputText from "./InputText";
import InputNumber from "./InputNumber";

const PersonalHomeLoan = ({ setValue, setValueIsValid, valueIsValid }) => {
  const [companyName, setCompanyName] = useState("");
  const [companyNameIsValid, setCompanyNameIsValid] = useState(false);

  const [designation, setDesignation] = useState("");
  const [designationIsValid, setDesignationIsValid] = useState(false);

  const [totalExp, setTotalExp] = useState("");
  const [totalExpIsValid, setTotalExpIsValid] = useState(false);

  const [expCurrent, setExpCurrent] = useState("");
  const [expCurrentIsValid, setExpCurrentIsValid] = useState(false);

  const [annualIncome, setAnnualIncome] = useState("");
  const [annualIncomeIsValid, setAnnualIncomeIsValid] = useState(false);

  const dataValidation = () =>
    companyNameIsValid &&
    designationIsValid &&
    totalExpIsValid &&
    expCurrentIsValid &&
    annualIncomeIsValid;

  if (dataValidation()) {
    setValueIsValid(true);
  } else {
    setValueIsValid(false);
  }

  useEffect(() => {
    if (dataValidation()) {
      // "annualIncome": "string",
      // "companyName": "string",
      // "designation": "string",
      // "totalExp": "string",
      // "expCurrentCompany": "string",
      setValue({
        annualIncome: annualIncome,
        companyName: companyName,
        designation: designation,
        totalExp: totalExp,
        expCurrentCompany: expCurrent,
      });
    }
  }, [
    valueIsValid,
    annualIncome,
    companyName,
    designation,
    totalExp,
    expCurrent,
  ]);
  return (
    <div className="card-body bg-light ">
      <div className="row row-cols-md-2">
        <InputText
          value={companyName}
          setValue={setCompanyName}
          setIsValid={setCompanyNameIsValid}
          label="Company Name"
        />
        <InputText
          value={designation}
          setValue={setDesignation}
          setIsValid={setDesignationIsValid}
          label="Designation"
        />
      </div>
      <div className="row row-cols-md-3">
        <InputNumber
          value={totalExp}
          setValue={setTotalExp}
          setIsValid={setTotalExpIsValid}
          label="Total Exp"
        />
        <InputNumber
          value={expCurrent}
          setValue={setExpCurrent}
          setIsValid={setExpCurrentIsValid}
          label="Exp with Current Company"
        />
        <InputNumber
          value={annualIncome}
          setValue={setAnnualIncome}
          setIsValid={setAnnualIncomeIsValid}
          label="Annual Income"
        />
      </div>
    </div>
  );
};

PersonalHomeLoan.propTypes = {
  setValue: propTypes.func,
  setValueIsValid: propTypes.func,
  valueIsValid: propTypes.bool,
};

export default PersonalHomeLoan;
