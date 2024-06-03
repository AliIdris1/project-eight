"use client"

import React from 'react'
import { useState , Fragment } from 'react' 
import Image from 'next/image'
import {Listbox , Transition} from '@headlessui/react'
import { CustomfilterProps } from './types'
import { useRouter } from "next/navigation";
import { updateSearchPrams } from '@/utils'



const Customfillters = ({title , options , setFilter}:CustomfilterProps) => {
  const [selected, setselected] =useState(options[0])
  
  return (
    <div className='w-fit'>
      <Listbox value={selected} onChange={(e) => {
        setselected(e)
        setFilter(e.value)
        }} >
      <div className='relative w-fit z-10'>
        <Listbox.Button className='custom-filter__btn'>
          <span className='block truncate'>{selected.title}</span>
          <Image src="chevron-up-down.svg" width={20} height={20} alt='chevron up and down' className='ml-4 object-contain'/>
        </Listbox.Button>
        <Transition as={Fragment} leave='transition ease-in duration-100' leaveFrom='opacity-100' leaveTo='opacity-0'>
          <Listbox.Options className='custom-filter__options'>
            {options.map((op) => (
            <Listbox.Option key={op.title} value={op} className={({active} ) => `relative cursor-default select-none py-2 px-4 ${active ? 'bg-primary-blue text-white' : 'text-gray-900'}`}>{({selected}) => (<span className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}>{op.title}</span>)}</Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </div>
      </Listbox>
    </div>
  )
} 

export default Customfillters