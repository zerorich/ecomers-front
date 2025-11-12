'use client';

import { CalendarDays, MapPin, Mail, Phone, Clock } from 'lucide-react';

export default function BookSection() {
  const contactInfo = [
    {
      icon: <MapPin className="text-white w-5 h-5" />,
      title: 'Address',
      text: 'Oxford Ave. Cary, NC 27511',
    },
    {
      icon: <Mail className="text-white w-5 h-5" />,
      title: 'Email',
      text: 'nwiger@yahoo.com',
    },
    {
      icon: <Phone className="text-white w-5 h-5" />,
      title: 'Phone',
      text: '+637 547-6401',
    },
    {
      icon: <Clock className="text-white w-5 h-5" />,
      title: 'Opening hours',
      text: 'Sun–Mon: 10am – 10pm',
    },
  ];

  const blogPosts = [
    {
      image: '/HiraImg.svg',
      title: 'How To Choose The Right Car',
      category: 'News',
      date: '12 April 2024',
    },
    {
      image: '/HiraImg.svg',
      title: 'Which plan is right for me?',
      category: 'News',
      date: '12 April 2024',
    },
    {
      image: '/HiraImg.svg',
      title: 'Enjoy Speed, Choice & Total Control',
      category: 'News',
      date: '12 April 2024',
    },
  ];

  return (
    <>
      {/* ==== BOOK FORM SECTION ==== */}
      <section className="bg-white flex flex-col justify-center items-center py-16 px-5">
        <h1 className='font-[700] text-[50px] '>Contact Us</h1>
        <p className='text-[#9B9B9B] text-[20px] '>Home / <span className='text-black'>Contact Us</span></p>
        <div className="flex flex-col md:flex-row gap-6 max-w-5xl w-full bg-white rounded-2xl shadow-lg overflow-hidden mb-12 mt-[100px] ">
          {/* LEFT FORM */}
          <div className="bg-[#4A23CC] text-white p-6 rounded-2xl md:rounded-l-2xl md:rounded-r-none w-full md:w-1/2">
            <h2 className="text-xl font-semibold mb-5 text-center">Book your car</h2>

            <form className="flex flex-col gap-4">
              <select className="w-full p-3 rounded-md bg-[#5D35E0] focus:outline-none text-sm text-white">
                <option>Car type</option>
                <option>Sedan</option>
                <option>Cabriolet</option>
                <option>Pickup</option>
              </select>

              <select className="w-full p-3 rounded-md bg-[#5D35E0] focus:outline-none text-sm text-white">
                <option>Place of rental</option>
                <option>Tashkent</option>
                <option>Samarkand</option>
                <option>Bukhara</option>
              </select>

              <select className="w-full p-3 rounded-md bg-[#5D35E0] focus:outline-none text-sm text-white">
                <option>Place of return</option>
                <option>Tashkent</option>
                <option>Samarkand</option>
                <option>Bukhara</option>
              </select>

              <div className="relative">
                <input
                  type="date"
                  className="w-full p-3 pr-10 rounded-md bg-white text-gray-800 focus:outline-none text-sm"
                />
                <CalendarDays className="absolute right-3 top-3 w-5 h-5 text-gray-500" />
              </div>

              <div className="relative">
                <input
                  type="date"
                  className="w-full p-3 pr-10 rounded-md bg-white text-gray-800 focus:outline-none text-sm"
                />
                <CalendarDays className="absolute right-3 top-3 w-5 h-5 text-gray-500" />
              </div>

              <button
                type="submit"
                className="w-full bg-[#FFA500] text-white font-semibold py-3 rounded-md hover:bg-[#ff9d00] transition-all"
              >
                Book now
              </button>
            </form>
          </div>

          {/* RIGHT IMAGE */}
          <div className="w-full md:w-1/2 h-[350px]">
            <img
              src="/car-blur.jpg"
              alt="Car"
              className="w-full h-full object-cover rounded-2xl md:rounded-l-none"
            />
          </div>
        </div>

        {/* ==== CONTACT INFO SECTION ==== */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 max-w-6xl w-full border-t border-gray-200 pt-8">
          {contactInfo.map((item, index) => (
            <div key={index} className="flex items-center gap-4">
              <div className="bg-[#FFA500] w-10 h-10 flex items-center justify-center rounded-full shadow-sm">
                {item.icon}
              </div>
              <div>
                <p className="text-sm text-gray-500">{item.title}</p>
                <p className="font-semibold text-gray-800">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ==== BLOG SECTION ==== */}
      <section className="bg-white py-16 px-5">
        <div className="max-w-6xl mx-auto text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Latest blog posts & news
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {blogPosts.map((post, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover rounded-t-xl"
              />
              <div className="p-5 text-left">
                <h3 className="font-semibold text-lg mb-2 text-black">{post.title}</h3>
                <p className="text-sm text-gray-600">
                  {post.category} / {post.date}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className='bg-[#FAFAFA] max-w-[1296px] px-[40px] flex justify-between items-center mx-auto mt-10 h-[174px] rounded-[20px]'>
          <img src="/toyota.png" alt="" />
          <img src="/ford.png" alt="" />
          <img src="/mercedes.png" alt="" />
          <img src="/jeep.png" alt="" />
          <img src="/bmw.png" alt="" />
          <img src="/audio.png" alt="" />
        </div>
      </section>
    </>
  );
}
