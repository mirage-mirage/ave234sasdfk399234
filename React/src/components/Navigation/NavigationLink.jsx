import propTypes from "prop-types";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const NavigationLink = ({ to, name, isDisabled }) => {
  const [styleClass, setStyleClass] = useState("nav-link");
  useEffect(() => {
    isDisabled ? setStyleClass(styleClass + " disabled") : null;
  });

  return (
    <li className="nav-item">
      <Link className={styleClass} aria-current="page" to={to}>
        {name}
      </Link>
    </li>
  );
};
NavigationLink.propTypes = {
  to: propTypes.string,
  name: propTypes.string,
  isDisabled: propTypes.bool,
};
export default NavigationLink;
