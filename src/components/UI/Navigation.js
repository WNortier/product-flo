import React from "react";
import classes from "./Navigation.module.css";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { Link, useHistory } from "react-router-dom";
const Navigation = (props) => {
  const history = useHistory();

  const logoutHandler = () => {
    localStorage.clear();
    history.push("/");
    props.onLogOut(false);
  };

  return (
    <Navbar className={classes.navbar}>
      <Container>
        <Link className={classes.brand} to="/">
          ProductFlo <i class="fas fa-wind"></i>
        </Link>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            {props.isLoggedIn && (
              <button onClick={logoutHandler}>Logout</button>
            )}
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
