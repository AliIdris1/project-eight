import { Carprops , filltersProps } from "@/Components/types";


export async function fetchCars(fillters:filltersProps) {
  const {manufacturer , year , model , limit ,fuel} =  fillters ;
const header = {
    'X-RapidAPI-Key': 'f3d261b412msh1f57a16a193f235p1c7eaejsnd4eb1342e487',
		'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    }

    const response = await fetch(`https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}`,{ headers :header})

    const resulte = await response.json()

    return resulte
}




export const calculateCarRent = (city_mpg: number, year: number) => {
  const basePricePerDay = 50; // Base rental price per day in dollars
  const mileageFactor = 0.1; // Additional rate per mile driven
  const ageFactor = 0.05; // Additional rate per year of vehicle age

  // Calculate additional rate based on mileage and age
  const mileageRate = city_mpg * mileageFactor;
  const ageRate = (new Date().getFullYear() - year) * ageFactor;

  // Calculate total rental rate per day
  const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

  return rentalRatePerDay.toFixed(0);
};




export const generateCarImageUrl = (car: Carprops, angle?: string) => {
  const url = new URL("https://cdn.imagin.studio/getimage");
  const { make, model, year } = car;

  url.searchParams.append('customer', process.env.NEXT_PUBLIC_IMAGIN_API_KEY || '');
  url.searchParams.append('make', make);
  url.searchParams.append('modelFamily', model.split(" ")[0]);
  url.searchParams.append('zoomType', 'fullscreen');
  url.searchParams.append('modelYear', `${year}`);
  // url.searchParams.append('zoomLevel', zoomLevel);
  url.searchParams.append('angle', `${angle}`);

  return `${url}`;
}  

export const updateSearchPrams = (type:string , value:string) => {
  const searshprams = new URLSearchParams(window.location.search)
    searshprams.set(type, value)

  const newPathname = `${window.location.pathname}?${searshprams.toString()}`

  return newPathname
}