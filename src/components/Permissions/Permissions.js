import classes from "./Permissions.module.css";
import InputGroup from "react-bootstrap/InputGroup";
import React from "react";

const Permissions = (props) => {
  const checkboxHandler = (event) => {
    if (event.target.checked === true && event.target.name === "add") {
      props.onSetAddingRights(true);
      localStorage.setItem("adding-rights", true);
    } else if (event.target.checked === false && event.target.name === "add") {
      props.onSetAddingRights(false);
      localStorage.setItem("adding-rights", false);
    }
    if (event.target.checked === true && event.target.name === "edit") {
      props.onSetEditingRights(true);
      localStorage.setItem("editing-rights", true);
    } else if (event.target.checked === false && event.target.name === "edit") {
      localStorage.setItem("editing-rights", false);
      props.onSetEditingRights(false);
    }
  };

  return (
    <div className={classes.checkboxes}>
      <InputGroup className="mb-3">
        <InputGroup.Checkbox
          value="add"
          name="add"
          onChange={checkboxHandler}
          aria-label="Checkbox for following text input"
        />
        <label>Toggle Adding Rights</label>
      </InputGroup>
      <InputGroup className="mb-3">
        <InputGroup.Checkbox
          value="edit"
          name="edit"
          onChange={checkboxHandler}
          aria-label="Checkbox for following text input"
        />
        <label>Toggle Editing Rights</label>
      </InputGroup>
    </div>
  );
};

export default Permissions;
