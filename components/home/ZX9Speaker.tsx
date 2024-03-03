import Link from "next/link";
import Image from "next/image";
import { Button } from "../Button";
import { Container } from "@mui/material";

const ZX9Speaker = () => {
  return (
    <Container> 
      <div className="categry-line" style={{
          backgroundColor: "#d87d4a",
          backgroundImage: "url(./assets/home/desktop/pattern-circles.svg)",
          backgroundRepeat: "no-repeat",
          backgroundPositionX: "-150px",
          color: "white", 
          display: "flex",
          alignItems: "center",
          marginBottom: "5rem",
        }}
      >
        <div className="img zx">
          <Image className="img"
            src="/assets/home/desktop/image-speaker-zx9.png"
            alt="zx9-speaker" width={400} height={500}
            style={{ margin: "7rem 8rem 0 8rem", zIndex: 4, }}
          />
        </div>
        <div className="zx" style={{ marginRight: "10rem" }}>
          <h2 style={{
              fontWeight: 700,
              lineHeight: "56px",
              marginBottom: "24px",
              textTransform: "uppercase",
              fontSize: "56px",
            }}
          >
            ZX9 SPEAKER
          </h2>
          <p style={{ fontSize: "15px", marginBottom: "40px", lineHeight: "25px", fontWeight: 400, }}
          >
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </p>
          <Link href="/zx9-speaker">
            <Button color="black" variant="contained" sx={{ fontSize: "13px", fontWeight: 700, letterSpacing: "1px", paddingX: "30px", paddingY: "15px" }}>
              SEE PRODUCT
            </Button>
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default ZX9Speaker;
