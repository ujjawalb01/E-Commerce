import React from "react";
import MyOrders from "./MyOrders";

function Profile() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-grow container mx-auto p-4 md:p-6">
        <div className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0">
          {/* left sec */}

          <div className="w-full md:w-1/3 lg:w-1/4 shadow-md rounded-lg p-6">
            <h1 className="text-2xl md:text-3xl font-bold mb-4">
              Ujjawal Sharma
            </h1>
            <p className="text-lg text-gray-600 mb-4 ">ujjawaltest@gmail.com</p>
            <button className="w-full bg-red-500 text-white py-2 px-4 rounded hover:bg-red-500">
              Logout
            </button>
          </div>
          {/* right sec */}
          <div className="w-full md:w-2/3 lg:h-3/4">
          <MyOrders/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
