import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./components/UI/Navigation";
import Landing from "./components/Landing/Landing";
import classes from "./App.module.css";
import { Route, Redirect } from "react-router-dom";
import Products from "./components/Products/Products";
import { v4 as uuidv4 } from "uuid";
import AuthContext from "./store/auth-context";

const products = [
  {
    id: uuidv4(),
    productName: "Security Seals",
    productNumber: "M-PAK-0239-05",
    region: "",
    family: "Seal",
    type: "Finished Good",
  },
  {
    id: uuidv4(),
    productName: "Barcode Label",
    productNumber: "T33-317",
    region: "",
    family: "Seal",
    type: "Finished Good",
  },
  {
    id: uuidv4(),
    productName: "Barcode Label",
    productNumber: "T33-317",
    region: "",
    family: "Label",
    type: "Finished Good",
  },
];

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className={classes.landing}>
      <AuthContext.Provider
        value={{
          products: products,
        }}
      >
        <Navigation></Navigation>
        <Route path="/" exact>
          <Redirect to="/landing"></Redirect>
        </Route>
        <Route path="/landing">
          <Landing></Landing>
        </Route>
        <Route path="/products">
          <Products products={products}></Products>
        </Route>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
