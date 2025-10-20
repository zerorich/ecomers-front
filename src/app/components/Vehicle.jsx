'use client';

import { useState } from 'react';
import {
  Settings,
  Wind,
  Fuel,
  CheckCircle2,
} from 'lucide-react';

const categories = [
  { id: 'all', label: 'All vehicles' },
  { id: 'sedan', label: 'Sedan' },
  { id: 'cabriolet', label: 'Cabriolet' },
  { id: 'pickup', label: 'Pickup' },
  { id: 'suv', label: 'SUV' },
  { id: 'minivan', label: 'Minivan' },
];

const vehicles = [
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
    image: 'https://images.unsplash.com/photo-1616781137294-3b5cbb3a1db7?auto=format&fit=crop&w=800&q=80',
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
    image: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=800&q=80',
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
    image: 'https://images.unsplash.com/photo-1571607388263-4a46a575d846?auto=format&fit=crop&w=800&q=80',
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
    image: 'https://images.unsplash.com/photo-1614436163996-22ca0f224b25?auto=format&fit=crop&w=800&q=80',
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
    image: 'https://images.unsplash.com/photo-1616772743214-1f28a8acaf75?auto=format&fit=crop&w=800&q=80',
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
    image: 'https://images.unsplash.com/photo-1592194996308-7b43878e84a6?auto=format&fit=crop&w=800&q=80',
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
    image: 'https://images.unsplash.com/photo-1617142023367-ef7b964b4b36?auto=format&fit=crop&w=800&q=80',
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
    image: 'https://images.unsplash.com/photo-1619024241608-0f909c3d5efc?auto=format&fit=crop&w=800&q=80',
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
    image: 'https://images.unsplash.com/photo-1602407294553-6cf2409b0e2f?auto=format&fit=crop&w=800&q=80',
  },
];

export default function Page() {
  const [active, setActive] = useState('all');
  const [selected, setSelected] = useState(null);

  const filteredVehicles =
    active === 'all'
      ? vehicles
      : vehicles.filter(
        (v) => v.type.toLowerCase() === active.toLowerCase()
      );

  return (
    <main className="min-h-screen bg-white px-6 py-10">
      <h1 className="text-center text-2xl md:text-3xl font-bold mb-8">
        Select a vehicle group
      </h1>

      {/* Brand logos section */}


      {/* Category buttons */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActive(cat.id)}
            className={`px-5 py-2 rounded-full border transition-all ${active === cat.id
                ? 'bg-violet-600 text-white border-violet-600'
                : 'border-gray-300 text-gray-700 hover:bg-violet-100'
              }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Vehicle cards */}
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

            <button
              onClick={() => setSelected(v)}
              className="mt-auto bg-violet-600 hover:bg-violet-700 text-white text-sm py-2 rounded-md transition"
            >
              View Details
            </button>
          </div>
        ))}

        {filteredVehicles.length === 0 && (
          <p className="text-center text-gray-500 col-span-full">
            No vehicles found in this category.
          </p>
        )}
      </div>

      {/* Modal */}
      {selected && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-6 w-full max-w-4xl relative">
            <button
              onClick={() => setSelected(null)}
              className="absolute top-3 right-3 text-gray-500 hover:text-black text-lg"
            >
              ✕
            </button>

            <h2 className="text-2xl font-bold mb-1">{selected.name}</h2>
            <p className="text-violet-600 font-semibold mb-4">
              ${selected.price} <span className="text-gray-500">/ day</span>
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <div className="rounded-xl overflow-hidden h-52 mb-4">
                  <img
                    src={selected.image}
                    alt={selected.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-3">
                  Technical Specification
                </h3>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <Spec label="Gear Box" value={selected.gear} />
                  <Spec label="Fuel" value={selected.fuel} />
                  <Spec label="Doors" value={selected.doors} />
                  <Spec
                    label="Air Conditioner"
                    value={selected.ac ? 'Yes' : 'No'}
                  />
                  <Spec label="Seats" value={selected.seats} />
                  <Spec label="Distance" value={`${selected.distance} km`} />
                </div>

                <button className="mt-5 w-full bg-violet-600 hover:bg-violet-700 text-white py-2 rounded-md">
                  Rent a car
                </button>

                <h3 className="font-semibold text-lg mt-6 mb-2">
                  Car Equipment
                </h3>
                <div className="grid grid-cols-2 gap-2 text-sm text-gray-700">
                  {['ABS', 'Air Bags', 'Cruise Control', 'Air Conditioner'].map(
                    (eq, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <CheckCircle2 size={14} className="text-violet-600" />{' '}
                        {eq}
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <section className="bg-gray-50 rounded-2xl shadow-sm max-w-4xl mx-auto mb-10 p-4 flex flex-wrap justify-center items-center gap-10 mt-14">
        <section className="bg-gray-50 rounded-2xl shadow-sm max-w-4xl mx-auto mb-10 p-6 flex flex-wrap justify-center items-center gap-10 mt-14">
          <img src="/logos/toyota.png" alt="Toyota" className="h-10 object-contain" />
          <img src="/logos/ford.png" alt="Ford" className="h-8 object-contain" />
          <img src="/logos/mercedes.png" alt="Mercedes" className="h-9 object-contain" />
          <img src="/logos/jeep.png" alt="Jeep" className="h-8 object-contain" />
          <img src="/logos/bmw.png" alt="BMW" className="h-9 object-contain" />
          <img src="/logos/audi.png" alt="Audi" className="h-6 object-contain" />
        </section>

      </section>
    </main>
  );
}

function Spec({ label, value }) {
  return (
    <div className="bg-gray-100 rounded-lg p-3 flex flex-col">
      <span className="font-medium text-gray-700">{label}</span>
      <p className="text-gray-600">{value}</p>
    </div>
  );
}
