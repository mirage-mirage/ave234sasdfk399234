import propTypes from "prop-types";
import TextInputField from "../TextInputField";

const ContactNumber = ({ value, setValue, setIsValid }) => {
  const validateContactNo = (value) => RegExp(/^[0-9]{10}$/).test(value);

  return (
    <TextInputField
      value={value}
      setIsValid={setIsValid}
      setValue={setValue}
      id="contactNumber"
      errorMessage="mandatory- should be 10 digit"
      validInputFn={(value) => validateContactNo(value)}
      placeholder="contactNo eg. xxxxxxxxxx"
      label="Contact No."
    ></TextInputField>
  );
};

ContactNumber.propTypes = {
  setValue: propTypes.func,
  value: propTypes.string,
  setIsValid: propTypes.func,
};
export default ContactNumber;
