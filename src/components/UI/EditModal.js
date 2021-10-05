import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function EditModal(props) {
  return (
    <>
      <Modal show={true} onHide={props.onHideModal}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>This modal is for editing</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.onHideModal}>
            Close
          </Button>
          <Button variant="primary" onClick={props.onHideModal}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default UIModal;
