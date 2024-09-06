import { useEffect, useReducer, useState } from "react";
import { productReducer } from "../../reducers/productReducer";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { crearPic, crearProducto, deshabilitarProducto, misCompras, updateProduct } from "../service/authService";
import { findById, findByIdAll } from "../../services/productService";


const initialProduct=[];
export const useProductDashboard=()=>{

    const [products,dispach]=useReducer(productReducer,initialProduct);
    const navigate=useNavigate();


    const handlerBuscarPorId=async(id)=>{


        try {

        const response=await findById(id);

        return response.data;
        } catch (error) {
            
            Swal.fire({
                title: "Producto inexistente",
                text: "El producto que has querido buscar no se encuentra en la DB",
                icon: "warning"
              });
        }
        
    }


    const handlerBuscarPorIdAll=async(id)=>{


        try {

        const response=await findByIdAll(id);

            return response.data;
        } catch (error) {
            
            
            Swal.fire({
                title: "Producto inexistente",
                text: "El producto que has querido buscar no se encuantra en la DB",
                icon: "warning"
              });

              throw error;
        }
        
    }


    const handlerEliminarProducto=async(estado,id)=>{


         Swal.fire({
            title: "¿Esta seguro que desea cambiar el estado del producto?",
            text: "Cuidado el estado del producto será cambiado",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Cambiar"
          }).then(async(result)=>{

            if(result.isConfirmed){
 
                try {
                    
                  await deshabilitarProducto(estado,id);

                    Swal.fire({
                        title: "Estado Cambiado!",
                        text: "El estado del producto ha sido cambiado con éxito",
                        icon: "success"
                      });

                      navigate('/dashboard')
                } catch (error) {
                    
                    Swal.fire({
                        title: "Error al Eliminar",
                        text: error.message,
                        icon: "warning",
                      });

                }
            }

        
           }) 
        }


        const handleCrearProducto=async(formData)=>{
            

            try {
                
                await crearProducto(formData);
                Swal.fire({
                    title: "Producto Agregado!",
                    text: "El producto ha sido agregado con éxito",
                    icon: "success"
                  });
                
            } catch (error) {
                
                Swal.fire({
                    title: "Error al Agregar",
                    text: error.message,
                    icon: "error",
                  });
            }




        }


        const handleUpdateProducto=async(id,formData)=>{
            

            try {
                
                await updateProduct(id,formData);
                Swal.fire({
                    title: "Producto Agregado!",
                    text: "El producto ha sido agregado con éxito",
                    icon: "success"
                  });
                
            } catch (error) {
                
                Swal.fire({
                    title: "Error al Agregar",
                    text: error.message+'//',
                    icon: "error",
                  });
            }



        }

        const handleGetCompras=async(username)=>{
            

            try {
                
               return await misCompras(username);
                
                
            } catch (error) {
                
                console.error(error);
            }



        }

        const handlePic=async(formData)=>{
            

            try {
                
                await crearPic(formData);
                Swal.fire({
                    title: "Producto Agregado!",
                    text: "El producto ha sido agregado con éxito",
                    icon: "success"
                  });
                
            } catch (error) {
                
                Swal.fire({
                    title: "Error al Agregar",
                    text: error.message,
                    icon: "error",
                  });
            }



        }

        function blobToFile(theBlob, fileName){
            // Convertir Blob en un archivo File
            theBlob.lastModifiedDate = new Date();
            theBlob.name = fileName;
            return theBlob;
        }
    
        function base64toBlob(base64Data, contentType) {
            contentType = contentType || '';
            var sliceSize = 1024;
            var byteCharacters = atob(base64Data);
            var byteArrays = [];
        
            for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
                var slice = byteCharacters.slice(offset, offset + sliceSize);
        
                var byteNumbers = new Array(slice.length);
                for (var i = 0; i < slice.length; i++) {
                    byteNumbers[i] = slice.charCodeAt(i);
                }
        
                var byteArray = new Uint8Array(byteNumbers);
                byteArrays.push(byteArray);
            }
        
            var blob = new Blob(byteArrays, {type: contentType});
            return blob;
        }


      


            return {
                products,
                handleGetCompras,
                blobToFile,
                base64toBlob,
                handlerBuscarPorIdAll,
                handlerBuscarPorId,
                handlerEliminarProducto,
                handleCrearProducto,
                handlePic,
                handleUpdateProducto,
               
            }
}
