import React from 'react'

const Section4 = () => {
    return (
        <div >
            <div className='w-full h-[460px] bg-[#5937E0] rounded-[25px]'>
                <h1 className='text-[50px] text-white font-[600] text-center pt-2'>Facts in numbers</h1>
                <p className='text-white text-center'>Amet cras hac orci lacus. Faucibus ipsum arcu lectus nibh sapien
                    bibendum ullamcorper <br /> in. Diam tincidunt tincidunt erat at semper fermentum</p>
                <div className='flex justify-around my-20'>
                    <div className='w-[220px] h-[100px] bg-white rounded-[10px] flex py-5 px-5 gap-3 items-center'>
                        <img src="/img6.svg" className='w-[50px] h-[50px]' alt="" />
                        <div>
                            <p className='font-[600]'>540+</p>
                            <p className='text-[#00000099] font-[600]'>Cars</p>
                        </div>
                    </div>
                    <div className='w-[220px] h-[100px] bg-white rounded-[10px] flex py-5 px-5 gap-3 items-center'>
                        <img src="/img6.svg" className='w-[50px] h-[50px]' alt="" />
                        <div>
                            <p className='font-[600]'>20k+</p>
                            <p className='text-[#00000099] font-[600]'>Customers</p>
                        </div>
                    </div>
                    <div className='w-[220px] h-[100px] bg-white rounded-[10px] flex py-5 px-5 gap-3 items-center'>
                        <img src="/img6.svg" className='w-[50px] h-[50px]' alt="" />
                        <div>
                            <p className='font-[600]'>25+</p>
                            <p className='text-[#00000099] font-[600]'>Years</p>
                        </div>
                    </div>
                    <div className='w-[220px] h-[100px] bg-white rounded-[10px] flex py-5 px-5 gap-3 items-center'>
                        <img src="/img6.svg" className='w-[50px] h-[50px]' alt="" />
                        <div>
                            <p className='font-[600]'>20m+</p>
                            <p className='text-[#00000099] font-[600]'>Miles</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='mx-10 my-10'>
                <div className='flex flex-col lg:flex-row items-center gap-8'>
                    <div className='flex-1'>
                        <p className='text-[40px] font-[600]'>Download <br /> mobile app</p>
                        <p className='text-[#00000099] pt-3'>Imperdiet ut tristique viverra nunc. Ultrices orci vel auctor cursus turpis nibh placerat massa. Fermentum urna ut at et in. Turpis aliquet cras
                            hendrerit enim condimentum. Condimentum interdum risus bibendum urna</p>
                        <div className='flex gap-3 pt-4'>
                            <img src="/img7.svg" className='w-[170px] h-[50px]' alt="Download on App Store" />
                            <img src="/img8.svg" className='w-[170px] h-[50px]' alt="Get it on Google Play" />
                        </div>
                    </div>
                    <div className='flex-shrink-0'>
                        <img src="/img9.svg" className='w-[267px] h-[540px]' alt="Mobile app preview" />
                    </div>
                </div>
            </div>

            <div className='w-full h-[400px] bg-[#5937E0] rounded-[30px] flex items-center justify-between px-8 my-10'>
                <div className='text-white flex-1 max-w-md'>
                    <h2 className='text-3xl font-bold mb-4'>Enjoy every mile with adorable companionship.</h2>
                    <p className='text-gray-200 mb-6'>Amet cras hac orci lacus. Faucibus ipsum arcu lectus nibh sapien bibendum ullamcorper in. Diam tincidunt tincidunt erat</p>
                    <div className='flex gap-3 bg-white rounded-[20px] p-3 '>
                        <input 
                            type="text" 
                            placeholder="Search for cars..."
                            className='flex-1 px-4 py-3 rounded-lg border-0 focus:outline-none focus:ring-2 focus:ring-yellow-400 text-gray-800'
                        />
                        <button className='bg-yellow-400 hover:bg-yellow-500 text-white font-semibold px-6 py-3 rounded-lg transition'>
                            Search
                        </button>
                    </div>
                </div>

                <div className='flex-shrink-0'>
                    <img src="/img10.svg" className='w-[350px] h-[235px]' alt="Car rental search illustration" />
                </div>
            </div>
        </div>
    )
}

export default Section4