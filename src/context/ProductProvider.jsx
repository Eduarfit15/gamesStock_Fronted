import { useProducts } from "../hooks/useProducts";
import { ProductContext } from "./productContext";


export const ProductProvider=({children})=>{


    const {
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
    }=useProducts();

    return(

            <ProductContext.Provider value={

                    {

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


            }>

            {children}



            </ProductContext.Provider>
    );
}