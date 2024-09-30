"use client"

import { useRouter } from 'next/navigation'
import React, { FormEvent, useState } from 'react'
import SearchManufacturer from './SearchManufacturer'
import Image from 'next/image'
import { url } from 'inspector'




const SearchButton = ({Otherclass}:{Otherclass?: string}) => {
    return (
        <button type='submit' className={`${Otherclass} -ml-3 z-10`}>
            <Image src={"magnifying-glass.svg"}  alt='glass' width={40} height={40} className=' object-contain'/>
        </button>
    )
}

const Searchbar = ({ setmanufacturer , setmodel}:any) => {

    const [Searchmanufacturer , setSearchmanufacturer] = useState('')
    const [Searchmodel, setSearchmodel] = useState('')
    const router = useRouter()

const handlesearch = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if(Searchmanufacturer === "" && Searchmodel === "") {
      return  alert("Please Enter The Data")
    }



   setmodel(Searchmodel)
   setmanufacturer(Searchmanufacturer)
}

   




return (
    <form className='searchbar' onSubmit={handlesearch}>
        <div className='searchbar__item'>
            <SearchManufacturer 
            selected={Searchmanufacturer}
            setselected={setSearchmanufacturer}
            />
            <SearchButton Otherclass='sm:hidden' />
        </div>
        <div className='searchbar__item'>
            <Image src={"/model-icon.png"} width={25} height={25} alt='model' className=' absolute h-[20px] w-[20px] ml-4'/>
            <input type="text" name="model" className='searchbar__input ' placeholder='Tieguan' onChange={(e) => setSearchmodel(e.target.value)} value={Searchmodel} />
            <SearchButton Otherclass='sm:hidden' />
        </div>
        <SearchButton Otherclass='max-sm:hidden' />
    </form>
)
}

export default Searchbar
