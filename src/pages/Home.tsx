import React from "react";
import Layout from "../components/common/Layout";
import Products from "../components/products/Products";
import { Container } from "../components/ui/style";

const Home = () => {
  return (
    <Layout>
      <Container>
        <Products />
      </Container>
    </Layout>
  );
};

export default Home;
