import Link from "next/link";
import Image from "next/image";
import { Button } from "../Button";
import { Container } from "@mui/material";

const YX1Earphones = () => {
  return (
    <Container>
      <div className="categry-line" style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "6rem",
        }}
      >
        <Image src="/assets/home/desktop/image-earphones-yx1.jpg"
          alt="yx1-earphones"
          width={500}
          height={300}
        />

        <div className="none" style={{
          width: "70%",
          marginLeft: "2rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          paddingLeft: "10rem",
          backgroundColor: "#F1F1F1",
          }}
        >
          <h4 style={{ marginBottom: "32px", fontSize: "28px", }}>
            YX1 EARPHONES
          </h4>
            <Link href="/yx1-earphones">
              <Button variant="outlined" color="black" sx={{ fontSize: "13px", fontWeight: 700, letterSpacing: "1px", paddingX: "30px", paddingY: "15px", }}>
                SEE PRODUCT
              </Button>
            </Link>
        </div>
      </div>
    </Container>
  );
};

export default YX1Earphones;