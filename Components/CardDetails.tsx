"use client"

import React, { Fragment } from 'react'
import { Carprops } from './types'
import {Transition , Dialog} from "@headlessui/react"
import Image from 'next/image';
import { ImageResponse } from 'next/server';
import { generateCarImageUrl } from '@/utils';



interface CarDetailsprops {
  car: Carprops ;
  isOpen: boolean ;
  closeModal : () => void ; 
}

const CardDetails = ({isOpen , closeModal , car}:CarDetailsprops) => {
  return (
    <>
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as='div' className="relative z-10" onClose={closeModal}>
        <Transition.Child as={Fragment} enter='ease-out duration-300' enterFrom='opacity-0' enterTo='opacity-100' leave='ease-in duration-200' leaveFrom='opacity-100' leaveTo='opacity-0'>
          <div className='bg-black bg-opacity-25 inset-0 fixed'/>
        </Transition.Child>
        <div className='fixed overflow-y-auto inset-0'>
          <div className='p-4 min-h-full flex justify-center items-center text-center'>
            <Transition.Child as={Fragment} enter='ease-out duration-300' enterFrom='opacity-0 scale-95' enterTo='opacity-100 scale-100' leave='ease-in duration-200' leaveFrom='opacity-100 scale-100' leaveTo='opacity-0 scale-95'>
          <Dialog.Panel className=' p-5 relative w-full bg-white max-w-lg text-left  overflow-y-auto  max-h-[90vh] transform rounded-2xl shadow-xl transition-all flex flex-col gap-5'>
            <button type='button' onClick={closeModal} className='right-2 top-2 absolute z-10 w-fit p-2 bg-primary-blue-100 rounded-full'>
              <Image src="/close.svg" width={20} height={20} alt='close' className='object-contain' />
            </button>
            <div className='flex-1 flex flex-col gap-3'>
              <div className='relative w-full h-40 bg-pattern bg-center bg-cover rounded-lg'>
              <Image src={generateCarImageUrl(car)} alt='car'   priority className='object-contain' fill/>
              </div>

              <div className='gap-3 flex'>
                <div className='flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg'>
                <Image src={generateCarImageUrl(car, '29')} alt='car'   priority className='object-contain' fill/>
                </div>
                <div className='flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg'>
                <Image src={generateCarImageUrl(car, '33')} alt='car'   priority className='object-contain' fill/>
                </div>
                <div className='flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg'>
                <Image src={generateCarImageUrl(car, '12')} alt='car'   priority className='object-contain' fill/>
                </div>
              </div>
            </div>

            <div className='flex-1 flex flex-col gap-2'>
              <h2 className='font-semibold text-xl capitalize'>{car.make} {car.model}</h2>
              <div className='mt-3 gap-4 flex flex-wrap'>
                {Object.entries(car).map(([key , value]) => (
                  <div key={key} className='flex justify-between gap-5 w-full '>
                    <h4 className='text-gray-400 capitalize'>{key.split("_").join(" ")}</h4>
                    <p className='font-semibold text-black-100'>{value}</p>
                  </div>
                ))}
              </div>
            </div>
          </Dialog.Panel>
        </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
    </>
  )
}

export default CardDetails