import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { publicRequest, userRequest } from "../request-methods";

import Product from "./Product";

const Products = ({ category, filter }) => {
  const [products, setProducts] = useState([]);

  const user = useSelector((store) => store.auth.currentUser);

  const getProducts = async () => {
    try {
      const url = category ? `/products?category=${category}` : "/products"; //For the Home Page
      const response = user
        ? await userRequest.get(url)
        : await publicRequest.get(url);
      setProducts(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <header className="bg-gray-900 text-white py-4 px-4  m-2">
        <div className="container  flex justify-center">
          <h1 className="  md:text-xl lg:text-3xl  font-bold">Products</h1>
        </div>
      </header>

      <section className="mb-1">
        <div className="container ">
          {products.length > 0 ? (
            <div className="grid gap-2 grid-cols-2 lg:grid-cols-5">
              {products.map((product) => (
                <Product
                  key={product._id}
                  id={product._id}
                  title={product.title}
                  image={product.image}
                />
              ))}
            </div>
          ) : (
            <span className="text-red-500 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
              It may take a while to load products due to technical limitations.
              Please wait a minute, and thanks for your precious time.
            </span>
          )}
        </div>
      </section>
    </>
  );
};

export default Products;
