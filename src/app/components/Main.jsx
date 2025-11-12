import React from 'react'

const Main = () => {
  return (
    <div className="w-full h-[600px] bg-[#5937E0] rounded-[25px] flex items-center justify-between px-16">
      <div className="text-white max-w-md space-y-5">
        <h1 className="text-4xl font-bold leading-snug">
          Experience the road like never before
        </h1>
        <p className="text-lg text-gray-200">
          Aliquam adipiscing velit semper morbi. Purus non eu cursus porttitor
          tristique et gravida. Quis nunc interdum gravida ullamcorper.
        </p>
        <button className="bg-yellow-400 hover:bg-yellow-500 transition text-white font-semibold px-6 py-3 rounded-lg">
          View all cars
        </button>
      </div>

      <div className="bg-white rounded-2xl shadow-xl p-8 w-[380px]">
        <h2 className="text-2xl font-semibold text-center mb-6 text-black">
          Book your car
        </h2>

        <div className="flex flex-col gap-4">
          <select className="border border-gray-200 rounded-lg py-3 px-4 text-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-400">
            <option>Car type</option>
          </select>

          <select className="border border-gray-200 rounded-lg py-3 px-4 text-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-400">
            <option>Place of rental</option>
          </select>

          <select className="border border-gray-200 rounded-lg py-3 px-4 text-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-400">
            <option>Place of return</option>
          </select>

          <div className="relative">
            <input
              type="date"
              className="w-full border border-gray-200 rounded-lg py-3 px-4 text-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <span className="absolute right-4 top-3.5 text-gray-400">📅</span>
          </div>

          <div className="relative">
            <input
              type="date"
              className="w-full border border-gray-200 rounded-lg py-3 px-4 text-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <span className="absolute right-4 top-3.5 text-gray-400">📅</span>
          </div>

          <button className="bg-yellow-400 text-white font-semibold py-3 rounded-lg hover:bg-yellow-500 transition">
            Book now
          </button>
        </div>
      </div>
    </div>
  )
}

export default Main
