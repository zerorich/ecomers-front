'use client'
import React, { useState, useEffect } from "react";

const Section3 = () => {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://ecomers-back-production.up.railway.app/api/cars');
        
        if (!response.ok) {
          throw new Error('Failed to fetch cars');
        }
        
        const data = await response.json();
        setCars(data.slice(0, 3)); // Show only first 3 cars
      } catch (err) {
        setError(err.message);
        console.error('Error fetching cars:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchCars();
  }, []);

  if (loading) {
    return (
      <div className="mx-10 py-10">
        <div className="flex justify-center items-center h-64">
          <div className="text-gray-500">Loading cars...</div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="mx-10 py-10">
        <div className="flex justify-center items-center h-64">
          <div className="text-red-500">Error: {error}</div>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-10 py-10">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold">Choose the car that suits you</h2>
        <a href="#" className="text-sm font-medium text-gray-700 hover:text-purple-600 flex items-center gap-1">
          View All →
        </a>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cars.map((car) => (
          <div key={car._id || car.id} className="border rounded-2xl shadow-sm p-5">
            <img 
              src={car.image || car.imageUrl || '/car-placeholder.png'} 
              alt={car.name || 'Car'} 
              className="w-full h-36 object-contain mb-4" 
            />
            <div className="flex justify-between items-center mb-1">
              <h3 className="font-semibold text-gray-900">{car.name || 'Mercedes'}</h3>
              <p className="text-purple-600 font-bold text-sm">
                ${car.price || car.pricePerDay || '25'} 
                <span className="text-gray-500 font-normal">/day</span>
              </p>
            </div>
            <p className="text-gray-500 text-sm mb-4">{car.type || car.category || 'Sedan'}</p>
            <div className="flex justify-between text-gray-500 text-sm mb-4">
              <span>{car.transmission || 'Automatic'}</span>
              <span>{car.fuelCapacity || '70L'}</span>
              <span>{car.hasAirConditioner !== false ? 'Air Conditioner' : 'No AC'}</span>
            </div>
            <button className="w-full bg-purple-600 text-white py-2 rounded-xl font-medium hover:bg-purple-700">
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section3;