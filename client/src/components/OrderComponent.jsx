import React from "react";

function OrderComponent({ orderData }) {
  if (!orderData || !orderData.createdAt || !orderData.products) {
    return <div>Loading...</div>;
  }

  // Format date
  const createdAtDate = new Date(orderData.createdAt).toLocaleString();

  // Calculate total price
  const totalPrice = orderData.products.reduce((acc, product) => {
    return acc + parseInt(product.quantity) * 1000; // Assuming the price per product is $1000
  }, 0);

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md w-80 mx-auto border-2 border-solid border-blue-500 p-4">
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-2">Order Details</h2>
        <p>
          <strong>Shipping:</strong> {orderData.shipping}
        </p>
        <p>
          <strong>Status:</strong> {orderData.status}
        </p>
        <p className="text-sm mt-2 text-gray-600">{createdAtDate}</p>
      </div>
      <div className="bg-gray-100 p-4">
        <h3 className="text-lg font-semibold mb-2">Orders</h3>
        {orderData.products.map((product, index) => (
          <div key={index} className="flex justify-between items-center mb-2">
            <p>{product._id}</p>
            <p>{product.quantity}</p>
          </div>
        ))}
        <hr className="my-2" />
        <p className="font-semibold">Total Price: ${totalPrice}</p>
      </div>
    </div>
  );
}

export default OrderComponent;