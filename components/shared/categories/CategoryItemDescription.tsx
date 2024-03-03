import Link from "next/link";
import { Button } from "../../Button";

interface Props {
  name: string;
  slug: string;
  isNew: boolean;
  description: string;
}

const CategoryItemDescription = ({ isNew, name, description, slug }: Props) => {
  return (
    <div style={{
      width: "40vw",
      height: "75vh",
      marginTop: "150px",
      marginBottom: "100px",
      marginLeft: "150px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    }}
    >
      {isNew ? (
        <h3 style={{
          textTransform: "uppercase",
          fontSize: "14px",
          fontWeight: 400,
          letterSpacing: "10px",
          color: "#d87d4a",
          marginBottom: "16px",
        }}
        >
          New Product
        </h3>
      ) : null}
      <h1 style={{
        fontWeight: 700,
        marginBottom: "32px",
        lineHeight: "44px",
        letterSpacing: "1.5px",
        textTransform: "uppercase",
        fontSize: "40px",
      }}
      >
        {name}
      </h1>
      <p style={{ fontSize: "1.25rem", marginBottom: "3rem", }}>
        {description}
      </p>
      <Link href={`/${slug}`}>
        <Button variant="contained" color="white" sx={{ backgroundColor: "#D87D4A", color: "white", }}>
          See Product
        </Button>
      </Link>
    </div>
  );
};

export default CategoryItemDescription;
