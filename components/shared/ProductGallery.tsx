import Image from "next/image";
import { Container } from "@mui/material";

interface Props {
  gallery: {
    first: { desktop: string };
    second: { desktop: string };
    third: { desktop: string };
  };
}

const ProductGallery = ({ gallery }: Props) => {
  return (
    <Container>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
        >
          <Image src={gallery.first.desktop.replace(".", "")}
            alt="product-image" height={275} width={500}
          />
          <Image src={gallery.second.desktop.replace(".", "")}
            alt="product-image" height={275} width={500}
          />
        </div>
        <Image src={gallery.third.desktop.replace(".", "")}
          alt="product-image" height={600} width={600}
        />
      </div>
    </Container>
  );
};

export default ProductGallery;
