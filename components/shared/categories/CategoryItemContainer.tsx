import { APIProduct } from "../../../types";
import { Container } from "@mui/material";
import CategoryItemImage from "./CategoryItemImage";
import CategoryItemDescription from "./CategoryItemDescription";

interface Props {
  item: APIProduct;
}

const CategoryItemContainer = ({ item }: Props) => {
  return (
    <Container>
      <div className="categry-line" style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
      >
        {item.id % 2 === 0 ? (
          <CategoryItemImage src={item.image.desktop.replace(".", "")}
            name={item.name}
          />
        ) : null}
        <CategoryItemDescription
          isNew={item.new} name={item.name}
          description={item.description}
          slug={item.slug}
        />
        {item.id % 2 !== 0 ? (
          <CategoryItemImage src={item.image.desktop.replace(".", "")}
            name={item.name}
          />
        ) : null}
      </div>
    </Container>
  );
};

export default CategoryItemContainer;
