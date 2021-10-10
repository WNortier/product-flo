import React from "react";
import classes from "./Navigation.module.css";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { useHistory, NavLink } from "react-router-dom";

const Navigation = (props) => {
  const history = useHistory();

  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn");
    history.push("/");
    props.onLogOut(false);
    props.onSetIsAdmin(false);
  };

  return (
    <Navbar className={classes.navbar}>
      <Container>
        <div className={classes.brand}>
          ProductFlo <i class="fas fa-wind"></i>
        </div>
        {props.isLoggedIn && (
          <NavLink
            activeClassName={classes.active}
            className={classes.item}
            to="/landing"
          >
            Landing
          </NavLink>
        )}
        {props.isLoggedIn && (
          <NavLink
            activeClassName={classes.active}
            className={classes.item}
            to="/products"
          >
            Products
          </NavLink>
        )}
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
