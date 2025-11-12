import React from 'react'
import Link from 'next/link'
import { ROUTE } from '@/routes'

const Navbar = () => {
    return (
        <div className='flex justify-between py-5 px-10'>
            <div className='flex items-center gap-2'>
                <img src="/img1.svg" alt="" className='w-[50px] h-[50px]' />
                <p className='font-[600]'>Car Rental </p>
            </div>

            <ul className='flex items-center gap-3.5'>
                <li className='font-[600]'><Link href={ROUTE.HOME}>Home</Link></li>
                <li className='font-[600]'><Link href={ROUTE.VEHICLES}>Vehicles</Link></li>
                {/* Остальные ссылки ведут на секции текущей страницы либо будущие страницы */}
                <li className='font-[600]'><Link href={ROUTE.VEHICLES}>Details</Link></li>
                <li className='font-[600]'><Link href={ROUTE.HOME}>About Us</Link></li>
                <li className='font-[600]'><Link href={ROUTE.CONTACT}>Contact Us</Link></li>
            </ul>
            <div className="flex items-center gap-3">
                <img src="/img2.svg" alt="help icon" className="w-[50px] h-[50px]" />
                <div className="flex flex-col leading-tight">
                    <span className="text-sm font-[600]">Need help?</span>
                    <span className="font-semibold text-black text-base">+996 247-1680</span>
                </div>
            </div>

        </div>
    )
}

export default Navbar