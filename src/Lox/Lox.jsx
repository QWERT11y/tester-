import React from "react";
import Home from "./Home";
import Footer from "./Footer";
import { useLocation } from "react-router-dom";

const Lox = ({ children }) => {
  const url = useLocation().pathname;
  console.log(url);

  return (
    <>
      {url !== "/" && <Home />}
      {children}
      {url !== "/" && <Footer />}
    </>
  );
};

export default Lox;
