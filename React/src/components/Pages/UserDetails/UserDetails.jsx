import PersonalDetails from "./PersonalDetails";
import BankDetails from "./BankDetails";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import { structureUserDetails } from "./common-functions";
import { useDispatch } from "react-redux";
import {
  updateBankDetails,
  updatePersonalDetails,
} from "../../../store/userSlice";

const UserDetails = () => {
  const bankDetails = useSelector((s) => s.user.bank);
  const personalDetails = useSelector((s) => s.user.personal);

  const dispatch = useDispatch();
  const [hasUserData, setHasUserData] = useState(false);
  const [message, setMessage] = useState("Loading");
  const customerId = useSelector((s) => s.auth.id);
  const [step1Completed, setStep1Completed] = useState(false);
  useEffect(() => {
    hasUserData
      ? false
      : fetch(`https://localhost:44329/api/CustomerDetails/${customerId}`)
          .then((r) => r.json())
          .then((data) => {
            const structuredDetails = structureUserDetails(data);
            dispatch(updateBankDetails(structuredDetails.bank));
            dispatch(updatePersonalDetails(structuredDetails.personal));
            setHasUserData(true);
          })
          .catch((e) => {
            console.log(e);
            setMessage(e.TypeError);
          });
  }, [customerId, step1Completed, hasUserData]);

  return hasUserData ? (
    <div className="container-fluid w-75">
      <div className="row justify-content-around">
        {!step1Completed && (
          <PersonalDetails
            setCompleted={setStep1Completed}
            initialData={personalDetails}
            customerId={customerId}
          ></PersonalDetails>
        )}
      </div>
      {step1Completed && (
        <div className="row justify-content-around">
          <BankDetails
            backToStep1={setStep1Completed}
            initialData={bankDetails}
            customerId={customerId}
            s
          ></BankDetails>
        </div>
      )}
    </div>
  ) : (
    <div>{message}</div>
  );
};

export default UserDetails;
