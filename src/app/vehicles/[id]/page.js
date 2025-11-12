'use client';

import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { Settings, Wind, Fuel, CheckCircle2 } from 'lucide-react';

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
        image: 'https://avatars.mds.yandex.net/get-verba/997355/2a00000187e6a56fc2d2c95326c2b0135d3c/456x342',
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
        image: 'https://sales.mercedes-autoforum-spb.ru/images/gallery/gallery_model_cars/1_30.jpg',
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
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0Fu6PUKhHgxr0kelDByS5_kC3cvBCzriNUg&s',
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
        image: 'https://greats.gallery/upload/resize_cache/iblock/044/670_540_0/j1m8ssq32brk9am0f3arxfmyaqyyafjr.jpg',
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
        image: 'https://carsweek.ru/upload/iblock/1f2/1f2a7c94960099db2492f09a5bbb7220.jpg',
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
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ47WToeyyBmW3TQhorOJ54ZaCzI7Wb1cX-rw&s',
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
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVvAPSEy_HqJzsaBRIqSa78pZXr8s-_o_iHw&s',
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
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVFZPB4Z8eXmULvtwswN3IdGwQEl_dw68kug&s',
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
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMku41vVWPGmYlRGOzBZ3xAImi27oLj6w04w&s',
    },
];

export default function VehicleDetailsPage({ params }) {
    const id = useMemo(() => Number(params?.id), [params]);
    const vehicle = useMemo(
        () => vehicles.find((v) => v.id === id) || vehicles[0],
        [id]
    );

    const gallerySources = useMemo(() => {
        const base = vehicle.image;
        const provided = Array.isArray(vehicle.gallery) && vehicle.gallery.length > 0
            ? vehicle.gallery
            : [1, 2, 3].map((n) => `${base}${base.includes('?') ? '&' : '?'}sig=${n}`);
        // Ensure the main image is included first and limit to 3 thumbs total
        const withCoverFirst = [base, ...provided.filter((u) => u !== base)];
        return withCoverFirst.slice(0, 3);
    }, [vehicle]);

    const [activeImg, setActiveImg] = useState(gallerySources[0]);

    useEffect(() => {
        setActiveImg(gallerySources[0]);
    }, [gallerySources]);

    return (
        <main className="min-h-screen bg-white px-6 py-10">
            <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10">
                <div>
                    <h1 className="text-2xl font-bold mb-1">{vehicle.name}</h1>
                    <p className="text-violet-600 font-semibold mb-6">
                        ${vehicle.price} <span className="text-gray-500">/ day</span>
                    </p>

                    <div className="bg-gray-100 rounded-2xl h-64 md:h-80 w-full overflow-hidden mb-4 flex items-center justify-center relative">
                        <img
                            src={activeImg}
                            alt={vehicle.name}
                            className="w-full h-full object-cover"
                        />
                    </div>

                    <div className="flex gap-3">
                        {gallerySources.map((src, i) => (
                            <button
                                key={i}
                                onClick={() => setActiveImg(src)}
                                className={`h-16 w-24 rounded-lg overflow-hidden border ${activeImg === src ? 'border-violet-600' : 'border-gray-200'
                                    }`}
                            >
                                <img src={src} alt={`thumb-${i}`} className="w-full h-full object-cover" />
                            </button>
                        ))}
                    </div>
                </div>

                <div>
                    <h2 className="font-semibold text-lg mb-3">Technical Specification</h2>
                    <div className="grid grid-cols-2 gap-3">
                        <Spec label="Gear Box" value={vehicle.gear} />
                        <Spec label="Fuel" value={vehicle.fuel} />
                        <Spec label="Doors" value={vehicle.doors} />
                        <Spec label="Air Conditioner" value={vehicle.ac ? 'Yes' : 'No'} />
                        <Spec label="Seats" value={vehicle.seats} />
                        <Spec label="Distance" value={`${vehicle.distance} km`} />
                    </div>

                    <button onClick={() => alert('Ваша машина арендована')} className="mt-6 w-40 bg-violet-600 hover:bg-violet-700 text-white py-2 rounded-md">
                        Rent a car
                    </button>

                    <h3 className="font-semibold text-lg mt-8 mb-3">Car Equipment</h3>
                    <div className="grid grid-cols-2 gap-2 text-gray-700">
                        {['ABS', 'Air Bags', 'Cruise Control', 'Air Conditioner'].map((eq) => (
                            <div key={eq} className="flex items-center gap-2">
                                <CheckCircle2 size={16} className="text-violet-600" /> {eq}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <section className="max-w-6xl mx-auto mt-14">
                <div className="flex items-center justify-between mb-5">
                    <h3 className="text-xl font-semibold">Other cars</h3>
                    <Link href="/vehicles" className="text-sm text-gray-600 hover:text-black">View All →</Link>
                </div>
                <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                    {vehicles
                        .filter((v) => v.id !== vehicle.id && v.type === vehicle.type)
                        .slice(0, 6)
                        .map((v) => (
                            <div key={v.id} className="bg-gray-50 rounded-2xl shadow-sm p-5 flex flex-col">
                                <div className="rounded-xl overflow-hidden h-32 mb-4 relative">
                                    <img src={v.image} alt={v.name} className="w-full h-full object-cover" />
                                </div>
                                <div className="flex items-start justify-between mb-1">
                                    <div className="font-semibold">{v.name.split(' ')[0]}</div>
                                    <div className="text-violet-600 text-sm font-semibold">${v.price}</div>
                                </div>
                                <p className="text-gray-500 text-sm mb-3">{v.type}</p>
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
                                <Link href={`/vehicles/${v.id}`} className="mt-auto bg-violet-600 hover:bg-violet-700 text-white text-sm py-2 rounded-md text-center transition">
                                    View Details
                                </Link>
                            </div>
                        ))}
                </div>
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

