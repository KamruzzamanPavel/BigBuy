import React, { useState, useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import StripeCheckout from "react-stripe-checkout";
import { useHistory } from "react-router-dom";
import { resetcart } from "../store/cart-action";
import { userRequest } from "../request-methods";

import Navbar from "../layout/Navbar";
import Announcement from "../layout/Announcement";
import Footer from "../layout/Footer";
import CartProduct from "../components/CartProduct";

const ShoppingCart = () => {
  const dispatch = useDispatch();
  const [stripeToken, setStripeToken] = useState(null);
  const history = useHistory();
  const cart = useSelector((store) => store.cart);

  const continueShoppingClickHandler = () => {
    history.goBack();
  };

  const onToken = (token) => {
    setStripeToken(token);
    console.log(token);
  };

  useEffect(() => {
    const checkout = async () => {
      try {
        await userRequest.post("/checkout", {
          tokenId: stripeToken.id,
          amount: cart.totalPrice * 100,
        });
        history.push("/orders");
      } catch (err) {
        console.log(err);
      }
    };
    stripeToken && cart.totalPrice > 1 && checkout();
  }, [stripeToken]);
  return (
    <>
      <Navbar />
      <section className="px-8 py-4">
        <h1 className="uppercase mt-4 mb-8 text-4xl text-center">your bag</h1>
        <div className="grid sm:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          <div>
            <a
              onClick={continueShoppingClickHandler}
              className="text-sm lg:text-md cursor-pointer uppercase block p-4 border-2 border-black hover:bg-black hover:text-white transition ease-out duration-500"
            >
              continue shopping
            </a>
          </div>
          <div className="flex">
            <p className="mr-4 cursor-pointer">
              Shopping Bag ({cart.totalQantity})
            </p>
            {/* <a className='underline cursor-pointer'>Your Wishlist (0)</a> */}
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
            >
              <a className="text-sm lg:text-md cursor-pointer uppercase block p-4 border-2 hover:text-black hover:border-black hover:bg-white bg-black text-white transition ease-out duration-500">
                checkout now
              </a>
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
              <h1 className="uppercase text-4xl mb-8">order summary</h1>
              <div className="flex justify-between mb-8">
                <span className="capitalize">subtotal</span>
                <span>$ {cart.totalPrice}</span>
              </div>
              <div className="flex justify-between mb-8">
                <span className="capitalize">estimated shipping</span>
                <span>$ 00.00</span>
              </div>
              <div className="flex justify-between mb-8">
                <span className="capitalize">shipping discount</span>
                <span>-$ 00.00</span>
              </div>
              <div className="flex justify-between mb-8">
                <span className="capitalize font-bold text-2xl">Total</span>
                <span className="font-bold text-2xl">$ {cart.totalPrice}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="flex justify-center mb-8">
        <a
          onClick={() => {
            dispatch(resetcart());
            continueShoppingClickHandler();
          }}
          className="text-sm lg:text-md cursor-pointer uppercase block p-4 border-2 border-black hover:bg-red-500 hover:text-white transition ease-out duration-500"
        >
          Reset Cart
        </a>
      </div>
      <Footer />
    </>
  );
};

export default ShoppingCart;
