import { useLoaderData, useNavigation } from "react-router-dom";
import { Container, Loading, ProductCard, Section } from "../components";

export default function AllProducts() {
  const navigation = useNavigation();
  const { data: products = [] } = useLoaderData();

  return (
    <Section className="py-12 md:py-16">
      <Container>
        <Section.Title>All Products</Section.Title>

        <Section.Content className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center relative">
          {products?.map(product => (
            <ProductCard key={product.name} product={product} />
          ))}
          {navigation.state === "loading" && <Loading />}
        </Section.Content>
      </Container>
    </Section>
  );
}
