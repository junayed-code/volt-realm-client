import { useState } from "react";
import { MdShoppingCart } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import Card from "../Card";
import { Link } from "react-router-dom";
import slugify from "slugify";
import Button from "../Button";
import { useCartStorage } from "../../hooks";

export default function NavCart() {
  const { cartItems, removeItem } = useCartStorage();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const totalPrice = cartItems.reduce((prev, item) => prev + item.price, 0);

  function handleCartToggle() {
    setIsCartOpen(open => !open);
  }

  function handleRemoveItemToCart(id) {
    removeItem(id);
  }

  return (
    <>
      <label
        tabIndex={0}
        className="btn btn-circle btn-ghost cursor-pointer"
        onClick={handleCartToggle}
      >
        <MdShoppingCart className="w-7 h-7 rounded-full" />
      </label>

      <div
        className={`grid !m-0 fixed left-0 top-0 w-full h-screen z-50 overflow-y-auto overflow-x-hidden ${
          isCartOpen ? "visible" : "invisible"
        }`}
      >
        <div
          onClick={handleCartToggle}
          className="hero-overlay bg-opacity-40"
        ></div>
        <div
          className={`w-full max-w-lg px-5 sm:px-8 py-5 justify-self-end bg-base-100 col-start-1 row-start-1 duration-200 flex flex-col ${
            isCartOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <label className="flex justify-end mb-4">
            <span tabIndex={0} onClick={handleCartToggle}>
              <IoMdClose className="text-3xl cursor-pointer" />
            </span>
          </label>

          <div className="text-xl font-bold flex justify-between">
            <h3>Your cart summary [{cartItems.length}]</h3>
            <p>${totalPrice.toFixed(2)}</p>
          </div>
          <hr className="border-t-2 mt-2 mb-3 border-neutral" />
          <div className="flex-1 flex flex-col gap-4">
            {cartItems.length === 0 && (
              <div className="m-auto text-center">
                <h2 className="text-3xl font-bold text-secondary">
                  Your card is empty
                </h2>
                <span onClick={handleCartToggle}>
                  <Button
                    to="/all-products"
                    className="text-base mt-3 btn-primary"
                  >
                    Continue shopping
                  </Button>
                </span>
              </div>
            )}

            {cartItems?.map(item => (
              <CartItem
                key={item.id}
                cartItem={item}
                onCartToggle={handleCartToggle}
                onRemoveItem={() => handleRemoveItemToCart(item.id)}
              />
            ))}
          </div>

          {cartItems.length > 0 && (
            <>
              <hr className="border-t-2 my-4" />
              <div className="text-right">
                <p className="text-xl flex justify-between mb-1">
                  <span className="font-medium">Discount</span>
                  <span className="font-bold">$00.00</span>
                </p>
                <p className="text-xl flex justify-between">
                  <span className="font-medium">Subtotal</span>
                  <span className="font-bold">${totalPrice.toFixed(2)}</span>
                </p>
                <Button className="text-xl w-56 btn-secondary mt-6">
                  Check Out
                </Button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}

function CartItem({ cartItem = {}, onCartToggle, onRemoveItem }) {
  const { name, image, price } = cartItem;

  return (
    <Card className="card-side rounded-md border border-base-300">
      <Card.Image className="p-2 bg-base-200 basis-[30%]">
        <img
          className="object-contain aspect-square max-h-24"
          src={image}
          alt={name}
        />
      </Card.Image>
      <Card.Body className="px-3 sm:px-5 py-3 basis-[70%] gap-0">
        <Card.Title className="text-base sm:text-xl">
          <Link
            onClick={onCartToggle}
            to={`/products/${slugify(name, { lower: true })}`}
            className="hover:underline underline-offset-2"
          >
            {name}
          </Link>
        </Card.Title>
        <Card.Text className="font-semibold">${price}</Card.Text>

        <Card.Box className="text-right">
          <Button onClick={onRemoveItem}>Remove</Button>
        </Card.Box>
      </Card.Body>
    </Card>
  );
}
