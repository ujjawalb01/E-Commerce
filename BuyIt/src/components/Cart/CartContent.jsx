import React from "react";
import { RiDeleteBin3Line } from "react-icons/ri";

function CartContent() {
  const cartProduct = [
    {
      productid: 1,
      name: "T-shirt",
      size: "M",
      color: "Red",
      quantity: 1,
      price: 299,
      image: "https://picsum.photos/200?random=1",
    },
    {
      productid: 2,
      name: "Jeans",
      size: "L",
      color: "Blue",
      quantity: 1,
      price: 400,
      image: "https://picsum.photos/200?random=2",
    },
  ];
  return (
    <div>
      {cartProduct.map((product, index) => (
        <div
          key={index}
          className="flex items-start justify-between py-4 border-b"
        >
          <div className="flex items-start">
            <img
              src={product.image}
              alt={product.name}
              className="w-20 h-24 object-cover mr-4 rounded"
            />
            <div className="text-sm text-gray-500">
              <h3>{product.name}</h3>
              <p>
                size:{product.size} color:{product.color}{" "}
              </p>
              <div className="flex items-center mt-2">
                <button className="border rounded px-2 py-1 text-xl font-medium">
                  -
                </button>
                <span className="mx-4"> {product.quantity} </span>
                <button className="border rounded px-2 py-1 text-xl font-medium">
                  +
                </button>
              </div>
            </div>
            
          </div>
          <div className="flex items-center justify-end gap-4">
              <p className="font-semibold">₹{product.price.toLocaleString()}</p>
              <button>
                <RiDeleteBin3Line className=" hover:text-red-600 text-lg h-6 w-6 mt-2 text-[#32174d]" />
              </button>
            </div>
        </div>
      ))}
    </div>
  );
}

export default CartContent;
