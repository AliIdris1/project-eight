"use client"

import { useRouter } from 'next/navigation'
import React, { FormEvent, useState } from 'react'
import SearchManufacturer from './SearchManufacturer'
import Image from 'next/image'
import { url } from 'inspector'




const SearchButton = ({Otherclass}:{Otherclass?: string}) => {
    return (
        <button type='submit' className={`${Otherclass} search-btn`}>
            <Image src={"magnifying-glass.svg"}  alt='glass' width={40} height={40} className=' image'/>
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
            <SearchButton Otherclass='search-btn' />
        </div>
        <div className='searchbar__item'>
            <Image src={"/model-icon.png"} width={25} height={25} alt='model' className='image'/>
            <input type="text" name="model" className='searchbar__input ' placeholder='Tieguan' onChange={(e) => setSearchmodel(e.target.value)} value={Searchmodel} />
            <SearchButton Otherclass='search-btn' />
        </div>
        <SearchButton Otherclass='max-search-btn' />
    </form>
)
}

export default Searchbar
