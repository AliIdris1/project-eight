"use client"
import React from 'react'
import CustomButton from './CustomButton'
import Image from 'next/image'


const Hero = () => {
  const handleScroll = () => {}
  return (
    <div className='hero'>
      <div className='hdiv1'>
        <h1 className='hero__title'>Find, book, or rent a car-quickly and easily!</h1>
        <p className='hero__subtitle'>Streamline your car rental experience with our effortless booking process</p>
        <CustomButton title="Explore Cars" containerstyles="hero-btn" handleclick={handleScroll}  />
      </div>
      <div className='hero__image-container'>
        <div className='hero__image'>
        <img src="/hero.png" alt="hero" className="object-contain w-full h-full "/>
        </div>
          <div className='hero__image-overlay'></div>
      </div>
    </div>
  )
}

export default Hero
