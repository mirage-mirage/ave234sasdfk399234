import propTypes from "prop-types";
import { useReducer } from "react";
import { inputFieldReducerFn, ActionType } from "./common-functions";
import FormInput from "./FormInput";

const TextInputField = ({
  value,
  setValue,
  setIsValid,
  errorMessage,
  label,
  placeholder,
  id,
  validInputFn,
  type,
  max,
  min,
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
    <FormInput
      isValid={state.isValid}
      isTouched={state.isTouched}
      value={state.value}
      onBlur={onBlurHandler}
      onChange={onChangeHandler}
      errorMessage={errorMessage}
      label={label}
      placeholder={placeholder}
      id={id}
      max={max}
      min={min}
      type={type || "text"}
    />
  );
};
TextInputField.propTypes = {
  setValue: propTypes.func,
  value: propTypes.string,
  setIsValid: propTypes.func,
  errorMessage: propTypes.string,
  placeholder: propTypes.string,
  label: propTypes.string,
  type: propTypes.string,
  id: propTypes.any,
  max: propTypes.any,
  min: propTypes.any,
  validInputFn: propTypes.func,
};
export default TextInputField;
