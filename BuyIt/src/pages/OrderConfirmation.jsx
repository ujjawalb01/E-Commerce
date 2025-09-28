import React from "react";
const checkout = {
  _id: "12323",
  createdAt: new Date(),
  checkoutItems: [
    {
      productId: "1",
      name: "Jacket",
      color: "black",
      size: "M",
      price: 150,
      quantity: 1,
      image: "https://picsum.photos/150?random=1",
    },
    {
      productId: "2",
      name: "T-shit",
      color: "black",
      size: "X",
      price: 190,
      quantity: 2,
      image: "https://picsum.photos/150?random=2",
    },
  ],
  shippingAdress: {
    adress: "62 NOIDA",
    city: "NOIDA",
    country: "India",
  },
};

function OrderConfirmation() {
  return (
    <div className="max-w4xl mx-auto p-6 bg-white">
      <h1 className="text-4xl font-bold text-center text-emerald-700 mb-8">
        Thank You for Your Order!
      </h1>
      {checkout &&  <div className="p-6 rounded-lg border">
        <div className="flex justify-between mb-20 ">
            {/* order id and date */}
            <div>
                <h2 className="text-xl font-semibold">Order ID: {checkout._id}</h2>
                <h2 className="text-gray-500 ">
                    Order Date: {new Date(checkout.createdAt).toLocaleDateString()}
                </h2>
            </div>
        </div>
        </div>}
      
    </div>
  );
}

export default OrderConfirmation;
