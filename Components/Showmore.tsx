'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
import { ShowMoreProps } from './types'
import CustomButton from './CustomButton'
import { updateSearchPrams } from '@/utils'

const Showmore = ({pageNumber , isNext, setLimit}: ShowMoreProps) => {
    
    const handelNavigation = () => {
        const newLimit = (pageNumber + 1) * 10
        
        setLimit(newLimit)
    }
  return (
    <div className='w-full flex-center gap-5 mt-10'>
        <CustomButton title='Show More' btntybe='button' containerstyles='bg-primary-blue rounded-full text-white' handleclick={handelNavigation}/>
    </div>
  )
}

export default Showmore