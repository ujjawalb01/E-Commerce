import React from "react";
const checkout = {
  _id: "12323",
  createdAt: new Date(),
  checkoutItems: [
    {
      productId: "1",
      name: "Jacket",
      color: "Black",
      size: "M",
      price: 150,
      quantity: 1,
      image: "https://picsum.photos/150?random=1",
    },
    {
      productId: "2",
      name: "T-shit",
      color: "Blue",
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
  const calculaEstimatedDelivery = (createdAt) => {
    const orderDate = new Date(createdAt);
    orderDate.setDate(orderDate.getDate() + 10);
    return orderDate.toLocaleDateString();
  };

  return (
    <div className="max-w4xl mx-auto p-6 bg-white">
      <h1 className="text-4xl font-bold text-center text-emerald-700 mb-8">
        Thank You for Your Order!
      </h1>
      {checkout && (
        <div className="p-6 rounded-lg border">
          <div className="flex justify-between mb-20 ">
            {/* order id and date */}
            <div>
              <h2 className="text-xl font-semibold">
                Order ID: {checkout._id}
              </h2>
              <p className="text-gray-500 ">
                Order Date: {new Date(checkout.createdAt).toLocaleDateString()}
              </p>
            </div>
            {/* Estimated Del */}
            <div>
              <p className="text-emerald-700 text-sm">
                Estimated Deliver:{" "}
                {calculaEstimatedDelivery(checkout.createdAt)}
              </p>
            </div>
          </div>
          {/* order items */}

          <div className="mb-20 ">
            {checkout.checkoutItems.map((item) => (
              <div key={item.productId} className="flex items-center mb-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h16 object-cover rounded-md mr-4"
                />
                <div>
                  <h4 className="text-md font-semibold ">{item.name}</h4>
                  <p className="text-sm text-gray-500 ">
                    {item.color} | {item.size}
                  </p>
                </div>
                <div className="ml-auto text-right ">
                  <p className="text-md' ">${item.price}</p>
                  <p className="text-sm text-gray-500 ">
                    Qty :{item.quantity}{" "}
                  </p>
                </div>
              </div>
            ))}
          </div>
          {/* pymnt del  info*/}
          <div className="grid grid-cols-2 gap-8">
            {/* payment */}
            <div>
              <h4 className="text-lg font-semibold mb-2">Payment</h4>
              <p className="text-gray-600 ">Payment Gateway</p>
            </div>
            {/* del info */}
            <div>
                <h4 className="text-lg font-semibold mb-2 ">Delivery</h4>
                <p className="text-gray-600 ">{checkout.shippingAdress.adress}</p>
                <p className="text-gray-600 ">{checkout.shippingAdress.city},{" "} {checkout.shippingAdress.country}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default OrderConfirmation;
