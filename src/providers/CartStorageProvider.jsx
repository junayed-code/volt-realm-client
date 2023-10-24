import { useState, createContext } from "react";
import StorageManager from "../lib/storageManager";

const manager = new StorageManager("__cart_storage__");

export const CartStorageContext = createContext();

export default function CartStorageProvider({ children }) {
  const [cartItems, setCartItems] = useState(manager.value);

  const addItem = item => {
    let id;
    if (typeof crypto === "object") {
      id = crypto.randomUUID();
    } else {
      id = Date.now();
    }

    const newItem = { id, ...item };
    setCartItems(items => {
      const newItems = [...items, newItem];
      manager.setValue(newItems);
      return newItems;
    });
  };

  const removeItem = itemID => {
    setCartItems(items => {
      const restItems = items.filter(item => item.id !== itemID);
      manager.setValue(restItems);
      return restItems;
    });
  };

  const value = { cartItems, addItem, removeItem };

  return (
    <CartStorageContext.Provider value={value}>
      {children}
    </CartStorageContext.Provider>
  );
}
