import propTypes from "prop-types";
import { useState } from "react";

const RegisterCard = ({ loginClickHandler }) => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [usernameIsValid, setUsernameIsValid] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cPassword, setCPassword] = useState("");

  const onUserBlurHandler = () => {
    fetch(`https://localhost:44329/api/Auth/ValidUsername/${username}`)
      .then((response) => response.json())
      .then((data) => setUsernameIsValid(data ? "bg-success" : "bg-danger"));
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    fetch("https://localhost:44329/api/Auth/AddUser", {
      method: "POST",
      body: JSON.stringify({
        username: username,
        password: password,
        email: email,
        name: name,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) =>
        alert(`Registered Successfully!!
--------------------------
| Customer Id is ${data} |
--------------------------
Login for more instruction.`)
      )
      .then(() => loginClickHandler());
  };

  return (
    <div className="card">
      <div className="card-header text-center">
        <h4>Registration</h4>
      </div>
      <div className="card-body">
        {
          //Form Input fields
        }
        <form onSubmit={onFormSubmit}>
          <div className="form-floating mt-3">
            <input
              type="text"
              className="form-control mb-3"
              placeholder="Name"
              id="i_name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              required
            />
            <label htmlFor="i_name">Name</label>
          </div>
          <div className="form-floating">
            <input
              type="text"
              className={`form-control mb-3 ${usernameIsValid} bg-opacity-10`}
              placeholder="UserName"
              id="i_userName"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
              onBlur={onUserBlurHandler}
              required
            />
            <label htmlFor="i_userName">Username</label>
          </div>
          <div className="form-floating">
            <input
              type="email"
              className="form-control mb-3"
              placeholder="e-mail"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />
            <label>e-mail</label>
          </div>
          <div className="input-group justify-content-around">
            <div className="form-floating">
              <input
                type="password"
                className={`form-control mb-3 ${
                  password != cPassword && "bg-danger"
                } bg-opacity-10`}
                placeholder="Password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                required
              />
              <label>password</label>
            </div>
            <div className="form-floating">
              <input
                type="password"
                className={`form-control mb-3 ${
                  password != cPassword && "bg-danger"
                } bg-opacity-10`}
                placeholder="Confirm Password"
                value={cPassword}
                onChange={(event) => setCPassword(event.target.value)}
                required
              />
              <label>Confirm Password</label>
            </div>
          </div>

          <div className="row justify-content-around">
            <button
              type="button"
              className="btn btn-link col-md-3"
              onClick={loginClickHandler}
            >
              Login
            </button>
            <button
              type="submit"
              className="btn btn-primary float-end col-md-3"
              disabled={
                usernameIsValid == "bg-danger" || password !== cPassword
              }
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

RegisterCard.propTypes = {
  loginClickHandler: propTypes.func,
};

export default RegisterCard;
