import { Container } from "@mui/material";
import CategoryCard from "./CategoryCard";

const CategoryCardContainer = () => {
  return (
    <div style={{ margin: "4rem 0" }}>
      <Container>
        <div className="categry-line" style={{ display: "flex", justifyContent: "space-between" }}>
          <CategoryCard category="headphones" />
          <CategoryCard category="speakers" />
          <CategoryCard category="earphones" />
        </div>
      </Container>
    </div>
  );
};

export default CategoryCardContainer;
