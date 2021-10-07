/* eslint-disable no-unused-vars */
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useState } from "react/cjs/react.development";
import {
  updatePersonalDetails,
  updateBankDetails,
} from "../../../store/userSlice";
import { structureUserDetails } from "../../commonComponents/common-functions";

const Home = () => {
  // eslint-disable-next-line no-unused-vars
  const [message, setMessage] = useState("Hover on the Image");
  const dispatch = useDispatch();
  const customerId = useSelector((a) => a.auth.id);
  const isProfileComplete = useSelector((a) => a.user.bank.isProfileComplete);
  const [bg, setBg] = useState("Hover on the Image");
  const mouseOutMessage = "Hover on the Image";

  useEffect(() => {
    if (isProfileComplete == false || isProfileComplete == null)
      fetch(`https://localhost:44329/api/CustomerDetails/${customerId}`)
        .then((r) => r.json())
        .then((data) => {
          const structuredDetails = structureUserDetails(data);
          dispatch(updateBankDetails(structuredDetails.bank));
          dispatch(updatePersonalDetails(structuredDetails.personal));
        });
  }, []);
  return (
    <div className="container ">
      <div className="row justify-content-around">
        <div
          className={` col col-lg-6 alert bg-${bg} mt-4 w-50 bg-opacity-100 text-center`}
        >
          <h4>{message}</h4>
        </div>
      </div>
      <div className="row justify-content-between mt-3">
        <div className=" col col-lg-5">
          <Link to="/UserDetails">
            <button
              className="btn "
              onMouseEnter={() => {
                setMessage("Update Details!");
                setBg("info");
              }}
              onMouseLeave={() => {
                setMessage(mouseOutMessage);
                setBg("");
              }}
            >
              <img
                width="100%"
                alt="user details"
                src="https://image.freepik.com/free-vector/competent-resume-writing-professional-cv-constructor-online-job-application-profile-creation-african-american-woman-filling-up-digital-form-concept-illustration_335657-2053.jpg"
              ></img>
            </button>
          </Link>
        </div>
        {isProfileComplete && (
          <div className="col col-lg-5">
            <Link to="/ApplyLoan">
              <button
                className="btn"
                onMouseEnter={() => {
                  setMessage("Click to Apply Loan!");
                  setBg("warning");
                }}
                onMouseLeave={() => {
                  setMessage(mouseOutMessage);
                  setBg("");
                }}
              >
                <img
                  alt="Apply Loan"
                  width="100%"
                  src="https://image.freepik.com/free-vector/wage-subsidy-business-employees-abstract-concept-vector-illustration-small-medium-sized-business-support-keep-employees-payroll-covid19-crisis-layoff-unemployment-abstract-metaphor_335657-2934.jpg"
                ></img>
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};
export default Home;
