import Banner from "./Banner";
import TodaySpecial from "./TodaySpecial";
import ProductBrands from "./ProductBrands";
import ProductTypes from "./ProductTypes";

export default function Home() {
  return (
    <>
      <Banner />
      <ProductTypes />
      <TodaySpecial />
      <ProductBrands />
    </>
  );
}
