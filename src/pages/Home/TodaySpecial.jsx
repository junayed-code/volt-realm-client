import { Section, Container, ProductCard } from "../../components";
import { useFetch } from "../../hooks";

export default function TodaySpecial() {
  const products = useFetch(
    "https://volt-realm-api.vercel.app/products?limit=8"
  );

  return (
    <Section className="py-12 md:py-16">
      <Container>
        <Section.Title>Today Special</Section.Title>

        <Section.Content className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center">
          {products?.map(product => (
            <ProductCard key={product.name} product={product} />
          ))}
        </Section.Content>
      </Container>
    </Section>
  );
}
