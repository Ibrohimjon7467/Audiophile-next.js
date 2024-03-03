import type { NextPage } from "next";
import { Container } from "@mui/material";

// components
import Nav from "../components/Nav";
import Hero from "../components/Hero";
import About from "../components/shared/About";
import { Footer } from "../components/shared/Footer";
import ZX9Speaker from "../components/home/ZX9Speaker";
import ZX7Speaker from "../components/home/ZX7Speaker";
import YX1Earphones from "../components/home/YX1Earphones";
import CategoryCardContainer from "../components/CategoryCardContainer";

const Home: NextPage = () => {
  return (
    <div style={{ backgroundColor: "#F1F1F1" }}>
      <div style={{
        backgroundImage: "url(./assets/home/desktop/image-hero.jpg)",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "120vh",
        color: "white",
      }}
      >
        <Container>
          <Nav />
          <hr style={{ height: "1px", opacity: "0.2", marginTop: "0", }} />
          <Hero />
        </Container>
      </div>
      <CategoryCardContainer />
      <ZX9Speaker />
      <ZX7Speaker />
      <YX1Earphones />
      <About />
      <Footer />
    </div>
  );
};

export default Home;
