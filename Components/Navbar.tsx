import Image from 'next/image'
import React from 'react'
import CustomButton from './CustomButton'
import Link from 'next/link'

const Navbar = () => {
  return (
    <header>
        <nav>
            <Link href={"/"} className='flex justify-center items-center'>
                <Image src={"/logo.svg"} width={118} height={18} className='object-contain' alt='logo'/>
            </Link>
            <CustomButton title='Sign in' containerstyles='text-primary-blue rounded-full bg-white min-w-[130px]' btntybe='button'  />
        </nav>
    </header>
  )
}

export default Navbar
