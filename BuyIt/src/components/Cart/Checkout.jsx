import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PaypalButton from "./PaypalButton";
const cart = {
  products: [
    {
      name: "Stylish Jacket",
      size: "M",
      color: "Black",
      price: 120,
      image: "https://picsum.photos/150?random=1",
    },
    {
      name: "Casual Sneakers",
      size: "42",
      color: "White",
      price: 75,
      image: "https://picsum.photos/150?random=2",
    },
  ],
  totalPrice: 195,
};

function Checkout() {
  const navigate = useNavigate();
  const [checkoutId, setCheckoutid] = useState(null);
  const [shippingAdress, setShippingAdress] = useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    postalCode: "",
    country: "",
    phone: "",
  });

  const handleCreateCheckout = (e) => {
    e.preventDefault();
    setCheckoutid(1234);
  };

  const handlePaymentSuccess = (details) => {
    console.log("Payment Done", details);
    navigate("/order-confirmation");
  };
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto py-10 px-6 tracking-tighter">
      {/* left sctio */}
      <div className="bg-white rounded-lg p-6 ">
        <h2 className="text-2xl uppercase mb-6">Checkout</h2>
        <form onSubmit={handleCreateCheckout} action="">
          <h3 className="text-lg mb-4 ">Contact Details</h3>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              value="test@em.com"
              className="w-full p-2 border rounded  "
              disabled
            />
          </div>
          <h3 className="text-lg mb-4 ">Delivery</h3>
          <div className="mb-4 grid grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 ">First Name</label>
              <input
                type="text"
                value={shippingAdress.firstName}
                onChange={(e) =>
                  setShippingAdress({
                    ...shippingAdress,
                    firstName: e.target.value,
                  })
                }
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 ">Last Name</label>
              <input
                type="text"
                value={shippingAdress.lastName}
                onChange={(e) =>
                  setShippingAdress({
                    ...shippingAdress,
                    lastName: e.target.value,
                  })
                }
                className="w-full p-2 border rounded"
                required
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 ">Adress</label>
            <input
              type="text"
              value={shippingAdress.address}
              onChange={(e) =>
                setShippingAdress({
                  ...shippingAdress,
                  address: e.target.value,
                })
              }
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div className="mb-4 grid grid-cols-2 gap-4 ">
            <div>
              <label className="block text-gray-700 ">City</label>
              <input
                type="text"
                value={shippingAdress.city}
                onChange={(e) =>
                  setShippingAdress({
                    ...shippingAdress,
                    city: e.target.value,
                  })
                }
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 ">Postal Code</label>
              <input
                type="text"
                value={shippingAdress.postalCode}
                onChange={(e) =>
                  setShippingAdress({
                    ...shippingAdress,
                    postalCode: e.target.value,
                  })
                }
                className="w-full p-2 border rounded"
                required
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 ">Country</label>
            <input
              type="text"
              value={shippingAdress.country}
              onChange={(e) =>
                setShippingAdress({
                  ...shippingAdress,
                  country: e.target.value,
                })
              }
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 ">Phone</label>
            <input
              type="tel"
              value={shippingAdress.phone}
              onChange={(e) =>
                setShippingAdress({ ...shippingAdress, phone: e.target.value })
              }
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div className="mt-6 ">
            {!checkoutId ? (
              <button
                type="submit"
                className="w-full bg-black text-white  py-3 rounded"
              >
                Continue to Payment
              </button>
            ) : (
              <div>
                <h3 className="text-lg mb-4 ">Pay with Paypal</h3>
                {/* Paypal compnent */}
                <PaypalButton
                  amount={100}
                  onSuccess={handlePaymentSuccess}
                  onError={(err) => alert("Payment Failed..")}
                />
              </div>
            )}
          </div>
        </form>
      </div>
      {/* right section */}
      <div className="bg-gray-50 p-6 rounded-lg ">
        <h3 className="text--lf mb-4 ">Order Summary</h3>
        <div className="border-t py-4 mb-4">
          {cart.products.map((product, index) => (
            <div
              key={index}
              className="flex items-start justify-between py-2 border-b"
            >
              <div className="flex items-start">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-24 object-cover mr-4 "
                />
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Checkout;
