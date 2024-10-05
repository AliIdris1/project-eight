import Image from 'next/image'
import React from 'react'
import CustomButton from './CustomButton'
import Link from 'next/link'

const Navbar = () => {
  return (
    <header>
        <nav>
            <Link href={"/"} className='first-link'>
                <Image src={"/logo.svg"} width={118} height={18} className='image' alt='logo'/>
            </Link>
            <CustomButton title='Sign in' containerstyles='nav-btn' btntybe='button'  />
        </nav>
    </header>
  )
}

export default Navbar
