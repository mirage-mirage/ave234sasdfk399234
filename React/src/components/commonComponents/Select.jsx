import propTypes from "prop-types";
import { useReducer } from "react";
import {
  inputFieldReducerFn,
  ActionType,
} from "../Pages/UserDetails/common-functions";
import SelectInput from "./SelectInputs";

const Select = ({
  value,
  setValue,
  setIsValid,
  errorMessage,
  label,
  id,
  validInputFn,
  options,
  disabled,
}) => {
  const [state, action] = useReducer(inputFieldReducerFn, {
    value: value,
    isValid: value != null,
    isTouched: false,
  });

  const onChangeHandler = (event) => {
    action({ type: ActionType.UpdateValue, value: event.target.value });
    action({
      type: ActionType.UpdateIsValidity,
      validateFn: validInputFn,
    });
  };
  const onBlurHandler = () => {
    action({ type: ActionType.Touched });
    setValue(state.value);
    setIsValid(state.isValid);
  };
  return (
    <SelectInput
      isValid={state.isValid}
      isTouched={state.isTouched}
      value={state.value}
      onBlur={onBlurHandler}
      onChange={onChangeHandler}
      errorMessage={errorMessage}
      label={label}
      id={id}
      disabled={disabled}
    >
      <option value=" ">Select</option>
      {options.map((element) => (
        <option key={element} value={element}>
          {element}
        </option>
      ))}
    </SelectInput>
  );
};
Select.propTypes = {
  setValue: propTypes.func,
  value: propTypes.string,
  setIsValid: propTypes.func,
  errorMessage: propTypes.string,
  label: propTypes.string,
  id: propTypes.any,
  validInputFn: propTypes.func,
  options: propTypes.array,
  disabled: propTypes.bool,
};
export default Select;
