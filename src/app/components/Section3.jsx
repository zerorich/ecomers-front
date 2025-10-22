import React from "react";

const Section3 = () => {
  return (
    <div className=" mx-10 py-10">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold">Choose the car that suits you</h2>
        <a href="#" className="text-sm font-medium text-gray-700 hover:text-purple-600 flex items-center gap-1">
          View All →
        </a>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="border rounded-2xl shadow-sm p-5">
          <img src="/car1.png" alt="" className="w-full h-36 object-contain mb-4" />
          <div className="flex justify-between items-center mb-1">
            <h3 className="font-semibold text-gray-900">Mercedes</h3>
            <p className="text-purple-600 font-bold text-sm">$25 <span className="text-gray-500 font-normal">/day</span></p>
          </div>
          <p className="text-gray-500 text-sm mb-4">Sedan</p>
          <div className="flex justify-between text-gray-500 text-sm mb-4">
            <span>Automatic</span>
            <span>70L</span>
            <span>Air Conditioner</span>
          </div>
          <button className="w-full bg-purple-600 text-white py-2 rounded-xl font-medium hover:bg-purple-700">
            View Details
          </button>
        </div>

        <div className="border rounded-2xl shadow-sm p-5">
          <img src="/car2.png" alt="" className="w-full h-36 object-contain mb-4" />
          <div className="flex justify-between items-center mb-1">
            <h3 className="font-semibold text-gray-900">Mercedes</h3>
            <p className="text-purple-600 font-bold text-sm">$50 <span className="text-gray-500 font-normal">/day</span></p>
          </div>
          <p className="text-gray-500 text-sm mb-4">Sport</p>
          <div className="flex justify-between text-gray-500 text-sm mb-4">
            <span>Automatic</span>
            <span>70L</span>
            <span>Air Conditioner</span>
          </div>
          <button className="w-full bg-purple-600 text-white py-2 rounded-xl font-medium hover:bg-purple-700">
            View Details
          </button>
        </div>

        <div className="border rounded-2xl shadow-sm p-5">
          <img src="/car3.png" alt="" className="w-full h-36 object-contain mb-4" />
          <div className="flex justify-between items-center mb-1">
            <h3 className="font-semibold text-gray-900">Mercedes</h3>
            <p className="text-purple-600 font-bold text-sm">$45 <span className="text-gray-500 font-normal">/day</span></p>
          </div>
          <p className="text-gray-500 text-sm mb-4">Sedan</p>
          <div className="flex justify-between text-gray-500 text-sm mb-4">
            <span>Automatic</span>
            <span>70L</span>
            <span>Air Conditioner</span>
          </div>
          <button className="w-full bg-purple-600 text-white py-2 rounded-xl font-medium hover:bg-purple-700">
            View Details
          </button>
        </div>

      </div>
    </div>
  );
};

export default Section3;
