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
      <section
        className="pb-8 m-8 mb-0 grid gap-2 md:grid-cols-2 lg:grid-cols-4"
        id="products"
      >
        {" "}
        {products.map((product) => (
          <Product
            key={product._id}
            product={product}
            onUpdate={handleUpdate}
            onDelete={handleDelete}
          />
        ))}
      </section>
    </>
  );
};

export default Products;
