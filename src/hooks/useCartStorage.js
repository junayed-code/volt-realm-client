import { useContext } from "react";
import { CartStorageContext } from "../providers/CartStorageProvider";

export default function useCartStorage() {
  const { cartItems, addItem, removeItem } = useContext(CartStorageContext);
  return { cartItems, addItem, removeItem };
}
