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
      <header className="bg-gray-800 text-white py-4 m-8 ">
        <div className="container mx-auto flex justify-center">
          <h1 className="text-3xl font-bold">All Products</h1>
        </div>
      </header>

      <section
        className="pb-8 mx-8 grid gap-2 md:grid-cols-2 lg:grid-cols-4"
        id="products"
      >
        {" "}
        {products.map((product) => (
          <Product
            key={product._id}
            image={product.image}
            id={product._id}
            title={product.title}
          />
        ))}
      </section>
    </>
  );
};

export default Products;
