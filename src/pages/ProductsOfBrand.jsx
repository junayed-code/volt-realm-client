import { useNavigation, useParams } from "react-router-dom";
import {
  Section,
  Container,
  Card,
  StarRating,
  Button,
  Loading,
} from "../components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useQuery } from "@tanstack/react-query";
import { getProductsByBrand } from "../services/api";

const advertiseImages = [
  "/images/advertisements/advertisement-1.jpg",
  "/images/advertisements/advertisement-2.jpg",
  "/images/advertisements/advertisement-3.jpg",
];

export default function ProductsOfBrand() {
  const { brand } = useParams();
  const { state } = useNavigation();
  const { isLoading, data: products } = useQuery({
    queryKey: [brand],
    queryFn: () => getProductsByBrand({ brand: brand }),
  });

  if (isLoading || state === "loading") return <Loading />;

  return (
    <Container className="relative">
      <Section className="py-10">
        <Swiper
          className="rounded-md"
          navigation={{
            enabled: true,
            nextEl: ".swiper-next",
            prevEl: ".swiper-prev",
          }}
          modules={[Navigation, Autoplay, Pagination]}
          spaceBetween={50}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
        >
          {advertiseImages.map((img, i) => (
            <SwiperSlide key={i}>
              <AdvertiseCard image={img} />
            </SwiperSlide>
          ))}
          <div className="absolute z-30 top-1/2 -translate-y-1/2 w-full flex justify-between px-8">
            <button className="swiper-prev btn btn-circle btn-neutral">
              ❮
            </button>
            <button className="swiper-next btn btn-circle btn-neutral">
              ❯
            </button>
          </div>
        </Swiper>
      </Section>
      <Section className="py-10">
        <Section.Title>{brand}'s Products</Section.Title>
        <Section.Content className="mt-12 grid lg:grid-cols-2 justify-items-center gap-5">
          {products?.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </Section.Content>
      </Section>
    </Container>
  );
}

function ProductCard({ product }) {
  const { name, image, type, price, rating, brand, nameSlug } = product;

  return (
    <Card className="max-w-sm sm:max-w-xl w-full sm:card-side border border-base-content/25 hover:shadow-xl bg-base-100 rounded-sm">
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
        <StarRating size={18} color="#11c47f" ratingValue={rating} />

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

function AdvertiseCard({ image }) {
  return (
    <Card className="">
      <Card.Image className="max-h-80 sm:max-h-96 md:max-h-[400px] rounded-md">
        <img
          className="object-contain w-full aspect-video"
          src={image}
          alt=""
        />
      </Card.Image>
    </Card>
  );
}
