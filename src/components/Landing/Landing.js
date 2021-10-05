import React, { useContext } from "react";
import AuthContext from "../../store/auth-context";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import classes from "./Landing.module.css";
import { Link } from "react-router-dom";

const Home = (props) => {
  const ctx = useContext(AuthContext);

  return (
    <Container className={classes.home}>
      <Row>
        <Col md={12}>
          <div className={classes.greeting}>
            Good Morning Jaco
            <br />
            Welcome to ProductFlo
          </div>
        </Col>
        <Col md={6}>
          <div className={classes["products-action"]}>
            <Link to="/products">Products</Link>
          </div>
        </Col>
        <Col md={6}>
          <div className={classes["inventory-action"]}>
            <Link to="/inventory">Inventory</Link>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
