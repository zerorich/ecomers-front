'use client';

import React, { useState } from 'react';

const Main = () => {
  const [formData, setFormData] = useState({
    carType: '',
    rentalPlace: '',
    returnPlace: '',
    startDate: '',
    endDate: ''
  });
  
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async () => {
    setLoading(true);
    setMessage({ type: '', text: '' });

    // Validatsiya
    if (!formData.carType || !formData.rentalPlace || !formData.returnPlace || !formData.startDate || !formData.endDate) {
      setMessage({ type: 'error', text: 'Iltimos, barcha maydonlarni to\'ldiring' });
      setLoading(false);
      return;
    }

    try {
      const response = await fetch('https://ecomers-back-production.up.railway.app/api/bookings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          car_type: formData.carType,
          rental_location: formData.rentalPlace,
          return_location: formData.returnPlace,
          start_date: formData.startDate,
          end_date: formData.endDate
        })
      });

      const data = await response.json();

      if (response.ok) {
        setMessage({ type: 'success', text: 'Buyurtma muvaffaqiyatli yuborildi!' });
        // Formani tozalash
        setFormData({
          carType: '',
          rentalPlace: '',
          returnPlace: '',
          startDate: '',
          endDate: ''
        });
      } else {
        setMessage({ type: 'error', text: data.message || 'Xatolik yuz berdi' });
      }
    } catch (error) {
      setMessage({ type: 'error', text: 'Serverga ulanishda xatolik yuz berdi' });
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

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
        
        {message.text && (
          <div className={`mb-4 p-3 rounded-lg text-sm ${
            message.type === 'success' 
              ? 'bg-green-100 text-green-700 border border-green-300' 
              : 'bg-red-100 text-red-700 border border-red-300'
          }`}>
            {message.text}
          </div>
        )}
        
        <div className="flex flex-col gap-4">
          <select 
            name="carType"
            value={formData.carType}
            onChange={handleChange}
            className="border border-gray-200 rounded-lg py-3 px-4 text-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          >
            <option value="">Car type</option>
            <option value="sedan">Sedan</option>
            <option value="suv">SUV</option>
            <option value="hatchback">Hatchback</option>
            <option value="luxury">Luxury</option>
          </select>
          
          <select 
            name="rentalPlace"
            value={formData.rentalPlace}
            onChange={handleChange}
            className="border border-gray-200 rounded-lg py-3 px-4 text-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          >
            <option value="">Place of rental</option>
            <option value="tashkent">Tashkent</option>
            <option value="samarkand">Samarkand</option>
            <option value="bukhara">Bukhara</option>
            <option value="khiva">Khiva</option>
          </select>
          
          <select 
            name="returnPlace"
            value={formData.returnPlace}
            onChange={handleChange}
            className="border border-gray-200 rounded-lg py-3 px-4 text-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          >
            <option value="">Place of return</option>
            <option value="tashkent">Tashkent</option>
            <option value="samarkand">Samarkand</option>
            <option value="bukhara">Bukhara</option>
            <option value="khiva">Khiva</option>
          </select>
          
          <div className="relative">
            <input
              type="date"
              name="startDate"
              value={formData.startDate}
              onChange={handleChange}
              className="w-full border border-gray-200 rounded-lg py-3 px-4 text-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <span className="absolute right-4 top-3.5 text-gray-400">📅</span>
          </div>
          
          <div className="relative">
            <input
              type="date"
              name="endDate"
              value={formData.endDate}
              onChange={handleChange}
              className="w-full border border-gray-200 rounded-lg py-3 px-4 text-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <span className="absolute right-4 top-3.5 text-gray-400">📅</span>
          </div>
          
          <button 
            onClick={handleSubmit}
            disabled={loading}
            className="bg-yellow-400 text-white font-semibold py-3 rounded-lg hover:bg-yellow-500 transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Loading...' : 'Book now'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Main;