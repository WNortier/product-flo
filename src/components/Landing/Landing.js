import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import classes from "./Landing.module.css";
import { Link } from "react-router-dom";

const Home = (props) => {
  return (
    <Container>
      <div className={classes.breadcrumb}>
        <Link to="/landing">Landing</Link>
      </div>
      <Row>
        <Col md={12}>
          <div className={classes.greeting}>
            Greetings {props.user}
            <br />
            Welcome to ProductFlo
          </div>
        </Col>
        <Col md={6}>
          <div className={classes["products-action"]}>
            <i class="fas fa-archive"></i> <Link to="/products">Products</Link>
          </div>
        </Col>
        <Col md={6}>
          <div className={classes["inventory-action"]}>
            <i class="fas fa-cubes"></i>
            <Link to="/landing">Inventory</Link>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
