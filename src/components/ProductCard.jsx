import Card from "./Card";
import StarRating from "./StarRating";

export default function ProductCard({ product = {} }) {
  const { name, image, price, rating, brand, nameSlug } = product;

  return (
    <Card
      className="max-w-xs w-full border border-transparent hover:border-base-content/20"
      to={`/products/${nameSlug}`}
    >
      <Card.Image className="bg-base-200 py-4">
        <img
          className="max-h-44 h-screen aspect-square object-contain"
          src={image}
          alt={name}
        />
      </Card.Image>

      <Card.Body className="px-3 py-4 gap-0 text-secondary">
        <Card.Title className="text-lg">{name}</Card.Title>
        <Card.Text className="font-semibold mt-1">${price}</Card.Text>
        <Card.Box className="flex justify-between items-center mt-4">
          <StarRating size={18} color="#11c47f" ratingValue={rating} />
          <Card.Text className="font-semibold flex-grow-0">{brand}</Card.Text>
        </Card.Box>
      </Card.Body>
    </Card>
  );
}
