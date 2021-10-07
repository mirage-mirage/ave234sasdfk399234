import propTypes from "prop-types";
import TextInputField from "../TextInputField";

const Address = ({ value, setValue, setIsValid }) => {
  return (
    <TextInputField
      errorMessage="mandatory"
      label="Address"
      placeholder="H-xxx Society, Street, City"
      id="userAddress"
      value={value}
      setValue={setValue}
      setIsValid={setIsValid}
      validInputFn={(val) => val !== ""}
    />
  );
};
Address.propTypes = {
  setValue: propTypes.func,
  value: propTypes.string,
  setIsValid: propTypes.func,
};
export default Address;
