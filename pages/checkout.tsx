import React from "react";
import { NextPage } from "next";

//components
import Nav from "../components/Nav";
import { Container } from "@mui/material";
import Summary from "../components/Summary";
import { Footer } from "../components/shared/Footer";
import PaymentDetails from "../components/PaymentDetails";

const Checkout: NextPage = () => {
  return (
    <div style={{ backgroundColor: "#f1f1f1" }}>
      <Nav />
      <Container>
        <div className="categry-line" style={{ display: "flex" }}>
          <PaymentDetails />
          <Summary />
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export default Checkout;
