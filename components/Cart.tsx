import Link from "next/link";
import Image from "next/image";
import { Button } from "./Button";
import { clearCart } from "../store/cartSlice";
import { useAppDispatch, useAppSelector } from "../store/hooks";

const Cart = () => {

  const { cart } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();

  return (
    <div style={{
      position: "fixed",
      top: 0,
      left: 0,
      width: "100vw",
      height: "100vh",
      backgroundColor: "rgba(0,0,0,0.5)",
    }}
    >
      <div style={{
        position: "absolute",
        right: 160,
        top: 160,
        width: "370px",
        color: "black",
        padding: "32px",
        display: "flex",
        flexDirection: "column",
        textTransform: "uppercase",
        backgroundColor: "white",
      }}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between",}}>
          <span style={{ fontSize: "18px", fontWeight: 700,}}>Cart</span>
          <button onClick={() => dispatch(clearCart())} style={{ fontSize: "15px", fontWeight: 400, border: "none", outline: "none", color: "#000", opacity: "0.5", cursor: "pointer",}}>
            Remove All
          </button>
        </div>
        {cart.map((product) => {
          return (
            <div key={product.id}
              style={{
                display: "flex",
                justifyContent: "space-between",
                margin: "35px 0",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", }}>
                <Image src={product.image.mobile.replace(".", "")}
                  width={64} height={64} alt="headphones"
                />
                <div style={{
                  display: "flex",
                  flexDirection: "column",
                  marginLeft: "1rem",
                }}
                >
                  <p style={{ fontSize: "13px", fontWeight: 700, lineHeight: "25px",}}>{product.name}</p>
                  <span style={{ color: "#000", opacity: "0.5",}}>
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
                <span style={{ fontSize: "0.75rem",}}>Count</span>
                <p style={{ fontWeight: 800,}}>
                  {product.count}
                </p>
              </div>
            </div>
          );
        })}

        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", }}>
          <span>Total</span>
          <span>$$$</span>
        </div>
        <Link href="/checkout">
          <Button color="#d97d45" variant="contained"
            sx={{ width: "100%", marginTop: "24px", }}
          >
            Checkout
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Cart;
