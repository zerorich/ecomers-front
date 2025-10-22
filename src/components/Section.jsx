import React from 'react'

const Section = () => {
    return (
        <div>
            <div className='flex items-center my-10 mx-10'>
                <div className='text-center hover:bg-[#5937E0] hover:text-white rounded-[10px]'>
                    <img src="/img3.svg" className='w-[50px] h-[50px] mx-auto' alt="" />
                    <p className='font-[600]'>Availability</p>
                    <p className='font-[600]'>Diam tincidunt tincidunt erat at semper fermentum. Id ultricies quis</p>
                </div>
                <div className='text-center hover:bg-[#5937E0] hover:text-white rounded-[10px]'>
                    <img src="/img4.svg" className='w-[50px] h-[50px] mx-auto' alt="" />
                    <p className='font-[600]'>Comfort</p>
                    <p className='font-[600]'>Gravida auctor fermentum morbi vulputate
                    ac egestas orcietium convallis</p>
                </div>
                <div className='text-center hover:bg-[#5937E0] hover:text-white rounded-[10px]'>
                    <img src="/img5.svg" className='w-[50px] h-[50px] mx-auto' alt="" />
                    <p className='font-[600]'>Savings</p>
                    <p className='font-[600]'>Pretium convallis id diam sed commodo vestibulum lobortis volutpat</p>
                </div>
            </div>
        </div>
    )
}

export default Section