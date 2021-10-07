import propTypes from "prop-types";
import Select from "../Select";
import { State as stat } from "country-state-city";

const State = ({ value, setValue, setIsValid, disabled, countryCode }) => {
  const notEmpty = (value) => value !== " " && value != null;

  const State =
    countryCode != null && countryCode !== ""
      ? stat
          .getStatesOfCountry(countryCode.substring(0, 2))
          .map((e) => e.isoCode + "-" + e.name)
      : [];
  return (
    <Select
      value={value}
      setIsValid={setIsValid}
      setValue={setValue}
      id="state"
      errorMessage=" required"
      validInputFn={(value) => notEmpty(value)}
      label="State"
      options={State}
      disabled={disabled}
    />
  );
};

State.propTypes = {
  setValue: propTypes.func,
  value: propTypes.string,
  countryCode: propTypes.string,
  setIsValid: propTypes.func,
  disabled: propTypes.bool,
};
export default State;
