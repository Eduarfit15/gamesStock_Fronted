import { useProductDashboard } from "../hooks/useProductDasboard"
import { ProductDashBoardContext } from "./ProductDashBoardContext";




export const ProductDashBoardProvider=({children})=>{


    const {
        handlerBuscarPorIdAll,
        handlerBuscarPorId,
        handlerEliminarProducto,
        handleCrearProducto,
        handlePic,
        handleUpdateProducto,
        blobToFile,
        base64toBlob,
        handleGetCompras,
        products,
    }=useProductDashboard();


    return(

        <ProductDashBoardContext.Provider value={

            {
                blobToFile,
                base64toBlob,
                handlerBuscarPorIdAll,
                handlerBuscarPorId,
                handlerEliminarProducto,
                handleCrearProducto,
                handlePic,
                handleUpdateProducto,
                handleGetCompras,
                products,
            }
        }>

            {children}
        </ProductDashBoardContext.Provider>


    )

}