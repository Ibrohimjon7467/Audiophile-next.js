import Link from "next/link";
import { Button } from "./Button";

const Hero = () => {
  return (
    <div className="categry-line hero">
      <h3>New Product</h3>
      <h1>XX99 Mark II Headphones</h1>
      <p>
        Experience natural, lifelike audio and exceptional build quality made
        for the passionate music enthusiast.
      </p>
      <Link href="/xx99-mark-two-headphones">
        <Button variant="contained" color="#FFF" sx={{ fontSize: "13px", fontWeight: "700", textTransform: "uppercase", padding: "15px 30px", backgroundColor: "#D87D4A" }}>
          See Product
        </Button>
      </Link>
    </div>
  );
};

export default Hero;
