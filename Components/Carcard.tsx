"use client"

import React, { useState } from 'react'
import { Carprops } from './types'
import { calculateCarRent, generateCarImageUrl } from '@/utils'
import Image from 'next/image'
import CustomButton from './CustomButton'
import CardDetails from './CardDetails'

interface Carcardprops {
    car: Carprops
}

const Carcard = ({car}: Carcardprops) => {

    const [isOpen , setIsOpen] = useState(false)

    const {city_mpg , make, model, transmission, year} = car

    const CarRent = calculateCarRent(city_mpg, year)
    
return (
    <div className='car-card group' >
        <div className='car-card__content'>
            <h2 className='car-card__content-title'>{make} {model}</h2>
        </div>

        <p className='flex mt-6 text-[32px] font-semibold '>
        <span className='self-start text-[14px] font-semibold'>$</span>{CarRent}
        <span className='self-end text-[14px] font-medium'>/day</span>
        </p>

        <div className='my-3 object-contain relative h-40 w-full '>
            <Image src={generateCarImageUrl(car)} alt='car'   priority className='object-contain' fill/>
        </div>

        <div className='relative w-full flex  mt-2'>

            <div className='flex justify-between group-hover:invisible w-full  text-gray'>
                <div className='flex flex-col justify-center items-center gap-2'>
                    <Image src="/steering-wheel.svg" alt='steering wheel' width={20} height={20}/>
                    <p className='text-[14px]'>{transmission === "a" ? "Automatic" : "Manual" }</p>
                </div>
                <div className='flex flex-col justify-center items-center gap-2'>
                    <Image src="/tire.svg" alt='Tire' width={20} height={20}/>
                    <p className='text-[14px]'>{car.drive.toUpperCase()}</p>
                </div>
                <div className='flex flex-col justify-center items-center gap-2'>
                    <Image src="/gas.svg" alt='GAS' width={20} height={20}/>
                    <p className='text-[14px]'>{city_mpg} MPG</p>
                </div>
            </div>

            <div className='car-card__btn-container'>
            <CustomButton title='View More' containerstyles=' w-full bg-primary-blue  py-[16px] rounded-full' textStyles='text-white text-[14px] leading-[17px] font-bold' righticon="/right-arrow.svg" handleclick={() => setIsOpen(true)} />
        </div>
        </div>

        <CardDetails isOpen={isOpen} closeModal={() => (setIsOpen(false))} car={car} />
    </div>
)
}

export default Carcard