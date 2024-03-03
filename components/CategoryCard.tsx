import Link from "next/link";
import Image from "next/image";

interface Props {
  category: string;
}

const CategoryCard = ({ category }: Props) => {
  return (
    <div className="conta" style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      width: "100%",
      maxWidth: "350px",
    }}
    >
      <Image src={`/assets/shared/desktop/image-category-thumbnail-${category}.png`}
        width={250}
        height={200}
        alt={category}
      />
      <h4 style={{
        marginBottom: "15px",
        textTransform: "uppercase",
        fontSize: "18px",
      }}
      >
        {category}
      </h4>
      <Link href={`/${category}`} style={{ color: "#8f8f8f" }}>
        SHOP
      </Link>
      <div style={{
        position: "relative",
        width: "100%",
        height: "14rem",
        bottom: "190px",
        zIndex: "-1",
        backgroundColor: "#f1f1f1",
      }}
      ></div>
    </div>
  );
};

export default CategoryCard;
