import React from "react";
import CartProduct from "../components/bag/CartProduct";
import Layout from "../components/common/Layout";
import { Container } from "../components/ui/style";

const Bag = () => {
  return (
    <Layout>
      <Container>
        <CartProduct />
      </Container>
    </Layout>
  );
};

export default Bag;
