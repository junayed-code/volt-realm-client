import { useQuery } from "@tanstack/react-query";
import { Section, Container, Card } from "../../components";
import Marquee from "react-fast-marquee";
import { fetchData } from "../../utils";

export default function ProductBrands() {
  const { data: brands } = useQuery({
    queryKey: ["brands"],
    queryFn: fetchData.bind(null, "/data/brands.json"),
    staleTime: 1000 * 60 * 5,
  });

  return (
    <Section className="py-12 md:pt-16 md:pb-24">
      <Container>
        <Section.Title>Our Featured Brands</Section.Title>
        <Marquee className="mt-10" pauseOnHover gradient gradientWidth={80}>
          {brands?.map(brand => (
            <BrandCard key={brand.name} name={brand.name} image={brand.image} />
          ))}
        </Marquee>
      </Container>
    </Section>
  );
}

function BrandCard({ image, name }) {
  return (
    <Card
      className="max-w-xs mx-4 rounded-sm border border-secondary hover:shadow-2xl shadow-inner"
      to={`products/brand/${name}`}
    >
      <Card.Image className="relative p-4 pt-0">
        <img
          className="max-h-32 aspect-video object-contain"
          src={image}
          alt={name}
        />

        <figcaption className="absolute bottom-0 left-0 right-0 py-2">
          <Card.Text className="text-lg font-semibold uppercase text-center tracking-widest text-base-content/60">
            {name}
          </Card.Text>
        </figcaption>
      </Card.Image>
    </Card>
  );
}
