export default class StorageManager {
  constructor(key = "", value = []) {
    if (typeof localStorage === "undefined") {
      throw new Error("Local storage isn't supported.");
    }
    if (!key) throw new Error("You must provide a key");
    if (typeof key !== "string")
      throw new Error("The key not the type of string.");

    Object.defineProperty(this, "key", {
      writable: false,
      value: key,
    });

    if (value.length) this.setValue(value);
  }

  get value() {
    const value = localStorage.getItem(this.key);
    return JSON.parse(value) || [];
  }

  setValue(value) {
    if (!Array.isArray(value)) {
      throw Error("Please provide array type value");
    }

    // update the storage value
    const valueJSON = JSON.stringify(value);
    localStorage.setItem(this.key, valueJSON);
  }

  clearStorage() {
    localStorage.removeItem(this.key);
  }
}
