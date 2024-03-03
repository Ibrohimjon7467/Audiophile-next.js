import Link from "next/link";
import Image from "next/image";
import { Button } from "../Button";
import { Container } from "@mui/material";
import { RecommendationType } from "../../types";

interface Props {
  recommendations: RecommendationType[];
}

const Recommendations = ({ recommendations }: Props) => {
  return (
    <Container>
      <div style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        margin: "8rem 0",
      }}
      >
        <h3 style={{
          fontWeight: 700,
          fontSize: "32px",
          marginBottom: "64px",
          textTransform: "uppercase",
        }}
        >
          You May Also Like
        </h3>
        <div style={{ display: "flex", justifyContent: "space-between", }}>
          {recommendations.map((product) => {
            return (
              <div key={product.slug}
                style={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <Image src={product.image.desktop.replace(".", "")}
                  alt={product.name} width={350} height={350}
                />
                <h3 style={{
                  fontSize: "24px",
                  fontWeight: 500,
                  margin: "32px 0",
                  textTransform: "uppercase",
                }}
                >
                  {product.name}
                </h3>
                <Link href={`/${product.slug}`}>
                  <Button variant="contained" color="#d87d4a" sx={{ color: "white", paddingX: "30px", paddingY: "15px", }}>
                    See Product
                  </Button>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </Container>
  );
};

export default Recommendations;
