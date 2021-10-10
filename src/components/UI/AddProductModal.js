import React, { useContext } from "react";
import AuthContext from "../../store/auth-context";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { v4 as uuidv4 } from "uuid";
import classes from "./AddProductModal.module.css";

const AddProductModal = (props) => {
  const ctx = useContext(AuthContext);

  const isEmpty = (value) => value.trim() === "";

  const [productName, setProductName] = useState("");
  const [productNumber, setProductNumber] = useState("");
  const [region, setRegion] = useState("");
  const [family, setFamily] = useState("");
  const [productType, setProductType] = useState("");
  const [formInputsValidy, setFormInputsValidity] = useState({
    name: true,
    number: true,
    region: true,
    family: true,
    type: true,
  });

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
    const enteredNameIsValid = !isEmpty(productName);
    const enteredNumberIsValid = !isEmpty(productNumber);
    const enteredRegionIsValid = !isEmpty(region);
    const enteredFamilyIsValid = !isEmpty(family);
    const enteredTypeIsValid = !isEmpty(productType);

    setFormInputsValidity({
      name: enteredNameIsValid,
      number: enteredNumberIsValid,
      region: enteredRegionIsValid,
      family: enteredFamilyIsValid,
      type: enteredTypeIsValid,
    });

    const formIsValid =
      enteredNameIsValid &&
      enteredNumberIsValid &&
      enteredRegionIsValid &&
      enteredFamilyIsValid &&
      enteredTypeIsValid;

    if (formIsValid) {
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
    } else {
      return;
    }
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
                className={!formInputsValidy.name ? classes.invalid : ""}
              />
            </Form.Group>
            {!formInputsValidy.name && (
              <p className={classes.error}>Please enter a valid product name</p>
            )}
            <Form.Group className="mb-3">
              <Form.Label>Product Number</Form.Label>
              <Form.Control
                type="text"
                value={productNumber}
                placeholder="Enter Product Number"
                onChange={productNumberChangeHandler}
                className={!formInputsValidy.number ? classes.invalid : ""}
              />
            </Form.Group>
            {!formInputsValidy.number && (
              <p className={classes.error}>
                Please enter a valid product number
              </p>
            )}
            <Form.Group className="mb-3">
              <Form.Label>Region</Form.Label>
              <Form.Control
                type="text"
                value={region}
                placeholder="Enter Region"
                onChange={productRegionChangeHandler}
                className={!formInputsValidy.region ? classes.invalid : ""}
              />
            </Form.Group>
            {!formInputsValidy.region && (
              <p className={classes.error}>Please enter a valid region</p>
            )}
            <Form.Group className="mb-3">
              <Form.Label>Family</Form.Label>
              <Form.Control
                type="text"
                value={family}
                placeholder="Enter Family"
                onChange={productFamilyChangeHandler}
                className={!formInputsValidy.family ? classes.invalid : ""}
              />
            </Form.Group>
            {!formInputsValidy.family && (
              <p className={classes.error}>Please enter a valid family</p>
            )}

            <Form.Group className="mb-3">
              <Form.Label>Type</Form.Label>
              <Form.Control
                type="text"
                value={productType}
                placeholder="Enter Type"
                onChange={productTypeChangeHandler}
                className={!formInputsValidy.type ? classes.invalid : ""}
              />
            </Form.Group>
            {!formInputsValidy.type && (
              <p className={classes.error}>Please enter a valid product type</p>
            )}
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
