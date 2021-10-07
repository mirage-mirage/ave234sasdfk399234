// import propTypes from "prop-types";
// import { useReducer } from "react";
// import { inputFieldReducerFn, ActionType } from "../common-functions";
// import FormInput from "../../../commonComponents/FormInput";
import TextInputField from "../../../commonComponents/TextInputField";

// const TextInputField = ({
//   value,
//   setValue,
//   setIsValid,
//   errorMessage,
//   label,
//   placeholder,
//   id,
//   validInputFn,
// }) => {
//   const [state, action] = useReducer(inputFieldReducerFn, {
//     value: value,
//     isValid: value != null,
//     isTouched: false,
//   });

//   const onChangeHandler = (event) => {
//     action({ type: ActionType.UpdateValue, value: event.target.value });
//     action({
//       type: ActionType.UpdateIsValidity,
//       validateFn: validInputFn,
//     });
//   };
//   const onBlurHandler = () => {
//     action({ type: ActionType.Touched });
//     setValue(state.value);
//     setIsValid(state.isValid);
//   };
//   return (
//     <FormInput
//       isValid={state.isValid}
//       isTouched={state.isTouched}
//       value={state.value}
//       onBlur={onBlurHandler}
//       onChange={onChangeHandler}
//       errorMessage={errorMessage}
//       label={label}
//       placeholder={placeholder}
//       id={id}
//       type="text"
//     />
//   );
// };
// TextInputField.propTypes = {
//   setValue: propTypes.func,
//   value: propTypes.string,
//   setIsValid: propTypes.func,
//   errorMessage: propTypes.string,
//   placeholder: propTypes.string,
//   label: propTypes.string,
//   id: propTypes.any,
//   validInputFn: propTypes.func,
// };
export default TextInputField;
