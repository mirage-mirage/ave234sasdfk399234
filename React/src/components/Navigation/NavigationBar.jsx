import { Fragment } from "react";
import { Link } from "react-router-dom";
import NavigationLink from "./NavigationLink";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
const NavigationBar = () => {
  const isLoggedIn = useSelector((a) => a.auth.isLoggedIn);
  const dispatch = useDispatch();
  const history = useHistory();

  const navlinkLogin = [
    {
      name: "Home",
      to: "/",
    },
    {
      name: "About",
      to: "/About",
    },
    {
      name: "UserDetails",
      to: "/UserDetails",
    },
  ];
  const navlink = [
    {
      name: "Home",
      to: "/",
    },
    {
      name: "About",
      to: "/About",
    },
  ];
  const activeNavLink = isLoggedIn ? navlinkLogin : navlink;
  return (
    <Fragment>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="#">
            B-M-S
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              {activeNavLink.map((element) => (
                <NavigationLink
                  key={element.name}
                  name={element.name}
                  to={element.to}
                  isDisabled={false}
                />
              ))}
            </ul>
          </div>
          {isLoggedIn && (
            <button
              className="btn btn-secondary"
              onClick={() => {
                dispatch({ type: "logout" });
                history.push("/");
              }}
            >
              Logout
            </button>
          )}
        </div>
      </nav>
    </Fragment>
  );
};

export default NavigationBar;
