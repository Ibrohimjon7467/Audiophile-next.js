import Image from "next/image";
import { Button } from "./Button";
import { useAppSelector } from "../store/hooks";

const Summary = () => {

  const { cart } = useAppSelector((state) => state.cart);

  return (
    <div className="form" style={{
      width: "25%",
      height: "30%",
      padding: "32px",
      margin: "60px 0",
      marginLeft: "30px",
      backgroundColor: "white",
    }}
    >
      <h1 style={{
        fontSize: "32px",
        textTransform: "uppercase",
        fontWeight: 800,
        letterSpacing: 1.5,
        marginBottom: "32px",
      }}
      >
        Summary
      </h1>

      {cart.map((product) => {
        return (
          <div key={product.id} style={{
            display: "flex",
            margin: "1rem 0",
            justifyContent: "space-between",
          }}
          >
            <div style={{ display: "flex" }}>
              <Image
                src={product.image.mobile.replace(".", "")}
                width={50} height={50} alt="headphones"
              />
              <div style={{
                display: "flex",
                flexDirection: "column",
                marginLeft: "1rem",
              }}
              >
                <p>{product.name}</p>
                <span style={{ color: " #6f7275" }}>
                  ${product.price}
                </span>
              </div>
            </div>
            <div style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
            }}
            >
              <span style={{ fontSize: "0.75rem" }}>Count</span>
              <p style={{ fontWeight: 800 }}>
                {product.count}
              </p>
            </div>
          </div>
        );
      })}
      <div style={{ marginBottom: "2rem" }}>
        <div style={{
          display: "flex",
          justifyContent: "space-between",
        }}
        >
          <p style={{
            color: "#808080",
            textTransform: "uppercase",
            fontWeight: 600,
          }}
          >
            Total
          </p>
          <p>$$$</p>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <p style={{
            color: "#808080",
            textTransform: "uppercase",
            fontWeight: 600,
          }}
          >
            Shipping
          </p>
          <p>$$$</p>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <p style={{
            color: "#808080",
            textTransform: "uppercase",
            fontWeight: 600,
          }}
          >
            Tax
          </p>
          <p>$$$</p>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <p style={{ color: "#808080", textTransform: "uppercase", fontWeight: 600 }}>
          Grand Total
        </p>
        <p>$$$</p>
      </div>
      <Button variant="contained"
        color="#d87d4a"
        sx={{ marginTop: "14px", width: "100%", fontSize: "13px", }}
      >
        Continue & Pay
      </Button>
    </div>
  );
};

export default Summary;