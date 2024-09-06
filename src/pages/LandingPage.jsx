import { AboutUs } from "../components/home/AboutUs"
import { CarouselVideogames } from "../components/home/CarouselVideogames"
import { Categories } from "../components/home/Categories"
import { PEstrenos } from "../components/home/PEstrenos"
import { Welcome } from "../components/home/Welcome"

export const LandingPage=()=>{


    return(

        <>
    
        <Welcome/>
        <CarouselVideogames/>
        <Categories/>
        <AboutUs/>
        <PEstrenos/>
    
        </>
    );
   
};