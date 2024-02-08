import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import StripeCheckout from "react-stripe-checkout";
import { useHistory } from "react-router-dom";
import { userRequest } from "../request-methods";
import { resetcart } from "../store/cart-action";
import Navbar from "../layout/Navbar";
import Announcement from "../layout/Announcement";
import Footer from "../layout/Footer";
import CartProduct from "../components/CartProduct";

const ShoppingCart = () => {
  const [stripeToken, setStripeToken] = useState(null);
  const history = useHistory();
  const cart = useSelector((store) => store.cart);
  const user = useSelector((store) => store.auth.currentUser);
  const dispatch = useDispatch();

  const continueShoppingClickHandler = () => {
    history.goBack();
  };

  const onToken = (token) => {
    setStripeToken(token);
  };

  useEffect(() => {
    const checkout = async () => {
      try {
        if (stripeToken && cart.totalPrice > 0) {
          await userRequest.post("/checkout", {
            tokenId: stripeToken.id,
            amount: cart.totalPrice * 100,
            userId: user.userId,
            products: cart.products,
            shipping: "",
          });
          dispatch(resetcart()); // Reset the cart after successful checkout in "/orders"
          history.push("/orders");
        }
      } catch (err) {
        console.log(err);
        // Handle errors here
      }
    };

    checkout();
  }, [stripeToken, cart.totalPrice, history, dispatch]);

  const resetCartHandler = () => {
    dispatch(resetcart()); // Manually reset the cart
  };

  return (
    <>
      <Announcement />
      <Navbar />
      <section className="px-8 py-2">
        <h1 className="uppercase mt-4 mb-8 text-4xl text-center">Your Bag</h1>
        <div className="grid sm:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          <div>
            <button
              onClick={continueShoppingClickHandler}
              className="text-sm lg:text-md cursor-pointer uppercase block p-4 border-2 border-black hover:bg-black hover:text-white transition ease-out duration-500"
            >
              Continue Shopping
            </button>
          </div>
          <div className="flex">
            <p className="mr-4 cursor-pointer">
              Shopping Bag ({cart.totalQantity})
            </p>
          </div>
          <div>
            <StripeCheckout
              name="BigBuy"
              billingAddress
              shippingAddress
              description={`Your total is ${cart.totalPrice}`}
              amount={cart.totalPrice * 100}
              currency="USD"
              token={onToken}
              stripeKey="pk_test_51Oglh9IlF1WUtgeQLtAUPwPZCaPZvJ4GaVkHlrIHlyF2ys4ZzhkLTGDz3DX2kqAzUc5zleCelJdZM0Pa4hUrtJuY00wz5u5HBh"
              disabled={!cart.totalPrice || stripeToken}
            >
              <button className="text-sm lg:text-md cursor-pointer uppercase block p-4 border-2 hover:text-black hover:border-black hover:bg-white bg-black text-white transition ease-out duration-500">
                Checkout Now
              </button>
            </StripeCheckout>
          </div>
        </div>
        <div className="my-12 grid gap-8 lg:grid-cols-[2fr_1fr]">
          <div>
            {cart.products.map((product) => (
              <CartProduct key={product._id} product={product} />
            ))}
          </div>
          <div>
            <div className="border rounded-xl p-4">
              <h1 className="uppercase text-4xl mb-8">Order Summary</h1>
              <div className="flex justify-between mb-8">
                <span className="capitalize">Subtotal</span>
                <span>$ {cart.totalPrice}</span>
              </div>
              <div className="flex justify-between mb-8">
                <span className="capitalize">Estimated Shipping</span>
                <span>$ 00.00</span>
              </div>
              <div className="flex justify-between mb-8">
                <span className="capitalize">Shipping Discount</span>
                <span>-$ 00.00</span>
              </div>
              <div className="flex justify-between mb-8">
                <span className="capitalize font-bold text-2xl">Total</span>
                <span className="font-bold text-2xl">$ {cart.totalPrice}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center mb-8">
          <button
            onClick={resetCartHandler}
            className="text-sm lg:text-md cursor-pointer uppercase block p-4 border-2 border-black hover:bg-red-500 hover:text-white transition ease-out duration-500"
          >
            Reset Cart
          </button>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ShoppingCart;
