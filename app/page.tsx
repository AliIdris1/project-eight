"use client"
import { useEffect, useState } from "react";
import Carcard from "@/Components/Carcard";
import Customfillters from "@/Components/Customfillters";
import Hero from "@/Components/Hero";
import Searchbar from "@/Components/Searchbar";
import Showmore from "@/Components/Showmore";
import { fuels, yearsOfProduction } from "@/constants";
import { fetchCars } from "@/utils";
import Image from "next/image";
import { filltersProps } from "@/Components/types";
import { log } from "console";


export default  function Home() {
  const [allCars, setallCars] = useState([])
  const [loading, setloaDing] = useState(false)

  const [manufacturer, setmanufacturer] = useState("")
  const [model, setmodel] = useState("")

  const [fuel, setfuel] = useState("")
  const [year, setyear] = useState(2022)

  const [limit, setlimit] = useState(10)

  const getCars = async () => {
  setloaDing(true)
  try {
    
      const result = await fetchCars({
        manufacturer: manufacturer || '',
        year: year || 2022,
        fuel: fuel ||'',
        limit: limit|| 10,
        model: model || '',
      })
      setallCars(result)
  } catch (error) {
    console.log(error)
  } finally {
    setloaDing(false)
  }
}

useEffect(() => {
  console.log(fuel, year)
  getCars();
}, [fuel, year , limit , manufacturer , model])
  
  
  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars 
  return (
    <main className="overflow-hidden">
      <Hero />

      <div className='mt-12 padding-x padding-y max-width ' id='discover'>
        <div className='home__text-container'>
            <h1 className='text-4xl font-extrabold'>Car Catalogue</h1>
            <p className='font-extralight'>Explore the cars you might like</p>
        </div>
        <div className='home__filters'>
            <Searchbar setmanufacturer={setmanufacturer} setmodel={setmodel}/>

            <div className='home__filter-container '>
                <Customfillters  title="fuel"  options={fuels} setFilter={setfuel}/>
                <Customfillters  title="year" options={yearsOfProduction} setFilter={setyear}/>
            </div>
        </div>

        {allCars.length > 0 ? (
          <section>
            <div className="home__cars-wrapper">
              {allCars?.map((car) => (
              <Carcard car={car} />
            ))}
            </div>

            {loading && (
              <div className="mt-16 w-full flex-center">
                <Image src="loader-svgrepo-com.svg" width={50} height={50} alt="loader" className="object-contain"/>
              </div>
            )}
            <Showmore pageNumber={limit  /10} isNext={limit > allCars.length} setLimit={setlimit}/>
          </section>
        ): (
          <div className="home__error-container ">
            <h2 className="text-black font-bold text-xl">Oops, no results</h2>
            <p></p>
          </div>
        )}
      </div>
    
    </main>
  );
}
