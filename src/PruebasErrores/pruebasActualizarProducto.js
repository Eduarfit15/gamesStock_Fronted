

import Swal from "sweetalert2";
import { findNameAgain } from "../auth/service/authService";
import { findById } from "../services/productService";
import { useContext } from "react";
import { ProductDashBoardContext } from "../auth/context/ProductDashBoardContext";
export const pruebasActualizarProducto=()=>{

    const {handlerBuscarPorId}=useContext(ProductDashBoardContext);
    const isInDB=async(name)=>{

        try {
            
           await findNameAgain(name);

           return true;

        } catch (error) {
            
            return false;
           
        }
    }

    const tryNombre=(id)=>{
        try {
            const response = handlerBuscarPorId(id)
            
            return response;
        } catch (error) {
            
        }
    }
    


    const prubaInputAcProducts=async(nombre,precio,stock,img,id)=>{
        const espacioBlancoFI=/^\S.*\S$/;
        const response= await isInDB(nombre) ;
       const nameDb=await tryNombre(id);
      

        if(response && nombre!== nameDb.nombre){
           
            Swal.fire("Error","El nombre ya existe en la DB","error");
            return true;
        }
         if(nombre.length>50){

             Swal.fire("Error","El nombre no puede tener más de 50 caracteres","error");
            return true;
         }

         if(!espacioBlancoFI.test(nombre)){

            Swal.fire("Error","No se permiten espacios en blanco ni al principio ni al final del nombre","error");
           return true;
        }

        if(precio<50 || precio>350){

             Swal.fire("Error","El precio tiene que estar entre 50 y 350","error");
            return true;
        }

        if(stock<1 || stock>1000){

            Swal.fire("Error","El precio tiene que estar entre 50 y 350","error");
           return true;
       }
       if(img.size>400 * 1024){
        Swal.fire("Error","La imagen tiene que tener como máximo 400KB","error");
        return true;
       }



         return false;

    }


    return {
        prubaInputAcProducts
    }



}