import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import { Section, Container, Card } from "../../components";
import { useQuery } from "@tanstack/react-query";
import { fetchData } from "../../utils";

export default function ProductTypes() {
  const { data: types } = useQuery({
    queryKey: ["product-types"],
    queryFn: fetchData.bind(null, "/data/product-types.json"),
    staleTime: 1000 * 60 * 5,
  });

  return (
    <Section className="py-12 md:py-16">
      <Container>
        <Section.Title>Featured Product Types</Section.Title>

        <Section.Content className="mt-8 md:mt-12 grid grid-cols-2 lg:grid-cols-4 gap-y-6 gap-x-4">
          {types?.map(({ name, image }) => (
            <ProductTypeCard key={name} name={name} image={image} />
          ))}
        </Section.Content>
      </Container>
    </Section>
  );
}

function ProductTypeCard({ name, image }) {
  return (
    <Card className="max-w-[250px] mx-auto border border-base-content/25">
      <Card.Image className="bg-base-100">
        <img
          className="max-h-40 w-full aspect-video object-cover"
          src={image}
          alt={name}
        />
      </Card.Image>
      <Card.Box className="p-2">
        <Link className="text-lg font-semibold self-start inline-flex items-center gap-2 hover:underline underline-offset-2 group">
          {name}
          <BsArrowRight className="group-hover:scale-x-125 origin-left mt-0.5" />
        </Link>
      </Card.Box>
    </Card>
  );
}
