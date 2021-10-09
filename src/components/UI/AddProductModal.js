import React, { useContext } from "react";
import AuthContext from "../../store/auth-context";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { v4 as uuidv4 } from "uuid";

const AddProductModal = (props) => {
  const ctx = useContext(AuthContext);

  const [productName, setProductName] = useState("");
  const [productNumber, setProductNumber] = useState("");
  const [region, setRegion] = useState("");
  const [family, setFamily] = useState("");
  const [productType, setProductType] = useState("");

  const productNameChangeHandler = (event) => {
    setProductName(event.target.value);
  };
  const productNumberChangeHandler = (event) => {
    setProductNumber(event.target.value);
  };
  const productRegionChangeHandler = (event) => {
    setRegion(event.target.value);
  };
  const productFamilyChangeHandler = (event) => {
    setFamily(event.target.value);
  };
  const productTypeChangeHandler = (event) => {
    setProductType(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    const currentProducts = [...ctx.products];
    const newProduct = {
      id: uuidv4(),
      productName,
      productNumber,
      region,
      family,
      productType,
    };
    currentProducts.push(newProduct);
    ctx.products.push(newProduct);
    props.onAddProduct(currentProducts);
    props.onHideModal();
  };

  return (
    <>
      <Modal show={true} onHide={props.onHideModal}>
        <Modal.Header closeButton>
          <Modal.Title>Add Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={formSubmitHandler}>
            <Form.Group className="mb-3">
              <Form.Label>Product Name</Form.Label>
              <Form.Control
                type="text"
                value={productName}
                placeholder="Enter Product Name"
                onChange={productNameChangeHandler}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Product Number</Form.Label>
              <Form.Control
                type="text"
                value={productNumber}
                placeholder="Enter Product Number"
                onChange={productNumberChangeHandler}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Region</Form.Label>
              <Form.Control
                type="text"
                value={region}
                placeholder="Enter Region"
                onChange={productRegionChangeHandler}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Family</Form.Label>
              <Form.Control
                type="text"
                value={family}
                placeholder="Enter Family"
                onChange={productFamilyChangeHandler}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Type</Form.Label>
              <Form.Control
                type="text"
                value={productType}
                placeholder="Enter Type"
                onChange={productTypeChangeHandler}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.onHideModal}>
            Close
          </Button>
          <Button variant="secondary" onClick={formSubmitHandler}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AddProductModal;
