import React from 'react';

const AboutUs = () => {
    return (
        <div className="w-full pb-16">
            <div className="text-center pt-6">
                <p className="text-[35px] font-semibold">About Us</p>
                <p className="text-gray-500 font-semibold pt-2">
                    Home / <span className="text-black font-semibold">About Us</span>
                </p>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-start gap-10 px-[72px] mt-20">
                <p className="text-[50px] font-[700] leading-tight max-w-[360px]">
                    Where every drive feels extraordinary
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:w-1/2">
                    <div>
                        <h3 className="text-lg font-semibold mb-2">Variety Brands</h3>
                        <p className="text-gray-600 text-[15px] leading-relaxed">
                            Platea non auctor fermentum sollicitudin. Eget adipiscing augue sit
                            quam natoque ornare cursus viverra odio.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-2">Maximum Freedom</h3>
                        <p className="text-gray-600 text-[15px] leading-relaxed">
                            Diam quam gravida ultricies velit duis consequat integer. Est
                            aliquam posuere vel rhoncus massa volutpat in.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-2">Customer Support</h3>
                        <p className="text-gray-600 text-[15px] leading-relaxed">
                            Nulla facilisi. Sit sed varius in blandit condimentum. Proin
                            feugiat, libero ut commodo luctus, justo turpis ultricies velit.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-2">Trusted Service</h3>
                        <p className="text-gray-600 text-[15px] leading-relaxed">
                            Faucibus ac sed faucibus at amet. Massa commodo vel vitae enim
                            sapien egestas enim aenean.
                        </p>
                    </div>
                </div>
            </div>

            <div className='mt-10'>
                <img src="/video.svg" alt="" className='w-full h-[600px]' />

            </div>
            <div className='flex my-10 mx-10 justify-between'>
                <div>
                    <p className='text-[#5937E0] text-[45px] font-[600]'>20k+</p>
                    <p className='font-[600]'>Happy customers</p>
                </div>
                <div>
                    <p className='text-[#5937E0] text-[45px] font-[600]'>540k+</p>
                    <p className='font-[600]'>Count of cars</p>
                </div>
                <div>
                    <p className='text-[#5937E0] text-[45px] font-[600]'>25k+</p>
                    <p className='font-[600]'>Years of experince</p>
                </div>
            </div>

            <section className="my-10 mx-10 flex flex-col md:flex-row items-center gap-10">
                <div className="flex-1">
                    <h2 className="text-4xl font-bold leading-tight mb-4">
                        Unlock unforgettable <br /> memories on the road
                    </h2>
                    <p className="text-gray-600 mb-6">
                        Aliquam adipiscing velit semper morbi. Purus non eu cursus porttitor
                        tristique et gravida. Quis nunc interdum gravida ullamcorper
                    </p>

                    <div className="grid sm:grid-cols-2 gap-4">
                        <div className="flex items-start gap-3">
                            <img src="/ptichka.svg" alt="" />
                            <p className="text-gray-700">
                                Velit semper morbi. Purus non eu cursus porttitor tristique et gravida...
                            </p>
                        </div>

                        <div className="flex items-start gap-3">
                            <img src="/ptichka.svg" alt="" />

                            <p className="text-gray-700">
                                Purus non eu cursus porttitor tristique et gravida. Quis nunc interdum
                            </p>
                        </div>

                        <div className="flex items-start gap-3">
                            <img src="/ptichka.svg" alt="" />

                            <p className="text-gray-700">
                                Aliquam adipiscing velit semper morbi. Purus non eu cursus porttitor
                            </p>
                        </div>

                        <div className="flex items-start gap-3">
                            <img src="/ptichka.svg" alt="" />

                            <p className="text-gray-700">
                                Quis nunc interdum gravida ullamcorper
                            </p>
                        </div>
                    </div>
                </div>

                <div className="flex-1 w-full">
                    <img
                        src="/rasim.svg"
                        alt="Road trip"
                        className="rounded-2xl w-full object-cover shadow-md"
                    />
                </div>
            </section>


            <section className="w-full h-[444px] bg-[#5937E0] rounded-[30px] flex items-center justify-between px-16 text-white mt-10">
                <div className="relative flex-1 flex justify-center">
                    <img
                        src="/phone.svg"
                        alt=""
                        className="w-[267px] h-[500px] object-contain -mt-24"
                    />
                </div>

                <div className="flex-1 space-y-4">
                    <p className="text-lg font-semibold uppercase tracking-wider">
                        Download our app
                    </p>
                    <p className="text-4xl font-bold leading-tight">
                        Get our app for the best experience
                    </p>
                    <p className="text-gray-200 max-w-md">
                        Turpis morbi enim nisi pulvinar leo dui tellus. Faucibus egestas semper diam
                        rutrum dictumst ut donec. Nisi nisi morbi vel in vulputate. Nulla nam eget
                        urna fusce vulputate at risus.
                    </p>

                    <div className="flex items-center gap-4 pt-4">
                        <img
                            src="/img7.svg"
                            alt="Download on App Store"
                            className="w-[170px] h-[50px] cursor-pointer"
                        />
                        <img
                            src="/img8.svg"
                            alt="Get it on Google Play"
                            className="w-[170px] h-[50px] cursor-pointer"
                        />
                    </div>
                </div>
            </section>


            <section>
                <p className='text-center text-[40px] pt-16 font-[600]'>Reviews from our customers</p>
                <div className='flex justify-between mx-10 my-10'>
                    <div className="w-[350px] bg-[#F9F9F9] rounded-2xl shadow-md text-center overflow-hidden">
                        <div className="p-8">
                            <div className="text-[#5937E0] text-4xl mb-4">“</div>
                            <p className="text-[16px] text-black font-medium leading-relaxed">
                                Et aliquet netus at sapien pellentesque mollis nec dignissim
                                maecenas. Amet erat volutpat quisque odio purus feugiat. In gravida
                                neque
                            </p>
                        </div>

                        <div className="bg-[#5937E0] pt-10 pb-6 relative">
                            <div className="absolute left-1/2 -top-10 transform -translate-x-1/2">
                                <img
                                    src="/user.svg"
                                    alt=""
                                    className="w-[70px] h-[70px] rounded-full border-4 border-white shadow-md"
                                />
                            </div>
                            <p className="text-[#D1C4FF] text-sm mt-2">Kuphal LLC</p>
                            <p className="text-white font-semibold text-lg">Emanuel Boyle</p>
                        </div>
                    </div>
                    <div className="w-[350px] bg-[#F9F9F9] rounded-2xl shadow-md text-center overflow-hidden">
                        <div className="p-8">
                            <div className="text-[#5937E0] text-4xl mb-4">“</div>
                            <p className="text-[16px] text-black font-medium leading-relaxed">
                                Purus consectetur varius quis urna phasellus enim mattis.
                                Sem tincidunt tortor nunc egestas amet adipiscing ligula
                            </p>
                        </div>

                        <div className="bg-[#5937E0] pt-10 pb-6 relative">
                            <div className="absolute left-1/2 -top-10 transform -translate-x-1/2">
                                <img
                                    src="/user.svg"
                                    alt=""
                                    className="w-[70px] h-[70px] rounded-full border-4 border-white shadow-md"
                                />
                            </div>
                            <p className="text-[#D1C4FF] text-sm mt-2">Glover - Orn</p>
                            <p className="text-white font-semibold text-lg">River Graves</p>
                        </div>
                    </div>
                    <div className="w-[350px] bg-[#F9F9F9] rounded-2xl shadow-md text-center overflow-hidden">
                        <div className="p-8">
                            <div className="text-[#5937E0] text-4xl mb-4">“</div>
                            <p className="text-[16px] text-black font-medium leading-relaxed">
                                Quam neque odio urna euismod felis. Sit egestas magna in quisque famesdapibus quis sapien magna.
                                Nisl non eget sit pellentesque tristique et
                            </p>
                        </div>

                        <div className="bg-[#5937E0] pt-10 pb-6 relative">
                            <div className="absolute left-1/2 -top-10 transform -translate-x-1/2">
                                <img
                                    src="/user.svg"
                                    alt=""
                                    className="w-[70px] h-[70px] rounded-full border-4 border-white shadow-md"
                                />
                            </div>
                            <p className="text-[#D1C4FF] text-sm mt-2">Haag LLC</p>
                            <p className="text-white font-semibold text-lg">Ryder Malone</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className='bg-[#5937E0] w-full h-[444px] rounded-[30px]'>
                <div className='flex justify-between'>
                <div className='flex flex-col gap-4 mx-10 py-10 justify-between'>
                    <p className='text-[40px] font-[600] text-white'>Looking for a car?</p>
                    <p className='text-[30px] font-[600] text-white'>+537 547-6401</p>
                    <p className='text-[16px] text-white font-[600]'>Amet cras hac orci lacus. Faucibus ipsum arcu lectus nibh sapien <br /> bibendum ullamcorper inAmet cras hac orci lacus.
                        Faucibus ipsum arcu lectus nibh sapien bibendum ullamcorper in</p>
                    <button className='w-[132px] h-[40px] bg-[#FF9E0C] rounded-[10px] text-white font-[600]'>Book now</button>

                </div>
                <div>
                    <img src="/car.svg" alt="" className='w-[675px] h-[389px]' />
                </div>
                </div>
            </section>

        </div>
    );
};

export default AboutUs;
