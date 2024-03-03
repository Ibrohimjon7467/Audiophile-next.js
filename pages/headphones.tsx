import { NextPage } from "next";
import Nav from "../components/Nav";
import { useEffect, useState } from "react";
import About from "../components/shared/About";
import { Footer } from "../components/shared/Footer";
import CategoryCardContainer from "../components/CategoryCardContainer";
import CategoryPageHeader from "../components/shared/categories/CategoryPageHeader";
import CategoryItemContainer from "../components/shared/categories/CategoryItemContainer";
import { APIProduct } from "../types";

const Headphones: NextPage = () => {
  const category = "headphones";
  const [data, setData] = useState<APIProduct[]>([]);
  const [isLoading, setLoading] = useState(true);
  const products = Array.from(new Set(data));

  useEffect(() => {
    fetch("/api/data")
      .then((res) => res.json())
      .then((response) => {
        setLoading(false);
        response.map((item: APIProduct) => {
          if (item.category === category) {
            data.unshift(item);
          }
        });
      });
  }, [data]);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <Nav />
      <CategoryPageHeader category={category} />

      {products.map((item) => {
        return <CategoryItemContainer item={item} key={item.id} />;
      })}

      <CategoryCardContainer />
      <About />
      <Footer />
    </div>
  );
};

export default Headphones;
