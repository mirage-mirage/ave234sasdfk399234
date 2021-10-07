/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import InputText from "./InputText";
import InputNumber from "./InputNumber";
import propTypes from "prop-types";

const EducationLoan = ({ setValue, setValueIsValid, valueIsValid }) => {
  const [courseName, setCourseName] = useState("");
  const [courseNameIsValid, setCourseNameIsValid] = useState(false);

  const [fatherName, setFatherName] = useState("");
  const [fatherNameIsValid, setFatherNameIsValid] = useState(false);

  const [fatherOccupation, setFatherOccupation] = useState("");
  const [fatherOccupationIsValid, setFatherOccupationIsValid] = useState(false);

  const [fatherTotalExp, setFatherTotalExp] = useState("");
  const [fatherTotalExpIsValid, setFatherTotalExpIsValid] = useState(false);

  const [fatherExpCurrent, setFatherExpCurrent] = useState("");
  const [fatherExpCurrentIsValid, setFatherExpCurrentIsValid] = useState(false);

  const [courseFee, setCourseFee] = useState("");
  const [courseFeeIsValid, setCourseFeeIsValid] = useState(false);

  const [rationCardNo, setRationCardNo] = useState("");
  const [rationCardNoIsValid, setRationCardNoIsValid] = useState(false);

  const [annualIncome, setAnnualIncome] = useState("");
  const [annualIncomeIsValid, setAnnualIncomeIsValid] = useState(false);

  const dataValidation = () =>
    courseNameIsValid &&
    fatherNameIsValid &&
    fatherOccupationIsValid &&
    fatherTotalExpIsValid &&
    courseFeeIsValid &&
    rationCardNoIsValid &&
    annualIncomeIsValid &&
    fatherExpCurrentIsValid;

  // "courseFee": "string",
  // "course": "string",
  // "fatherName": "string",
  // "fatherOccupation": "string",
  // "fatherTotalExp": "string",
  // "fatherExpCurrentCompany": "string",
  // "rationCardNo": "string",
  // "annualIncome": "string",
  if (dataValidation()) {
    setValueIsValid(true);
  } else {
    setValueIsValid(false);
  }

  useEffect(() => {
    if (dataValidation()) {
      setValue({
        course: courseName,
        courseFee: courseFee,
        fatherName: fatherName,
        fatherOccupation: fatherOccupation,
        fatherTotalExp: fatherTotalExp,
        fatherExpCurrentCompany: fatherExpCurrent,
        rationCardNo: rationCardNo,
        annualIncome: annualIncome,
      });
    }
  }, [
    valueIsValid,
    courseName,
    courseFee,
    fatherName,
    fatherOccupation,
    fatherTotalExp,
    fatherExpCurrent,
    rationCardNo,
    annualIncome,
  ]);

  return (
    <div className="card-body bg-light ">
      <div className="row row-cols-lg-2">
        <InputText
          className="col"
          value={courseName}
          setValue={setCourseName}
          setIsValid={setCourseNameIsValid}
          label="Course Name"
        />
        <InputNumber
          className="col"
          value={courseFee}
          setValue={setCourseFee}
          setIsValid={setCourseFeeIsValid}
          label="Course Fee"
        />
      </div>
      <div className="row">
        <div className="col-md-3">
          <InputText
            value={fatherName}
            setValue={setFatherName}
            setIsValid={setFatherNameIsValid}
            label="Father Name"
          />
        </div>
        <div className="col-md-3">
          <InputText
            value={fatherOccupation}
            setValue={setFatherOccupation}
            setIsValid={setFatherOccupationIsValid}
            label="Father occupation"
          />
        </div>
        <div className="col-md-2">
          <InputNumber
            value={fatherTotalExp}
            setValue={setFatherTotalExp}
            setIsValid={setFatherTotalExpIsValid}
            label="Father Total Exp"
          />
        </div>
        <div className="col-md-4">
          <InputNumber
            value={fatherExpCurrent}
            setValue={setFatherExpCurrent}
            setIsValid={setFatherExpCurrentIsValid}
            label="Father Exp with Current Company"
          />
        </div>
      </div>
      <div className="row row-cols-lg-2">
        <InputNumber
          value={rationCardNo}
          setValue={setRationCardNo}
          setIsValid={setRationCardNoIsValid}
          label="Ration Card No"
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

EducationLoan.propTypes = {
  setValue: propTypes.func,
  setValueIsValid: propTypes.func,
  valueIsValid: propTypes.bool,
};

export default EducationLoan;
