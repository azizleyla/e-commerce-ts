import React, { useEffect, useState } from "react";
import FilterButtons from "../components/common/FilterButtons";
import Layout from "../components/common/Layout";
import Products from "../components/products/Products";
import ScroolToTop from "../components/ui/ScroolToTop";
import { Container } from "../components/ui/style";
import { Product1 } from "../models/products.model";
import { useGetProductsQuery } from "../services/ProductsApi";

const Home = () => {
  const { data: products, isLoading } = useGetProductsQuery();

  const [productItems, setProductItems] = useState<Product1[]>();
  useEffect(() => {
    setProductItems(products);
  }, [isLoading]);

  return (
    <Layout>
      <ScroolToTop />
      <Container>
        <h1>Products</h1>
        <FilterButtons productItems={productItems} />
        <Products />
      </Container>
    </Layout>
  );
};

export default Home;
