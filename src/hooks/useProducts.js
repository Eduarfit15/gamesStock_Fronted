import { useEffect, useReducer, useState } from "react"
import { productReducer} from "../reducers/productReducer"
import { findByIdAll, findall } from "../services/productService";
import { useNavigate } from "react-router-dom";
import { cartReducer } from "../reducers/cartReducer";


const initialCartItem=JSON.parse(sessionStorage.getItem('cart')) || [];
const initialProduct=[];

export const useProducts=()=>{

    const [cartItems,dispatch]=useReducer(cartReducer,initialCartItem);
    const [products,dispach]=useReducer(productReducer,initialProduct);
    const [terminoBusqueda, setTerminoBusqueda] = useState('');

    useEffect(()=>{

        sessionStorage.setItem('cart',JSON.stringify(cartItems));

    },[cartItems]);



    const handlerAddProduct=(product)=>{

            const hasItem=(cartItems.find((i)=>i.product.id === product.id))


            if(!hasItem){
                
                dispatch({
                    type:"AddProductCart",
                    payload:product
                })
            }

    }

    const handlerDecreaseProduct=(id,cantidad)=>{

        
            if(cantidad>1){
                dispatch({
                    type:"DecreaseProductCart",
                    payload:id
                });
    
            }
            
        

    }

    const handlerDeletAllProductsCart=()=>{

        dispatch({
            type: 'DeleteAll',
        })
    }


    const handlerIncreaseProduct=(id,stock,cantidad)=>{

        
        if(cantidad<stock){
            dispatch({
                type:"IncreaseProductCart",
                payload: id,
            });


        }
            
        
        
    }

    const handlerDeleteCart=(id)=>{
        dispatch({
         type: 'DeleteProductCart',
         payload: id,
        })
     }


    const navigate=useNavigate();
  
    const handlerMoveCa=()=>{
  
        navigate('/catalogo');
  
    }

    const handlerMoveLa=()=>{
  
        navigate('/landing');
  
    }


    
    const handlerBuscar=(event)=>{

        setTerminoBusqueda(event.target.value);
    }



    const getProducts=async()=>{

        const result=await findall();

       
        dispach({

             type:"loadingProducts",
             payload:result.data
        });


        
    }


    return {
        products,
        terminoBusqueda,
        cartItems,
        handlerDeletAllProductsCart,
        handlerAddProduct,
        handlerDecreaseProduct,
        handlerIncreaseProduct,
        handlerDeleteCart,
        setTerminoBusqueda,
        handlerBuscar,
        getProducts,
        handlerMoveCa,
        handlerMoveLa
    }
}