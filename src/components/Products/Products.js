import React from "react";
import { useState } from "react";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import classes from "./Products.module.css";
import UIModal from "../UI/UIModal";
import { Route } from "react-router-dom";
import Link from "react";

const Products = (props) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState([]);

  const hideModalHandler = () => {
    setShowModal(false);
  };

  const showModalHandler = (id) => {
    console.log(id);
    setSelectedItem(id);
    setShowModal(true);
  };

  const setSelectedItem = (id) => {
    const selectedProduct = props.products.filter((item) => {
      return item.id === id;
    });
    setSelectedProduct(selectedProduct);
  };

  return (
    <Container>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Product Name</th>
            <th>Product Number</th>
            <th>Region</th>
            <th>Family</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          {props.products.map(function (item) {
            return (
              <tr
                className={classes.item}
                onClick={() => {
                  showModalHandler(item.id);
                }}
              >
                <td>{item.id}</td>
                <td>{item.productName}</td>
                <td>{item.productNumber}</td>
                <td>{item.region}</td>
                <td>{item.family}</td>
                <td>{item.type}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>

      {showModal && (
        <UIModal
          selectedProduct={selectedProduct}
          onHideModal={hideModalHandler}
        ></UIModal>
      )}
    </Container>
  );
};

export default Products;
