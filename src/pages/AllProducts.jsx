import {
  Container,
  Loading,
  ProductCard,
  Section,
  UnexpectedError,
} from "../components";
import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../services/api";

export default function AllProducts() {
  const {
    data: products,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
    refetchOnWindowFocus: false,
  });

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Section className="min-h-[calc(100vh-80px)] py-12 md:py-16 relative">
      {isError && <UnexpectedError />}

      {!isError && (
        <Container>
          <Section.Title>All Products</Section.Title>

          <Section.Content className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center relative">
            {products?.map(product => (
              <ProductCard key={product.name} product={product} />
            ))}
          </Section.Content>
        </Container>
      )}
    </Section>
  );
}
