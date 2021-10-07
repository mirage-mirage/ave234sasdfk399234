import propTypes from "prop-types";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../../store/authStore";

const LoginCard = ({ registerClickHandler }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const usernameChangeHandler = (event) => {
    setUsername(event.target.value.trim());
  };

  const passwordChangeHandler = (event) => {
    setPassword(event.target.value.trim());
  };

  const onFormSubmit = (event) => {
    event.preventDefault();

    fetch("https://localhost:44329/api/Auth/Login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data === null) {
          setPassword("");
          setUsername("");
          alert("invalid credentials");
        } else {
          dispatch(login({ id: data, isLoggedIn: true }));
        }
      });
  };

  return (
    <div className="card">
      <div className="card-header text-center">
        <h4>Login</h4>
      </div>
      <div className="card-body">
        <form onSubmit={onFormSubmit}>
          <div className="form-floating">
            <input
              type="text"
              className="form-control mb-4"
              placeholder="Username"
              value={username}
              onChange={usernameChangeHandler}
              required
            ></input>
            <label>Username</label>
          </div>
          <div className="form-floating">
            <input
              type="password"
              className="form-control mb-4"
              placeholder="Password"
              value={password}
              onChange={passwordChangeHandler}
              required
            ></input>
            <label>Password</label>
          </div>
          <div className="row justify-content-around">
            <button
              type="button"
              className="btn btn-link col-md-4"
              onClick={registerClickHandler}
            >
              Register
            </button>
            <button
              type="submit"
              className="btn btn-primary float-end col-md-4"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

LoginCard.propTypes = {
  registerClickHandler: propTypes.func,
};

export default LoginCard;
