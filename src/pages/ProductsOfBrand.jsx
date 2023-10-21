import { useLoaderData, useNavigation, useParams } from "react-router-dom";
import {
  Section,
  Container,
  Card,
  StarRating,
  Button,
  Loading,
} from "../components";

export default function ProductsOfBrand() {
  const params = useParams();
  const navigation = useNavigation();
  const products = useLoaderData();

  return (
    <Section className="min-h-[calc(100vh-80px)] py-16">
      <Container className="relative">
        <Section.Title>{params.name}'s Products</Section.Title>
        <Section.Content className="mt-12 grid lg:grid-cols-2 justify-items-center gap-5">
          {products?.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </Section.Content>
        {navigation.state === "loading" && <Loading />}
      </Container>
    </Section>
  );
}

function ProductCard({ product }) {
  const { name, image, type, price, rating, brand, nameSlug } = product;

  return (
    <Card className="max-w-sm sm:max-w-xl w-full sm:card-side border hover:shadow-xl bg-base-100 rounded-sm">
      <Card.Image className="bg-base-200 p-4 sm:basis-[36%]">
        <img
          className="max-h-44 aspect-square object-contain"
          src={image}
          alt={name}
        />
      </Card.Image>

      <Card.Body className="p-5 gap-0 text-secondary sm:basis-[64%]">
        <Card.Box className="flex justify-between items-center">
          <Card.Text className="text-sm font-semibold p-0.5 px-2 bg-primary/25 rounded-md flex-grow-0">
            {brand}
          </Card.Text>
          <Card.Text className="font-semibold flex-grow-0">{type}</Card.Text>
        </Card.Box>

        <Card.Title className="mt-2">{name}</Card.Title>
        <Card.Text className="text-lg font-semibold mt-0.5 mb-2">
          ${price}
        </Card.Text>
        <StarRating size={18} color="#0B3954" ratingValue={rating} />

        <Card.Box className="mt-5 flex justify-end gap-3">
          <Button
            to={`/products/${nameSlug}`}
            className="uppercase text-base btn-primary"
          >
            Details
          </Button>
          <Button
            to={`/products/update/${nameSlug}`}
            className="uppercase text-base btn-secondary"
          >
            Update
          </Button>
        </Card.Box>
      </Card.Body>
    </Card>
  );
}
