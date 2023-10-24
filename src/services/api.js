import axios from "axios";

const API_END_POINT = "https://volt-realm-api.vercel.app/products";

export const getProducts = async ({ length = 0 }) => {
  try {
    const { data } = await axios.get(`${API_END_POINT}?limit=${length}`);
    return data.data;
  } catch (err) {
    throw err;
  }
};

export const getProductsByBrand = async ({ brand }) => {
  try {
    const { data } = await axios.get(`${API_END_POINT}/brand/${brand}`);
    return data.data;
  } catch (err) {
    throw err;
  }
};

export const getProductByNameSlug = async nameSlug => {
  const { data } = await axios.get(`${API_END_POINT}/${nameSlug}`);
  return data.data;
};

export const addProduct = async productData => {
  try {
    if (!productData) return console.error("Provide product data");
    const { data } = await axios.post(API_END_POINT, productData);
    return data.data;
  } catch (err) {
    throw err;
  }
};

export const updateProduct = async (productID, productData) => {
  try {
    if (!productID) return console.log("Provide product ID");
    if (!productData) return console.error("Provide product data");

    const { data } = await axios.patch(
      `${API_END_POINT}/${productID}`,
      productData
    );
    return data.data;
  } catch (err) {
    throw err;
  }
};
