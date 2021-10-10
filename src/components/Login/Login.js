import { React, useState, useContext } from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import classes from "./Login.module.css";
import { useHistory } from "react-router-dom";
import AuthContext from "../../store/auth-context";

const Login = (props) => {
  const history = useHistory();
  const ctx = useContext(AuthContext);

  const [enteredName, setEnteredName] = useState("");
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  const [enteredPassword, setEnteredPassword] = useState("");
  const [enteredPasswordTouched, setEnteredPasswordTouched] = useState(false);

  const enteredNameIsValid = enteredName.trim() !== "";
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

  const enteredPasswordIsValid =
    enteredPassword !== "" && enteredPassword.length >= 5;
  const enteredPasswordIsInvalid =
    !enteredPasswordIsValid && enteredPasswordTouched;

  let formIsValid = false;

  if (enteredNameIsValid && enteredPasswordIsValid) {
    formIsValid = true;
  }

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (enteredName === "admin" && enteredPassword === "admin") {
      props.onSetIsAdmin(true);
    }
    setEnteredName("");
    setEnteredNameTouched(false);
    setEnteredPassword("");
    setEnteredPasswordTouched(false);
    props.onLogin(true);
    props.onSetUsername(enteredName);
    localStorage.setItem("isLoggedIn", true);
    history.push("/landing");
  };

  const usernameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);
  };

  const nameInputBlurHandler = () => {
    setEnteredNameTouched(true);
  };

  const passwordInputBlurHandler = () => {
    setEnteredPasswordTouched(true);
  };

  return (
    <Container>
      <Form className={classes.login} onSubmit={formSubmitHandler}>
        <Form.Group className="mb-3">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            value={enteredName}
            placeholder="Enter Username"
            onChange={usernameChangeHandler}
            onBlur={nameInputBlurHandler}
          />
          {nameInputIsInvalid && (
            <p className={classes.error}>Name must not be empty.</p>
          )}
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={enteredPassword}
            placeholder="Enter Password"
            onChange={passwordChangeHandler}
            onBlur={passwordInputBlurHandler}
          />
          {enteredPasswordIsInvalid && (
            <p className={classes.error}>Password must not be empty.</p>
          )}
        </Form.Group>
        <Form.Group className="mt-5">
          {/* {formIsValid ? (
          <button onClick={formSubmitHandler}>Login</button>
        ) : (
          <button disabled onClick={formSubmitHandler}>
            Login
          </button>
        )} */}
          <button disabled={!formIsValid} onClick={formSubmitHandler}>
            Login
          </button>
        </Form.Group>
      </Form>
    </Container>
  );
};

export default Login;
