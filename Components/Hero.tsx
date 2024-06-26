"use client"
import React from 'react'
import CustomButton from './CustomButton'
import Image from 'next/image'


const Hero = () => {
  const handleScroll = () => {}
  return (
    <div className='hero'>
      <div className='pt-36 padding-x flex-1'>
        <h1 className='hero__title'>Find, book, or rent a car-quickly and easily!</h1>
        <p className='hero__subtitle'>Streamline your car rental experience with our effortless booking process</p>
        <CustomButton title="Explore Cars" containerstyles="bg-primary-blue text-white rounded-full mt-10" handleclick={handleScroll}  />
      </div>
      <div className='hero__image-container'>
        <div className='hero__image'>
          <Image src="/hero.png"  alt='hero' className='object-contain' fill />
        </div>
          <div className='hero__image-overlay'></div>
      </div>
    </div>
  )
}

export default Hero
