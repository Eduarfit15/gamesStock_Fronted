
import { useContext, useEffect } from "react";
import { BrowserCat } from "../components/catalog/BrowserCat"
import { ProductContext } from "../context/productContext";


export const Catalogo=()=>{

  const {getProducts}=useContext(ProductContext);

    useEffect(() => {
  
        getProducts();

    },[]);
  return(

        <BrowserCat />
  );
    
}