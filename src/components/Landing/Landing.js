import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import classes from "./Landing.module.css";
import { Link } from "react-router-dom";

const Home = (props) => {
  return (
    <Container>
      <Link className={classes.breadcrumb} to="/landing">
        Landing
      </Link>
      <Row>
        <Col className={classes.home} md={12}>
          <div className={classes.greeting}>
            Good Morning {props.user}
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
            <Link to="/landing">Inventory</Link>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
