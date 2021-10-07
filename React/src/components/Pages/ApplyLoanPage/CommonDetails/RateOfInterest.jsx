import propTypes from "prop-types";
import TextInputField from "../../../commonComponents/TextInputField";

const RateOfInterest = ({ value, setValue, setIsValid }) => {
  const validateDOB = (value) => RegExp(/^[0-9]{2}.[0-9]{2}$/).test(value);

  return (
    <TextInputField
      value={value}
      setIsValid={setIsValid}
      setValue={setValue}
      id="roi"
      errorMessage={" required Formate- xx.xx"}
      validInputFn={(value) => validateDOB(value)}
      placeholder="Rate of Interest"
      label="Rate of Interest"
      type="number"
    ></TextInputField>
  );
};

RateOfInterest.propTypes = {
  setValue: propTypes.func,
  value: propTypes.string,
  setIsValid: propTypes.func,
};
export default RateOfInterest;
