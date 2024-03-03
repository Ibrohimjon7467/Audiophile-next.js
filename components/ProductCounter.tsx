import { useState } from "react";
import { Button } from "@mui/material";

const ProductCounter = () => {

  const [count, setCount] = useState(0);

  return (
    <div style={{
      backgroundColor: "#f1f1f1",
      padding: "14px",
      marginRight: "8px",
    }}
    >
      <Button onClick={() => {
        setCount(count - 1);
      }}
      >
        -
      </Button>
      {count}
      <Button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        +
      </Button>
    </div>
  );
};

export default ProductCounter;
