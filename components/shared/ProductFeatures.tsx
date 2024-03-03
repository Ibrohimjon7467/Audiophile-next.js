import { Container } from "@mui/material";

interface Interface {
  item: string;
  quantity: number;
}

interface Props {
  features: string;
  includes: Interface[];
}

const ProductFeatures = ({ features, includes }: Props) => {
  return (
    <Container>
      <div style={{ display: "flex", marginBottom: "8rem" }}>
        <div style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "space-between",
          maxWidth: "60%",
        }}
        >
          <h3 style={{
            textTransform: "uppercase",
            fontSize: "32px",
            fontWeight: 500,
            marginBottom: "4rem",
          }}
          >
            Features
          </h3>
          <span>{features}</span>
        </div>
        <div style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "space-between",
          marginLeft: "5rem",
        }}
        >
          <h3 style={{
            fontSize: "32px",
            fontWeight: 500,
            marginBottom: "4rem",
            textTransform: "uppercase",
          }}
          >
            In The div
          </h3>
          {includes.map((item) => {
            return (
              <div key={item.item}>
                <span style={{ color: "#d87d4a", marginRight: "8px" }}>
                  {item.quantity}x
                </span>{" "}
                {item.item}
              </div>
            );
          })}
        </div>
      </div>
    </Container>
  );
};

export default ProductFeatures;
