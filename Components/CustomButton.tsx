"use client"
import React from 'react'
import { CustomButtonProps } from './types'
import Image from 'next/image'



const CustomButton = ({title , containerstyles, handleclick, btntybe, textStyles , righticon}: CustomButtonProps) => {
  return (
    <button disabled={false} type={btntybe} className={`custom-btn ${containerstyles}`} onClick={handleclick}>
        <span className={`flex-1  ${textStyles}`}>{title}</span> 
        {righticon &&  (
          <div className='w-6 h-6 relative'>
            <Image src={righticon} alt='icon the right one' className='object-contain' fill />
          </div>
        )}
    </button>
  )
}

export default CustomButton