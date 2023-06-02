"use client"
import Link from 'next/link'
import logo from '../../public/interviewLogo.png'
import arrow from '../../public/arrow-right.svg'
import menu from '../../public/mobile-menu.png'
import Image from 'next/image'
import { useState } from 'react'

export default function Nav(){
    const [openMenu, setOpenMenu] = useState(false)

    const menuButton = () => {
        const dialog = document.getElementById('navMenu');
        setOpenMenu(!openMenu)
    }

    return (
        <div className="w-full shadow lg:h-20 md:px-5 px-2">
            <div className='lg:max-w-screen-xl h-full lg:mx-auto flex items-center justify-between'>
                <div className='flex items-center'>
                    <Image src={logo} width={50} height={50} alt='logo of website'></Image>
                    <p className='font-bold text-2xl lg:text-3xl'>Interviewify</p>
                </div>
                <div className='items-center md:w-5/12 lg:w-4/12 xl:w-3/12 justify-around hidden md:flex'>
                    <Link href={''}><p className='font-medium text-xl'>Log In</p></Link>
                    <Link className='bg-[#3772FF] text-white h-11 w-48 flex items-center justify-center rounded-md' href={""}>
                        <p className='font-medium text-xl mr-2'>Join for free</p>
                        <Image src={arrow} alt='arrow'></Image>
                    </Link>
                </div>
                <div className='flex block md:hidden'>
                    <Image src={menu} onClick={menuButton} alt='three button clickable menu'></Image>
                    <dialog className={openMenu ? 'absolute left-2/4 top-6 shadow border rounded-md border-slate-300 p-0 m-0 flex flex-col ml-5' : 'absolute left-2/4 top-6 shadow border rounded-md border-slate-300 p-0 m-0 flex flex-col hidden'} id='navMenu'>
                        <p className='p-2 w-full text-center'>Log In</p>
                        <div className='bg-[#3772FF] p-2 flex justify-between items-center rounded-bl-md rounded-br-md'>
                            <p className='text-white w-full'>Join for free</p>
                            <Image src={arrow} width={20} height={20} alt='arrow'></Image>
                        </div>
                    </dialog>
                </div>
            </div>
        </div>
    )
}