"use client"
import { Cormorant_SC } from 'next/font/google'
import React, { useEffect, useState } from 'react'


const Scrolltotop = () => {
    const [Isvisible, setIsvisible] = useState(false)

    const tpgglevisiblity = () => {
        if(window.scrollY > 300) {
            setIsvisible(true)
        } else {
            setIsvisible(false)
        }
    }

    const scrolltotop = () => {
        window.scrollTo({
            top:0,
            behavior : "smooth",
        })
    }

    useEffect(() => {
        window.addEventListener("scroll" , tpgglevisiblity)

        return () => {
            window.removeEventListener("scroll", tpgglevisiblity)
        }
    }, [])
return (
    <>
    {
        Isvisible && (
            <div id='scrolltotop' onClick={() => scrolltotop()}
            className=' w-[50px] h-[35px] rounded-full fixed bottom-5 right-5 bg-black duration-500'>
<svg className='bg-primary-blue cursor-pointer ' viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg" fill="#000" stroke="#000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#ffffff" fillRule="nonzero" d="M20 12l6 5.656-1.5 1.414-3.44-3.242V28h-2.12V15.828L15.5 19.07 14 17.656z"></path></g></svg>            </div>
        )
    }
    </>
)
}

export default Scrolltotop