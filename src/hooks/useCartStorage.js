import StorageManager from "../lib/storageManager";

const manager = new StorageManager("__cart_storage__");

export default function useCartStorage() {
  return {
    get cartItems() {
      return manager.value;
    },

    updateCart(newValue) {
      manager.setValue(newValue);
    },
  };
}
