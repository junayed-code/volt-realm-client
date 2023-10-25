import { useQuery } from "@tanstack/react-query";
import { Section, Container, ProductCard } from "../../components";
import { getProducts } from "../../services/api";

export default function TodaySpecial() {
  const { data: products } = useQuery({
    queryKey: ["products-8"],
    queryFn: getProducts.bind(null, { length: 8 }),
    staleTime: 1000 * 30 * 1,
  });

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
