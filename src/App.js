import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./components/UI/Navigation";
import { useState } from "react";
import Landing from "./components/Landing/Landing";
import classes from "./App.module.css";
import { Route, Redirect } from "react-router-dom";
import Products from "./components/Products/Products";
import Login from "./components/Login/Login";
import { v4 as uuidv4 } from "uuid";
import AuthContext from "./store/auth-context";
import { useContext } from "react";

const products = [
  {
    id: uuidv4(),
    productName: "Barcode Label",
    productNumber: "T33-317",
    region: "",
    family: "Label",
    type: "Finished Good",
  },
  {
    id: uuidv4(),
    productName: "15MM Clear Retail Security Seals",
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
    family: "Label",
    type: "Finished Good",
  },
  {
    id: uuidv4(),
    productName: "17MM Clear - Retail - Security Seals",
    productNumber: "M-PAK-0397",
    region: "",
    family: "Seal",
    type: "Finished Good",
  },
  {
    id: uuidv4(),
    productName: "17MM Clear - Retail - Security Seals",
    productNumber: "M-PAK-0397",
    region: "",
    family: "Seal",
    type: "Finished Good",
  },
  {
    id: uuidv4(),
    productName: "Barcode Sticker",
    productNumber: "M-LAB-0035",
    region: "",
    family: "Box",
    type: "Finished Good",
  },
];

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const ctx = useContext(AuthContext);

  return (
    <div className={classes.landing}>
      <AuthContext.Provider
        value={{
          products: products,
          username: "",
        }}
      >
        <Navigation isLoggedIn={isLoggedIn}></Navigation>
        <Route path="/" exact>
          <Login onLogin={setIsLoggedIn}></Login>
          {/* <Redirect to="/landing"></Redirect> */}
        </Route>
        {isLoggedIn && (
          <Route path="/landing">
            <Landing></Landing>
          </Route>
        )}
        {isLoggedIn && (
          <Route path="/products">
            <Products products={products}></Products>
          </Route>
        )}
      </AuthContext.Provider>
    </div>
  );
}

export default App;
