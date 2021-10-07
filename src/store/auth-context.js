import React from "react";
import { v4 as uuidv4 } from "uuid";

const AuthContext = React.createContext({
  products: [
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
  ],
  isLoggedIn: false,
});

export default AuthContext;
