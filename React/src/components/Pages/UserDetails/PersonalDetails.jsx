import { useState } from "react";
import propTypes from "prop-types";

import Address from "./userDetailFields/UserDetailsStep1/Address";
import ContactNumber from "./userDetailFields/UserDetailsStep1/ContactNumber";
import GuardianName from "./userDetailFields/UserDetailsStep1/GuardianName";
import GuardianType from "./userDetailFields/UserDetailsStep1/GuardianType";
import DateOfBirth from "./userDetailFields/UserDetailsStep1/DateOfBirth";
import Citizenship from "./userDetailFields/UserDetailsStep1/Citizenship";
import Gender from "./userDetailFields/UserDetailsStep1/Gender";
import MaritalStatus from "./userDetailFields/UserDetailsStep1/MaritalStatus";
import Country from "./userDetailFields/UserDetailsStep1/Country";
import State from "./userDetailFields/UserDetailsStep1/States";
import CitizenStatus from "./userDetailFields/UserDetailsStep1/CitizenStatus";
import Name from "./userDetailFields/UserDetailsStep1/Name";
import { useDispatch } from "react-redux";
import { updatePersonalDetails } from "../../../store/userSlice";
import Email from "./userDetailFields/UserDetailsStep1/Email";

const PersonalDetails = ({ setCompleted, initialData, customerId }) => {
  // const initialData = {
  //   address: data.address,
  //   contactNumber: data.contactNo,
  //   guardianName: data.guardianName,
  //   guardianType: data.guardianType,
  //   dateOfBirth: data.dob,
  //   citizenship: data.citizenship,
  //   gender: data.gender,
  //   maritalStatus: data.maritalStatus,
  //   country: data.country,
  //   state: data.state,
  //   citizenStatus: data.citizenStatus,
  //   name: data.name,
  //   email: data.email,
  // };

  const fromFetch = (a) => a != null;

  const dispatch = useDispatch();

  const [guardianName, setGuardianName] = useState(initialData.guardianName);
  const [guardianNameIsValid, setGuardianNameIsValid] = useState(
    fromFetch(initialData.guardianName)
  );

  const [name, setName] = useState(initialData.name);
  const [nameIsValid, setNameIsValid] = useState(fromFetch(initialData.name));

  const [email, setEmail] = useState(initialData.email);
  const [emailIsValid, setEmailIsValid] = useState(
    fromFetch(initialData.email)
  );

  const [guardianType, setGuardianType] = useState(initialData.guardianType);
  const [guardianTypeIsValid, setGuardianTypeIsValid] = useState(
    fromFetch(initialData.guardianType)
  );

  const [address, setAddress] = useState(initialData.address);
  const [addressIsValid, setAddressIsValid] = useState(
    fromFetch(initialData.address)
  );

  const [contactNo, setContactNo] = useState(initialData.contactNo);
  const [contactNoIsValid, setContactNoIsValid] = useState(
    fromFetch(initialData.contactNo)
  );

  const [dob, setDob] = useState(initialData.dob || null);
  const [dobIsValid, setDobIsValid] = useState(fromFetch(initialData.dob));

  const [maritalStatus, setMaritalStatus] = useState(initialData.maritalStatus);
  const [maritalStatusIsValid, setMaritalStatusIsValid] = useState(
    fromFetch(initialData.maritalStatus)
  );

  const [citizenship, setCitizenship] = useState(initialData.citizenship);
  const [citizenshipIsValid, setCitizenshipIsValid] = useState(
    fromFetch(initialData.citizenship)
  );

  const [gender, setGender] = useState(initialData.gender);
  const [genderIsValid, setGenderIsValid] = useState(
    fromFetch(initialData.gender)
  );

  const [country, setCountry] = useState(initialData.country);
  const [countryIsValid, setCountryIsValid] = useState(
    fromFetch(initialData.country)
  );

  const [state, setState] = useState(initialData.state);
  const [stateIsValid, setStateIsValid] = useState(
    fromFetch(initialData.state)
  );

  // eslint-disable-next-line no-unused-vars
  const [citizenStatus, setCitizenStatus] = useState(initialData.citizenStatus);
  // eslint-disable-next-line no-unused-vars
  const [citizenStatusIsValid, setCitizenStatusIsValid] = useState(
    fromFetch(initialData.citizenStatus)
  );

  const isFormValid = () =>
    (guardianNameIsValid &&
      addressIsValid &&
      dobIsValid &&
      guardianTypeIsValid &&
      citizenshipIsValid &&
      genderIsValid &&
      maritalStatusIsValid &&
      countryIsValid &&
      stateIsValid &&
      nameIsValid &&
      emailIsValid &&
      contactNoIsValid) !== false;

  const personalDetailsFormSubmitHandler = (event) => {
    event.preventDefault();
    setCompleted(isFormValid());
    dispatch(
      updatePersonalDetails({
        address: address,
        contactNo: contactNo,
        guardianName: guardianName,
        guardianType: guardianType,
        dob: dob,
        citizenship: citizenship,
        gender: gender,
        maritalStatus: maritalStatus,
        country: country,
        state: state,
        citizenStatus: citizenStatus,
        name: name,
        email: email,
      })
    );
  };

  return (
    <form
      name="personal Detail Form"
      onSubmit={personalDetailsFormSubmitHandler}
    >
      <div className="card m-2">
        <div className="card-header">
          {" "}
          <div className="row justify-content-between">
            <div className="col">Update Details Step 1</div>
            <div className="col">
              Customer Id: <b>{customerId}</b>
            </div>
          </div>
        </div>
        <div className="card-body">
          <div className="card-title">Common Details :-</div>
          <div className="row row-cols-1 row-cols-lg-4 row-cols-md-3 row-cols-sm-2">
            <div className="col-md-6">
              <Name
                value={name}
                setValue={setName}
                setIsValid={setNameIsValid}
              ></Name>
            </div>
            <div className="col">
              <ContactNumber
                value={contactNo}
                setValue={setContactNo}
                setIsValid={setContactNoIsValid}
              />
            </div>
            <div className="col">
              <Email
                value={email}
                setValue={setEmail}
                setIsValid={setEmailIsValid}
              />
            </div>
            <div className="col">
              <Gender
                value={gender}
                setValue={setGender}
                setIsValid={setGenderIsValid}
              />
            </div>
          </div>
          <div className="card-title">Personal Details :-</div>
          <div className="row row-cols-1 row-cols-lg-4 row-cols-md-3 row-cols-sm-2">
            <div className="col">
              <DateOfBirth
                value={dob}
                setValue={setDob}
                setIsValid={setDobIsValid}
              />
            </div>
            <div className="col">
              <CitizenStatus
                value={dob}
                setValue={setCitizenStatus}
                setIsValid={setCitizenStatusIsValid}
              />
            </div>
            <div className="col">
              <Citizenship
                value={citizenship}
                setValue={setCitizenship}
                setIsValid={setCitizenshipIsValid}
              />
            </div>

            <div className="col">
              <MaritalStatus
                value={maritalStatus}
                setValue={setMaritalStatus}
                setIsValid={setMaritalStatusIsValid}
              />
            </div>
          </div>
          <div className="card-title">Address Details :-</div>
          <div className="row">
            <div className="col-md-6">
              <Address
                value={address}
                setValue={setAddress}
                setIsValid={setAddressIsValid}
              />
            </div>
            <div className="col-md-3 col-sm-6">
              <Country
                value={country}
                setValue={setCountry}
                setIsValid={setCountryIsValid}
              ></Country>
            </div>
            <div className="col-md-3 col-sm-6">
              <State
                value={state}
                setValue={setState}
                setIsValid={setStateIsValid}
                countryCode={country}
                disabled={!countryIsValid}
              ></State>
            </div>
          </div>
          <div className="card-title">Guardian Details :-</div>
          <div className="row">
            <div className="col-md-6">
              <GuardianType
                value={guardianType}
                setValue={setGuardianType}
                setIsValid={setGuardianTypeIsValid}
              />
            </div>
            <div className="col-md-6">
              <GuardianName
                value={guardianName}
                setValue={setGuardianName}
                setIsValid={setGuardianNameIsValid}
              ></GuardianName>
            </div>
          </div>
        </div>

        <div className="card-footer">
          <div className="row justify-content-between">
            <div className="col"></div>
            <button
              type="submit"
              className="btn btn-primary col col-sm-2"
              disabled={!isFormValid()}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};
PersonalDetails.propTypes = {
  setCompleted: propTypes.func,
  initialData: propTypes.object,
  customerId: propTypes.string,
};

export default PersonalDetails;
