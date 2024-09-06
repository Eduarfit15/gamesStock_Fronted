import { useContext } from "react";
import { ProductContext } from "../../context/productContext";


export const CartCards=({id,nombre,precio,stock,imagen,cantidad})=>{


    const {handlerDeleteCart,handlerIncreaseProduct,handlerDecreaseProduct}=useContext(ProductContext);

    
    const handlewrIncreasProduct=(id,stock,cantidad)=>{
        handlerIncreaseProduct(id,stock,cantidad);
    }

    const handlerDelete=(id)=>{
        handlerDeleteCart(id);
        
    }
    return(
        <>
        
                        <div className="col-xl-3 col-lg-3 backColorCard p-0">

                            <img className="tamC tamImgCart" src={`data:image/png;base64,${imagen}`} alt="" />
                        </div>

                        <div className="col-xl-2 col-lg-2 backColorCard ">

                                <h3 className="text-center letraCart"> Título</h3>
                                <p className="text-center letraCart">{nombre}</p>
                        </div>

                        <div className="col-xl-2 col-lg-2 backColorCard">
                                <h3 className="text-center letraCart"> Precio</h3>
                                <p className="text-center letraCart">S/.{precio}</p>
                        </div>

                        <div className="col-xl-2 col-lg-2 backColorCard ">
                                
                                    <h3 className="text-center letraCart">Cantidad</h3>
                                
                                    <p className="text-center letraCart">{cantidad}</p>
                                  
                                    <div className="col-xl-12 btnCart">
                                    <button className="btn btn-success m-1" onClick={()=>handlewrIncreasProduct(id,stock,cantidad)}>+</button>
                                    <button className="btn btn-danger" onClick={()=>handlerDecreaseProduct(id,cantidad)}>-</button>
                                    </div>
                              
                        </div>

                        <div className="col-xl-2 col-lg-2 backColorCard">
                                <h3 className="text-center letraCart">Subtotal</h3>
                                <p className="text-center letraCart">S/.{precio*cantidad}</p>
                        </div>

                        <div className="col-xl-1 col-lg-1 backColorCard btnCart">
                            
                            <div className="btnCart">
                                <button className="btn" onClick={()=>handlerDelete(id)}>
                                    <img className="tamTrash" src="./imgs/trash.gif" alt="" />
                                </button>
                            </div>
                            
                        </div>
                    

                 
        
        
        </>
    )
}