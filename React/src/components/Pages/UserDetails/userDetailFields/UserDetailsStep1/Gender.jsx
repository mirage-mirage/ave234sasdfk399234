import propTypes from "prop-types";
import TextInputField from "../TextInputField";

const ContactNumber = ({ value, setValue, setIsValid }) => {
  const validateContactNo = (value) => value !== "";

  return (
    <TextInputField
      value={value}
      setIsValid={setIsValid}
      setValue={setValue}
      id="gender"
      errorMessage=" required"
      validInputFn={(value) => validateContactNo(value)}
      placeholder="gender"
      label="Gender"
    ></TextInputField>
  );
};

ContactNumber.propTypes = {
  setValue: propTypes.func,
  value: propTypes.string,
  setIsValid: propTypes.func,
};
export default ContactNumber;
