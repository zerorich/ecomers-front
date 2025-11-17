'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  Settings,
  Wind,
  Fuel,
} from 'lucide-react';

const categories = [
  { id: 'all', label: 'All vehicles' },
  { id: 'sedan', label: 'Sedan' },
  { id: 'cabriolet', label: 'Cabriolet' },
  { id: 'pickup', label: 'Pickup' },
  { id: 'suv', label: 'SUV' },
  { id: 'minivan', label: 'Minivan' },
];

export const vehicles = [
  {
    id: 1,
    name: 'Mercedes-Benz E-Class',
    type: 'Sedan',
    price: 55,
    gear: 'Automatic',
    fuel: 'Petrol',
    ac: true,
    doors: 4,
    seats: 5,
    distance: 500,
    image:
      'https://avatars.mds.yandex.net/get-verba/997355/2a00000187e6a56fc2d2c95326c2b0135d3c/456x342',
  },
  {
    id: 2,
    name: 'Mercedes-AMG GT',
    type: 'Cabriolet',
    price: 95,
    gear: 'Automatic',
    fuel: 'Petrol',
    ac: true,
    doors: 2,
    seats: 2,
    distance: 400,
    image:
      'https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 3,
    name: 'Toyota Camry',
    type: 'Sedan',
    price: 45,
    gear: 'Automatic',
    fuel: 'Petrol',
    ac: true,
    doors: 4,
    seats: 5,
    distance: 600,
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0Fu6PUKhHgxr0kelDByS5_kC3cvBCzriNUg&s',
  },
  {
    id: 4,
    name: 'Porsche Cayenne',
    type: 'SUV',
    price: 90,
    gear: 'Automatic',
    fuel: 'Petrol',
    ac: true,
    doors: 4,
    seats: 5,
    distance: 550,
    image:
      'https://greats.gallery/upload/resize_cache/iblock/044/670_540_0/j1m8ssq32brk9am0f3arxfmyaqyyafjr.jpg',
  },
  {
    id: 5,
    name: 'Toyota Hilux',
    type: 'Pickup',
    price: 65,
    gear: 'Manual',
    fuel: 'Diesel',
    ac: true,
    doors: 4,
    seats: 5,
    distance: 700,
    image:
      'https://carsweek.ru/upload/iblock/1f2/1f2a7c94960099db2492f09a5bbb7220.jpg',
  },
  {
    id: 6,
    name: 'Mercedes V-Class',
    type: 'Minivan',
    price: 75,
    gear: 'Automatic',
    fuel: 'Diesel',
    ac: true,
    doors: 4,
    seats: 7,
    distance: 500,
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ47WToeyyBmW3TQhorOJ54ZaCzI7Wb1cX-rw&s',
  },
  {
    id: 7,
    name: 'Porsche Macan',
    type: 'SUV',
    price: 85,
    gear: 'Automatic',
    fuel: 'Petrol',
    ac: true,
    doors: 4,
    seats: 5,
    distance: 480,
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVvAPSEy_HqJzsaBRIqSa78pZXr8s-_o_iHw&s',
  },
  {
    id: 8,
    name: 'Mercedes-Maybach S650',
    type: 'Sedan',
    price: 120,
    gear: 'Automatic',
    fuel: 'Petrol',
    ac: true,
    doors: 4,
    seats: 5,
    distance: 400,
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVFZPB4Z8eXmULvtwswN3IdGwQEl_dw68kug&s',
  },
  {
    id: 9,
    name: 'Mazda MX-5',
    type: 'Cabriolet',
    price: 70,
    gear: 'Manual',
    fuel: 'Petrol',
    ac: true,
    doors: 2,
    seats: 2,
    distance: 450,
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMku41vVWPGmYlRGOzBZ3xAImi27oLj6w04w&s',
  },
];

export default function Page() {
  const [active, setActive] = useState('all');

  const filteredVehicles =
    active === 'all'
      ? vehicles
      : vehicles.filter(
          (v) => v.type.toLowerCase() === active.toLowerCase()
        );

  return (
    <main className="min-h-screen bg-white px-6 py-10">
      <h1 className="text-center font-[700] text-[50px] mb-8 text-[#000000]">
        Select a vehicle group
      </h1>

      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActive(cat.id)}
            className={`px-5 py-2 rounded-full border transition-all ${
              active === cat.id
                ? 'bg-violet-600 text-white border-violet-600'
                : 'border-gray-300 text-gray-700 hover:bg-violet-100'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {filteredVehicles.map((v) => (
          <div
            key={v.id}
            className="bg-gray-50 rounded-2xl shadow-sm hover:shadow-md transition p-5 flex flex-col"
          >
            <div className="rounded-xl overflow-hidden h-40 mb-4">
              <img
                src={v.image}
                alt={v.name}
                className="w-full h-full object-cover"
              />
            </div>

            <h2 className="font-semibold text-lg">{v.name}</h2>
            <p className="text-gray-500 text-sm mb-1">{v.type}</p>
            <p className="text-violet-600 font-semibold text-sm mb-3">
              ${v.price}{' '}
              <span className="text-gray-500 font-normal">per day</span>
            </p>

            <div className="flex items-center gap-3 text-gray-600 text-sm mb-4 flex-wrap">
              <div className="flex items-center gap-1">
                <Settings size={14} /> {v.gear}
              </div>
              <div className="flex items-center gap-1">
                <Fuel size={14} /> {v.fuel}
              </div>
              {v.ac && (
                <div className="flex items-center gap-1">
                  <Wind size={14} /> Air Conditioner
                </div>
              )}
            </div>

            <Link
              href={`/vehicles/${v.id}`}
              className="mt-auto bg-violet-600 hover:bg-violet-700 text-white text-sm py-2 rounded-md text-center transition"
            >
              View Details
            </Link>
          </div>
        ))}

        {filteredVehicles.length === 0 && (
          <p className="text-center text-gray-500 col-span-full">
            No vehicles found in this category.
          </p>
        )}
      </div>

      <section className="bg-gray-50 max-w-[1296px] rounded-2xl shadow-sm mx-auto mb-10 p-4 flex flex-wrap justify-center items-center gap-10 mt-14">
        <div className="bg-[#FAFAFA] px-[40px] flex justify-between w-full items-center mx-auto mt-10 h-[174px] rounded-[20px]">
          <img src="/toyota.png" alt="" />
          <img src="/ford.png" alt="" />
          <img src="/mercedes.png" alt="" />
          <img src="/jeep.png" alt="" />
          <img src="/bmw.png" alt="" />
          <img src="/audio.png" alt="" />
        </div>
      </section>
    </main>
  );
}
