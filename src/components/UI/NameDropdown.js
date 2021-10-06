import AuthContext from "../../store/auth-context";
import React, { useContext } from "react";
import classes from "./Dropdown.module.css";
const NameDropdown = (props) => {
  const ctx = useContext(AuthContext);

  const dropdownChangeHandler = (event) => {
    const products = [...ctx.products];

    if (event.target.value === "All Products") {
      props.onFilterProducts(products);
    } else {
      const filtered = products.filter(function (p) {
        return p.productName === event.target.value;
      });
      props.onFilterProducts(filtered);
    }
  };

  return (
    <form className={classes.dropdown}>
      <label for=""></label>
      <select onChange={dropdownChangeHandler} name="filter" id="filter">
        <option value="All Products">All Products</option>;
        {ctx.products.map((item) => {
          return <option value={item.productName}>{item.productName}</option>;
        })}
      </select>
    </form>
  );
};

export default NameDropdown;
