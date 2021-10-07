import { useState } from "react";
import propTypes from "prop-types";

import AccountType from "./userDetailFields/UserDetilsStep2/AccountType";
import RegistrationDate from "./userDetailFields/UserDetilsStep2/RegistrationDate";
import BranchName from "./userDetailFields/UserDetilsStep2/BranchName";
import InitialDepositAmount from "./userDetailFields/UserDetilsStep2/InitialDepositAmount";
import IdProofType from "./userDetailFields/UserDetilsStep2/IdProofType";
import IdDocumentNo from "./userDetailFields/UserDetilsStep2/IdDocumentNo";
import RefAccHolderName from "./userDetailFields/UserDetilsStep2/RefAccHolderName";
import RefAccHolderAccNumber from "./userDetailFields/UserDetilsStep2/RefAccHolderAccNumber";
import RefAccHolderAddress from "./userDetailFields/UserDetilsStep2/ReffAccHolderAddress";
import { useDispatch } from "react-redux";
import { updateBankDetails } from "../../../store/userSlice";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import ReadOnlyField from "./userDetailFields/ReadOnly";

const BankDetails = ({ backToStep1, initialData, customerId }) => {
  // const initialData = {
  //   accountType: data.accountType,
  //   branchName: data.branchName,
  //   // customerId: data.customerId,
  //   idDocumentNo: data.idDocumentNo,
  //   idProofType: data.idProofType,
  //   initialDepositAmount: data.initialDepositAmount,
  //   isProfileComplete: data.isProfileComplete,
  //   refAccHolderAccNo: data.refAccHolderAccNo,
  //   refAccHolderAddress: data.refAccHolderAddress,
  //   refAccHolderName: data.refAccHolderName,
  //   registrationDate: data.registrationDate,
  // };
  const fromFetch = (a) => a !== null;
  const id = useSelector((a) => a.auth.id);
  const dispatch = useDispatch();
  const history = useHistory();
  const isProfileComplete = initialData.isProfileComplete;

  const [accountType, setAccountType] = useState(initialData.accountType);
  const accountNumber = initialData.accountNumber;
  const [accountTypeIsValid, setAccountTypeIsValid] = useState(
    fromFetch(initialData.accountType)
  );

  const [branchName, setBranchName] = useState(initialData.branchName);
  const [branchNameIsValid, setBranchNameIsValid] = useState(
    fromFetch(initialData.branchName)
  );

  const [regDate, setRegDate] = useState(
    new Date(initialData.registrationDate) || new Date()
  );
  // eslint-disable-next-line no-unused-vars
  const [regDateIsValid, setRegDateIsValid] = useState(
    fromFetch(initialData.refAccHolderName)
  );

  const [initialDepAmount, setInitialDepAmount] = useState(
    initialData.initialDepositAmount
  );
  const [initialDepAmountIsValid, setInitialDepAmountIsValid] = useState(
    fromFetch(initialData.initialDepositAmount)
  );

  const [idProofType, setIdProofType] = useState(initialData.idProofType);
  const [idProofTypeIsValid, setIdProofTypeIsValid] = useState(
    fromFetch(initialData.idProofType)
  );

  const [idDocumentNo, setIdDocumentNo] = useState(initialData.idDocumentNo);
  const [idDocumentNoIsValid, setIdDocumentNoIsValid] = useState(
    fromFetch(initialData.IdDocumentNo)
  );

  const [refAccHolderName, setRefAccHolderName] = useState(
    initialData.refAccHolderName
  );
  const [refAccHolderNameIsValid, setRefAccHolderNameIsValid] = useState(
    fromFetch(initialData.refAccHolderName)
  );

  const [refAccHolderAddress, setRefAccHolderAddress] = useState(
    initialData.refAccHolderAddress
  );
  const [refAccHolderAddressIsValid, setRefAccHolderAddressIsValid] = useState(
    fromFetch(initialData.refAccHolderAddress)
  );

  const [refAccHolderAccNumber, setRefAccHolderAccNumber] = useState(
    initialData.refAccHolderAccNo
  );
  const [refAccHolderAccNumberIsValid, setRefAccHolderAccNumberIsValid] =
    useState(fromFetch(initialData.refAccHolderAccNo));

  const isFormValid = () =>
    accountTypeIsValid &&
    // regDateIsValid &&
    branchNameIsValid &&
    idProofTypeIsValid &&
    idDocumentNoIsValid &&
    refAccHolderNameIsValid &&
    refAccHolderAddressIsValid &&
    refAccHolderAccNumberIsValid &&
    initialDepAmountIsValid !== false;

  const formSubmitHandler = (event) => {
    event.preventDefault();
    const bankData = {
      accountType: accountType,
      branchName: branchName,
      idDocumentNo: idDocumentNo,
      idProofType: idProofType,
      initialDepositAmount: initialDepAmount,
      isProfileComplete: true,
      refAccHolderAccNo: refAccHolderAccNumber,
      refAccHolderAddress: refAccHolderAddress,
      refAccHolderName: refAccHolderName,
      registrationDate: regDate,
      accountNumber: accountNumber,
    };

    dispatch(updateBankDetails(bankData));
    dispatch({ type: "sendUserData", payload: id });
    alert("Details Updated!!");
    history.push("/");
  };

  const submitButton = (
    <button
      type="submit"
      className="btn btn-primary col col-sm-2"
      disabled={!isFormValid()}
    >
      Finish
    </button>
  );

  return (
    <form name="Bank Detail Form" onSubmit={formSubmitHandler}>
      <div className="card m-2">
        <div className="card-header">
          <div className="row justify-content-between">
            <div className="col">Update Details Step 2</div>
            <div className="col">
              Customer Id: <b>{customerId}</b>
            </div>
          </div>
        </div>
        <div className="card-body">
          <div className="card-title">Bank Details :-</div>
          <div className="row row-cols-1 row-cols-lg-4 row-cols-md-2 row-cols-sm-1">
            <div className="col">
              {isProfileComplete && (
                <ReadOnlyField value={accountType} label="Account Type" />
              )}
              {!isProfileComplete && (
                <AccountType
                  value={accountType}
                  setValue={setAccountType}
                  setIsValid={setAccountTypeIsValid}
                ></AccountType>
              )}
            </div>
            <div className="col">
              <RegistrationDate
                value={regDate}
                setValue={setRegDate}
                setIsValid={setRegDateIsValid}
              />
            </div>
            <div className="col">
              <BranchName
                value={branchName}
                setValue={setBranchName}
                setIsValid={setBranchNameIsValid}
              />
            </div>
            {!isProfileComplete && (
              <div className="col">
                <InitialDepositAmount
                  value={initialDepAmount}
                  setValue={setInitialDepAmount}
                  setIsValid={setInitialDepAmountIsValid}
                  accountType={accountType}
                />
              </div>
            )}
            {isProfileComplete && (
              <ReadOnlyField value={accountNumber} label="Account Number" />
            )}
          </div>
          <div className="card-title">ID Details :-</div>
          <div className="row row-cols-1 row-cols-md-2 row-cols-sm-1">
            <div className="col">
              <IdProofType
                value={idProofType}
                setValue={setIdProofType}
                setIsValid={setIdProofTypeIsValid}
              />
            </div>
            <div className="col">
              <IdDocumentNo
                value={idDocumentNo}
                setValue={setIdDocumentNo}
                setIsValid={setIdDocumentNoIsValid}
              />
            </div>
          </div>
          <div className="card-title">Reference Details :-</div>
          <div className="row row-cols-1 row-cols-lg-2">
            <div className="col">
              <RefAccHolderName
                value={refAccHolderName}
                setValue={setRefAccHolderName}
                setIsValid={setRefAccHolderNameIsValid}
              />
            </div>
            <div className="col">
              <RefAccHolderAccNumber
                value={refAccHolderAccNumber}
                setValue={setRefAccHolderAccNumber}
                setIsValid={setRefAccHolderAccNumberIsValid}
              />
            </div>
          </div>

          <div className="row">
            <div className="col">
              <RefAccHolderAddress
                value={refAccHolderAddress}
                setValue={setRefAccHolderAddress}
                setIsValid={setRefAccHolderAddressIsValid}
              />
            </div>
          </div>
        </div>
        <div className="card-footer">
          <div className="row justify-content-between">
            <button
              className="btn col col-sm-2 btn-secondary"
              onClick={() => {
                backToStep1(false);
              }}
            >
              {"Back"}
            </button>
            {submitButton}
          </div>
        </div>
      </div>
    </form>
  );
};

BankDetails.propTypes = {
  backToStep1: propTypes.func,
  initialData: propTypes.object,
  customerId: propTypes.string,
};
export default BankDetails;
