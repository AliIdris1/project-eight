import { info } from "console";
import { MouseEventHandler } from "react";


export interface CustomButtonProps {
    title :string;
    containerstyles? :string ;
    handleclick? : MouseEventHandler<HTMLButtonElement> ;
    btntybe?:"button" | "submit" ;
    textStyles? : string ;
    righticon? : string ;
    isDisabled? : boolean ;
}

export interface SearchManufacturerprops {
    manufacturer:string;
    setmanufacturer: (manufacturer:string) => void;
}


export interface Carprops {
city_mpg: number;
class:string;
combination_mpg:number;
cylinders:number;
displacement:number;
drive:string;
fuel_type:string;
highway_mpg: number;
make: string;
model:string;
transmission:string;
year:number;
}


export interface filltersProps {
    manufacturer: string ;
    year: number ;
    fuel: string ;
    limit: number ;
    model: string ;
}

interface optionsProps {
    title : string ;
    value : string ;
}

export interface CustomfilterProps {
    title : string ;
    options : optionsProps[] ;
    setFilter : any ;
    
}

export interface ShowMoreProps {
    pageNumber : number ;
    isNext : boolean ;
    setLimit : any ;
}