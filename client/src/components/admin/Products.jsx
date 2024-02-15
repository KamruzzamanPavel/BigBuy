import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useUserRequest } from "../../req_m";

import Product from "./Product";

const Products = () => {
  const userRequest = useUserRequest();
  const [products, setProducts] = useState([]);

  const user = useSelector((store) => store.auth.currentUser);

  const getProducts = async () => {
    try {
      const url = "/products"; //For the Home Page
      const response = await userRequest.get(url);
      setProducts(response.data);
      console.log("products:" + response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);
  // Update handler
  const handleUpdate = async (productId, updatedProductData) => {
    try {
      const url = `/products/${productId}`;
      await userRequest.patch(url, updatedProductData);
      // If the update is successful, update the local state to reflect changes
      setProducts((prevProducts) =>
        prevProducts.map((product) =>
          product._id === productId
            ? { ...product, ...updatedProductData }
            : product
        )
      );
    } catch (error) {
      console.log(error);
    }
  };

  // Delete handler
  const handleDelete = async (productId) => {
    try {
      const url = `/products/${productId}`;
      await userRequest.delete(url);
      // If the deletion is successful, update the local state to remove the deleted product
      setProducts((prevProducts) =>
        prevProducts.filter((product) => product._id !== productId)
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="text-center mt-8 mb-6">
        <h1 className="text-4xl font-bold text-gray-800">
          <span>
            Products:
            <span className="text-green-500">{products.length}</span>
          </span>
        </h1>
        <div className="w-full h-1 bg-gray-600 m-8 mt-2  "></div>
      </div>

      <section
        className="pb-8 m-8 mb-0 grid gap-2 md:grid-cols-2 lg:grid-cols-4"
        id="products"
      >
        {products ? (
          products.map((product) => (
            <Product
              key={product._id}
              product={product}
              onUpdate={handleUpdate}
              onDelete={handleDelete}
            />
          ))
        ) : (
          <span className="text-red-500 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
            It may take a while to load products due to technical limitations.
            Please wait a minute, and thanks for your precious time.
          </span>
        )}
      </section>
    </>
  );
};

export default Products;
