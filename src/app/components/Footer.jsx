import React from 'react'

const Footer = () => {
    return (
        <footer className="bg-white text-black py-12">
            <div className="max-w-7xl mx-auto px-6 mb-8">
                <div className="flex flex-wrap justify-between items-center gap-7">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
                            <img src="/img1.svg" className='w-[50px] h-[50px]' alt="" />
                        </div>
                        <span className="text-xl font-bold text-black">Car Rental</span>
                    </div>

                    <div className="flex items-center gap-3">
                        <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center">
                            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                            </svg>
                            </div>
                        <div>
                            <h3 className="font-semibold">Address</h3>
                            <p className="text-sm">Oxford Ave. Cary, NC 27511</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center">
                            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                            </svg>
                        </div>
                        <div>
                            <h3 className="font-semibold">Email</h3>
                            <p className="text-sm">nwiger@yahoo.com</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center">
                            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                            </svg>
                        </div>
                        <div>
                            <h3 className="font-semibold">Phone</h3>
                            <p className="text-sm">+537 547-6401</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 mb-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="space-y-4">
                        <p className="text-black font-[600] text-sm leading-relaxed">
                            Faucibus faucibus pellentesque dictum turpis. Id pellentesque turpis massa a id iaculis lorem tincidunt.
                            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.
                        </p>
                        <div className="flex gap-4">
                            <img src="/facebook.svg" className='w-[30px] h-[30px]' alt="" />
                            <img src="/instagram.svg" className='w-[30px] h-[30px]' alt="" />
                            <img src="/twitter.svg" className='w-[30px] h-[30px]' alt="" />
                            <img src="/youtube.svg" className='w-[30px] h-[30px]' alt="" />

                        </div>
                    </div>

                    <div>
                        <h3 className="font-bold text-lg mb-4">Useful links</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:text-orange-500 transition">About us</a></li>
                            <li><a href="#" className="hover:text-orange-500 transition">Contact us</a></li>
                            <li><a href="#" className="hover:text-orange-500 transition">Gallery</a></li>
                            <li><a href="#" className="hover:text-orange-500 transition">Blog</a></li>
                            <li><a href="#" className="hover:text-orange-500 transition">F.A.Q</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-bold text-lg mb-4">Vehicles</h3>
                        <ul className="space-y-2">
                            {['Sedan', 'Cabriolet', 'Pickup', 'Minivan', 'SUV'].map((v, i) => (
                                <li key={i}><a href="#" className="hover:text-orange-500 transition">{v}</a></li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-bold text-lg mb-4">Download App</h3>
                        <div className="space-y-3">
                            <a href="#" className="block">
                                <div className="bg-black border border-gray-600 rounded-lg px-4 py-3 flex items-center gap-3 hover:bg-gray-800 transition">
                                    <img src="/apple.svg" alt="" className='w-[30px] h-[30px]' />

                                    <div>
                                        <div className="text-xs text-gray-400">Download on the</div>
                                        <div className="text-sm font-semibold text-white">App Store</div>
                                    </div>
                                </div>
                            </a>
                            <a href="#" className="block">
                                <div className="bg-black border border-gray-600 rounded-lg px-4 py-3 flex items-center gap-3 hover:bg-gray-800 transition">
                                    <img src="/playmarket.svg" alt="" className='w-[30px] h-[30px]' />
                                    <div>
                                        <div className="text-xs text-gray-400">GET IT ON</div>
                                        <div className="text-sm font-semibold text-white">Google Play</div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-black ">
                <div className="text-center text-black font-[600] text-sm">
                    © Copyright Car Rental 2024. Design by Figma.guru
                </div>
            </div>
        </footer>
    )
}

export default Footer
