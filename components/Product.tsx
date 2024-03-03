import Image from "next/image";
import { useState } from "react";
import { Button } from "./Button";
import { APIProduct } from "../types";
import { addToCart } from "../store/cartSlice";
import { useAppDispatch } from "../store/hooks";
import { Container, Button as MUIButton } from "@mui/material";

interface Props {
  product: APIProduct;
}

const Product = ({ product }: Props) => {

  const dispatch = useAppDispatch();
  const [count, setCount] = useState(0);

  return (
    <Container sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
      <Image src={product.image?.desktop.replace(".", "") || ""}
        width={500} height={500} alt="headphones"
      />
      <div style={{
        width: "25vw",
        height: "75vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        marginLeft: "125px",
      }}
      >
        <h3 style={{
          textTransform: "uppercase",
          fontSize: "10px",
          letterSpacing: "8px",
          color: "#d97d45",
          marginBottom: "16px", 
        }}
        >
          New Product
        </h3>
        <h1 style={{
          fontWeight: 600,
          marginBottom: "2px",
          textTransform: "uppercase",
          fontSize: "60px",
        }}
        >
          {product.name}
        </h1>
        <p style={{ color: "#727272", fontSize: "24px", marginBottom: "45px" }}>
          {product.description}
        </p>
        <h5 style={{ marginBottom: "32px", fontWeight: 700 }}>
          ${product.price}
        </h5>
        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{
            backgroundColor: "#f1f1f1",
            padding: "14px",
            marginRight: "8px",
          }}
          >
            <MUIButton onClick={() => {
              setCount(count - 1);
            }}
            >
              -
            </MUIButton>
            {count}
            <MUIButton onClick={() => {
              setCount(count + 1);
            }}
            >
              +
            </MUIButton>
          </div>
          <Button variant="contained" color="#d97d45" onClick={() => {
            dispatch(addToCart({ ...product, count }));
          }}
          >
            Add to Cart
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default Product;