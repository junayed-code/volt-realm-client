import { useParams } from "react-router-dom";
import {
  Container,
  Section,
  StarRating,
  Card,
  Button,
  Loading,
} from "../components";
import { useCartStorage } from "../hooks";
import { mySwal } from "../utils";
import { useQuery } from "@tanstack/react-query";
import { getProductByNameSlug } from "../services/api";

export default function ProductDetails() {
  const { addItem } = useCartStorage();
  const { name: nameSlug } = useParams();
  const { data, isLoading } = useQuery({
    queryKey: [nameSlug],
    queryFn: getProductByNameSlug.bind(null, nameSlug),
  });

  if (isLoading) return <Loading />;

  const { name, image, brand, rating, price, description } = data || {};
  const handleAddProductToCart = () => {
    addItem({ name, image, price });
    mySwal({ title: "p-5 pb-0" }).fire({
      icon: "success",
      title: name,
      text: "The product was successfully added to the cart.",
    });
  };

  return (
    <Section className="min-h-[calc(100vh-80px)] pt-10 pb-16">
      <Container>
        <Card className="md:card-side gap-10 px-4">
          <Card.Image className="cursor-pointer bg-base-200 py-5 flex-1 overflow-hidden">
            <img
              className="aspect-square object-contain max-h-72 sm:max-h-96 sm:hover:scale-110 duration-300"
              src={image}
              alt={name}
            />
          </Card.Image>
          <Card.Body className="p-0 flex-1 text-secondary min-h-[350px]">
            <Card.Text className="text-sm font-semibold p-1 px-4 bg-secondary/25 rounded-md w-fit flex-grow-0">
              {brand}
            </Card.Text>
            <Card.Title className="text-3xl sm:text-4xl font-bold">
              {name}
            </Card.Title>
            <StarRating size="18" color="#11c47f" ratingValue={rating} />

            <Card.Text className="text-lg mt-2 font-medium opacity-90">
              {description}
            </Card.Text>

            <Card.Box>
              <Card.Text className="text-3xl font-bold mb-4">
                ${price}
              </Card.Text>
              <Button
                onClick={handleAddProductToCart}
                className="text-xl w-72 btn-primary"
              >
                Add to Cart
              </Button>
            </Card.Box>
          </Card.Body>
        </Card>
      </Container>
    </Section>
  );
}
