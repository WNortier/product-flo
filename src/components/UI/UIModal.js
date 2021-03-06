import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function UIModal(props) {
  return (
    <>
      <Modal show={true} onHide={props.onHideModal}>
        <Modal.Header closeButton>
          <Modal.Title>Product details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ul>
            <li>{props.selectedProduct[0].productName}</li>
            <li>{props.selectedProduct[0].productNumber}</li>
            <li>{props.selectedProduct[0].region}</li>
            <li>{props.selectedProduct[0].family}</li>
            <li>{props.selectedProduct[0].type}</li>
          </ul>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.onHideModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default UIModal;
