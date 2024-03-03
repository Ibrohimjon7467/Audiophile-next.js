import Link from "next/link";
import { Button } from "../Button";
import { Container } from "@mui/material";

const ZX7Speaker = () => {
  return (
    <Container>
      <div className="categry-line" style={{
        backgroundImage: "url(/assets/home/desktop/image-speaker-zx7.jpg)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        width: "100%",
        height: "20rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
      >
        <div style={{ marginLeft: "4rem" }}>
          <h4 style={{ marginBottom: "32px", fontSize: "28px", }}>
            ZX7 SPEAKER
          </h4>
          <Link href="/zx7-speaker">
            <Button variant="outlined" color="black" sx={{ fontSize: "13px", fontWeight: 700, letterSpacing: "1px", paddingX: "30px", paddingY: "15px", }}>
              SEE PRODUCT
            </Button>
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default ZX7Speaker;
