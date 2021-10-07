import propTypes from "prop-types";
import TextInputField from "../../../../commonComponents/TextInputField";
import { getAge } from "../../../../commonComponents/common-functions";
import { useState } from "react";

const ContactNumber = ({ value, setValue, setIsValid }) => {
  const [errorMessage, setErrorMessage] = useState("");
  const validateDOB = (value) => {
    if (value !== "") {
      const age = getAge(value);
      if (age < 18) {
        setErrorMessage("should be at least 18");
        return false;
      }
      if (age > 96) {
        setErrorMessage("should be less than 96");
        return false;
      }

      return true;
    }
    return false;
  };

  return (
    <TextInputField
      value={value}
      setIsValid={setIsValid}
      setValue={setValue}
      id="dob"
      errorMessage={` required ${errorMessage}`}
      validInputFn={(value) => validateDOB(value)}
      placeholder="DOB eg.DD/MM/YYYY"
      label="Date of Birth"
      type="date"
    ></TextInputField>
  );
};

ContactNumber.propTypes = {
  setValue: propTypes.func,
  value: propTypes.string,
  setIsValid: propTypes.func,
};
export default ContactNumber;
