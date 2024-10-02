import Image from 'next/image'
import React from 'react'
import CustomButton from './CustomButton'
import Link from 'next/link'

const Navbar = () => {
  return (
    <header className="w-full absolute z-10">
        <nav className="max-w-[1440px] mx-auto sm:px-16 px-6 flex justify-between items-center py-2">
            <Link href={"/"} className='flex justify-center items-center'>
                <Image src={"/logo.svg"} width={118} height={18} className='object-contain' alt='logo'/>
            </Link>
            <CustomButton title='Sign in' containerstyles='text-primary-blue rounded-full bg-white min-w-[130px]' btntybe='button'  />
        </nav>
    </header>
  )
}

export default Navbar
