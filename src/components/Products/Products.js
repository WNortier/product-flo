import React, { useContext } from "react";
import AuthContext from "../../store/auth-context";
import { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import classes from "./Products.module.css";
import UIModal from "../UI/UIModal";
import EditModal from "../UI/EditModal";

const Products = (props) => {
  const ctx = useContext(AuthContext);

  const [showUIModal, setShowUIModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState([]);
  const [editedProduct, setEditedProduct] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(ctx.products);
  }, []);

  const hideUIModalHandler = () => {
    setShowUIModal(false);
  };

  const showUIModalHandler = (id) => {
    setSelectedItem(id);
    setShowUIModal(true);
  };

  const hideEditModalHandler = () => {
    setShowEditModal(false);
  };

  const showEditModalHandler = (id) => {
    setSelectedItem(id);
    setShowEditModal(true);
  };

  const setSelectedItem = (id) => {
    const selectedProduct = products.filter((item) => {
      return item.id === id;
    });
    setSelectedProduct(selectedProduct);
  };

  const removeItemHandler = (id) => {
    const remainingProducts = products.filter((item) => {
      return item.id !== id;
    });
    setProducts(remainingProducts);
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
          {products.map(function (item) {
            return (
              <tr className={classes.item}>
                <td>{item.id}</td>
                <td>{item.productName}</td>
                <td>{item.productNumber}</td>
                <td>{item.region}</td>
                <td>{item.family}</td>
                <td>{item.type}</td>
                <td>
                  <button
                    onClick={() => {
                      showUIModalHandler(item.id);
                    }}
                  >
                    View
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => {
                      showEditModalHandler(item.id);
                    }}
                  >
                    Edit
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => {
                      removeItemHandler(item.id);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>

      {showUIModal && (
        <UIModal
          selectedProduct={selectedProduct}
          onHideModal={hideUIModalHandler}
        ></UIModal>
      )}
      {showEditModal && (
        <EditModal
          selectedProduct={selectedProduct}
          onHideModal={hideEditModalHandler}
          onSaveProductEdit={setProducts}
        ></EditModal>
      )}
    </Container>
  );
};

export default Products;
