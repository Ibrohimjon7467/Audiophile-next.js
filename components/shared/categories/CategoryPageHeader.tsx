interface Props {
  category: string;
}

const CategoryPageHeader = ({ category }: Props) => {
  return (
    <div style={{
      minHeight: "15rem",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "white",
      backgroundColor: "#1a1a1a",
    }}
    >
      <h1 style={{ textTransform: "uppercase", fontSize: "40px", fontWeight: 700, }}>
        {category}
      </h1>
    </div>
  );
};

export default CategoryPageHeader;
