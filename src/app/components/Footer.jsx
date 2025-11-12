import React from 'react'

const Footer = () => {
    return (
        <footer className="bg-[#1B1B1B] text-white py-12">
            <div className="max-w-7xl mx-auto px-6 mb-8">
                <div className="flex flex-wrap justify-between items-center gap-7">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
                            <svg className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M8 16.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM15 16.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                                <path fillRule="evenodd" d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zm11.5 3a4.5 4.5 0 100 9 4.5 4.5 0 000-9zM15 8a1 1 0 11-2 0 1 1 0 012 0z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <span className="text-xl font-bold text-white">Car Rental</span>
                    </div>

                    <div className="flex items-center gap-3">
                        <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center">
                            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                            </svg>
                       `` </div>
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
                        <p className="text-gray-300 text-sm leading-relaxed">
                            Faucibus faucibus pellentesque dictum turpis. Id pellentesque turpis massa a id iaculis lorem tincidunt. 
                            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.
                        </p>
                        <div className="flex gap-4">
                            {['twitter', 'facebook', 'github', 'youtube'].map((icon, i) => (
                                <a key={i} href="#" className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-orange-500 transition">
                                    <i className={`fa-brands fa-${icon} text-white`}></i>
                                </a>
                            ))}
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
                        <ul className="
                        
                        space-y-2">
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
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                                    </svg>
                                    <div>
                                        <div className="text-xs text-gray-400">Download on the</div>
                                        <div className="text-sm font-semibold text-white">App Store</div>
                                    </div>
                                </div>
                            </a>
                            <a href="#" className="block">
                                <div className="bg-black border border-gray-600 rounded-lg px-4 py-3 flex items-center gap-3 hover:bg-gray-800 transition">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M3.609 1.814L13.792 12 3.609 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 010 1.73l-2.808 1.626L15.496 12l2.202-2.491zM5.864 2.658L16.802 8.99l-2.302 2.302-8.636-8.634z" />
                                    </svg>
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

            <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-gray-700">
                <div className="text-center text-gray-400 text-sm">
                    © Copyright Car Rental 2024. Design by Figma.guru
                </div>
            </div>
        </footer>
    )
}

export default Footer
