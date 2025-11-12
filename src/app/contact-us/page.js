// import Link from 'next/link'
// import { ROUTE } from '@/routes'

// export default function ContactUsPage() {
//   return (
//     <main className="px-6 py-10">
//       <div className="max-w-6xl mx-auto">
//         {/* Header + Breadcrumb */}
//         <div className="mb-6">
//           <h1 className="text-2xl font-bold">Contact Us</h1>
//           <div className="text-sm text-gray-500 mt-1">
//             <Link href={ROUTE.HOME} className="hover:text-black">Home</Link>
//             <span className="mx-2">/</span>
//             <span>Contact Us</span>
//           </div>
//         </div>

//         {/* Booking + Hero Placeholder */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
//           <div className="bg-white rounded-2xl shadow p-5">
//             <h3 className="font-semibold mb-4">Book your car</h3>
//             <div className="space-y-3">
//               <select className="w-full border border-gray-200 rounded-lg py-2 px-3 text-gray-700">
//                 <option>Car type</option>
//               </select>
//               <select className="w-full border border-gray-200 rounded-lg py-2 px-3 text-gray-700">
//                 <option>Place of rental</option>
//               </select>
//               <select className="w-full border border-gray-200 rounded-lg py-2 px-3 text-gray-700">
//                 <option>Place of return</option>
//               </select>
//               <div className="grid grid-cols-2 gap-3">
//                 <input type="date" className="w-full border border-gray-200 rounded-lg py-2 px-3 text-gray-700" />
//                 <input type="date" className="w-full border border-gray-200 rounded-lg py-2 px-3 text-gray-700" />
//               </div>
//               <button className="w-full bg-violet-600 hover:bg-violet-700 text-white font-semibold py-2 rounded-lg">Book now</button>
//             </div>
//           </div>
//           <div className="bg-gray-100 rounded-2xl h-64 md:h-72 w-full overflow-hidden flex items-center justify-center">
//             <div className="text-gray-500">Image/Map placeholder</div>
//           </div>
//         </div>

//         {/* Contact info */}
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-5 mb-10">
//           <Info title="Address" body="Oxford Ave, Cary, NC 27511" />
//           <Info title="Email" body="mveinger@yahoo.com" />
//           <Info title="Phone" body="+357 547-6401" />
//           <Info title="Opening hours" body="Sun–Mon: 10am – 10pm" />
//         </div>

//         {/* Latest blog posts & news */}
//         <h2 className="text-xl font-semibold mb-4">Latest blog posts & news</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
//           {[1,2,3].map((i) => (
//             <article key={i} className="bg-white rounded-2xl shadow-sm p-4">
//               <div className="h-36 rounded-xl bg-gray-100 mb-4" />
//               <h3 className="font-medium mb-1">Sample post title {i}</h3>
//               <p className="text-gray-500 text-sm">News / 12 April 2024</p>
//             </article>
//           ))}
//         </div>

//         {/* Brands row */}
//         <div className="flex items-center justify-between gap-6 flex-wrap py-6 border-t border-gray-100">
//           {['/ford.png','/jeep.png','/audi.png','/mercedes.png','/toyota.png'].map((src) => (
//             <img key={src} src={src} alt="brand" className="h-8 object-contain" />
//           ))}
//         </div>
//       </div>
//     </main>
//   )
// }

// function Info({ title, body }) {
//   return (
//     <div className="bg-white rounded-2xl shadow p-5">
//       <div className="text-sm text-gray-500 mb-1">{title}</div>
//       <div className="font-medium">{body}</div>
//     </div>
//   )
// }


