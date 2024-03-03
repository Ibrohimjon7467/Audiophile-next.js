import Cart from "./Cart";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Container } from "@mui/material";
import { useAppSelector } from "../store/hooks";

const Nav = () => {

  const [showCart, setShowCart] = useState(false);
  const { cart } = useAppSelector((state) => state.cart);

  return (
    <div className="nav" style={{  }}>
      <Container sx={{
        margin: "0",
        marginLeft: "auto",
        marginRight: "auto",
        padding: "35px 0",
        display: "flex",
        alignItems: "center",
        color: "white",
        justifyContent: "space-between",
      }}
      >
        <Link href="/">
          <Image src="./assets/shared/desktop/logo.svg"
            alt="logo" width={143} height={28}
          />
        </Link>

        <ul className="categry-line" style={{ textTransform: "uppercase", display: "flex", alignItems: "center", columnGap: "34px", fontSize: "13px", textDecoration: "none" }}>
          <Link href="/">Home</Link>
          <Link href="/headphones">Headphones</Link>
          <Link href="/speakers">Speakers</Link>
          <Link href="/earphones">Earphones</Link>
        </ul>

        <button onClick={() => setShowCart(!showCart)} style={{ display: "flex", zIndex: "100", backgroundColor: "inherit", border: "none", outline: "none", cursor: "pointer" }}>
          <Image src="./assets/shared/desktop/icon-cart.svg"
            alt="logo" width={23} height={20}
          />
          <div style={{ color: "white", marginLeft: "-10px", fontWeight: "900", marginTop: "-6px", fontSize: "11px" }}>
            ({cart.length})
          </div>
        </button>
      </Container>
      {showCart ? <Cart /> : null}
    </div>
  );
};

export default Nav;
