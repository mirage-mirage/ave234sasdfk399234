import propTypes from "prop-types";
import Select from "../Select";
import { Country as country } from "country-state-city";

const Country = ({ value, setValue, setIsValid }) => {
  const notEmpty = (value) => value !== " ";

  const countries = country
    .getAllCountries()
    .map((e) => e.isoCode + "-" + e.name);

  return (
    <Select
      value={value}
      setIsValid={setIsValid}
      setValue={setValue}
      id="country"
      errorMessage=" required"
      validInputFn={(value) => notEmpty(value)}
      label="Country"
      options={countries}
    />
  );
};

Country.propTypes = {
  setValue: propTypes.func,
  value: propTypes.string,
  setIsValid: propTypes.func,
};
export default Country;
