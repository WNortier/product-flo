import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";
import Navigation from "./components/UI/Navigation";
import { useState } from "react";
import Landing from "./components/Landing/Landing";
import classes from "./App.module.css";
import { Route } from "react-router-dom";
import Products from "./components/Products/Products";
import Login from "./components/Login/Login";
import Permissions from "./components/Permissions/Permissions";
import { v4 as uuidv4 } from "uuid";
import AuthContext from "./store/auth-context";

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
  const [username, setUsername] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const loggedInStatus = JSON.parse(localStorage.getItem("isLoggedIn"));
    setIsLoggedIn(loggedInStatus);
  }, []);

  return (
    <>
      <AuthContext.Provider
        value={{
          products: products,
          isAdmin: false,
        }}
      >
        <Navigation
          onLogOut={setIsLoggedIn}
          isLoggedIn={isLoggedIn}
          onSetIsAdmin={setIsAdmin}
        ></Navigation>
        <Route path="/" exact>
          <Login
            onSetIsAdmin={setIsAdmin}
            onLogin={setIsLoggedIn}
            onSetUsername={setUsername}
          ></Login>
        </Route>
        {isLoggedIn && (
          <Route path="/landing">
            <Landing user={username}></Landing>
          </Route>
        )}
        {isLoggedIn && (
          <Route path="/products">
            <Products isAdmin={isAdmin} products={products}></Products>
          </Route>
        )}
        {isLoggedIn && (
          <Route path="/permissions">
            <Permissions products={products}></Permissions>
          </Route>
        )}
      </AuthContext.Provider>
    </>
  );
}

export default App;
