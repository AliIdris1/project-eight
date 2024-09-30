"use client"
import React from 'react'
import CustomButton from './CustomButton'
import Image from 'next/image'


const Hero = () => {
  const handleScroll = () => {}
  return (
    <div className='flex xl:flex-row flex-col gap-5 relative z-0 max-w-[1440px] mx-auto'>
      <div className='pt-36 padding-x flex-1'>
        <h1 className='2xl:text-[72px] sm:text-[64px] text-[50px] font-extrabold'>Find, book, or rent a car-quickly and easily!</h1>
        <p className='text-[27px] text-black-100 font-light mt-5'>Streamline your car rental experience with our effortless booking process</p>
        <CustomButton title="Explore Cars" containerstyles="bg-primary-blue text-white rounded-full mt-10" handleclick={handleScroll}  />
      </div>
      <div className='xl:flex-[1.5] flex justify-end items-end w-full xl:h-screen'>
        <div className='relative xl:w-full w-[90%] xl:h-full h-[590px] z-0'>
        <img src="/hero.png" alt="hero" className="object-contain w-full h-full "/>
        </div>
          <div className='absolute xl:-top-24 xl:-right-1/2 -right-1/4 bg-hero-bg bg-repeat-round -z-10 w-full xl:h-screen h-[590px] overflow-hidden'></div>
      </div>
    </div>
  )
}

export default Hero
