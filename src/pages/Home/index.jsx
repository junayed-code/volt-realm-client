import Banner from "./Banner";
import TodaySpecial from "./TodaySpecial";
import ProductBrands from "./ProductBrands";
import ProductTypes from "./ProductTypes";
import { useAuth } from "../../hooks";

export default function Home() {
  const { loading } = useAuth();

  if (loading) return;

  return (
    <>
      <Banner />
      <ProductTypes />
      <TodaySpecial />
      <ProductBrands />
    </>
  );
}
