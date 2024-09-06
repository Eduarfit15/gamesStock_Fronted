import { useContext, useEffect } from "react";
import { SideInfPurchase } from "./SideInfPurchase";
import { ProductContext } from "../../context/productContext";
import { CartCards } from "./CartCards";
import MyComponent from "../MyComponent";


export const CartView=()=>{


    const {cartItems,handlerMoveCa}=useContext(ProductContext);

    
    
    return(
        <>
        
        
        <section className="BoxCartPrincipal">


        <div  className="BoxCart ">

  
            
            <div className="row  tamC ">

                <div className="col-xl-9 col-lg-12 col-md-12 col-sm-12 col-xs-12 p-0 ">

                  {

                    cartItems && cartItems.length!==0 ?

                     cartItems.map(item=>(


                       
                        <div className="row tamC  mt-5 p-3" key={item.product.id}>
                            
                            <CartCards id={item.product.id}
                             nombre={item.product.nombre} 
                             precio={item.product.precio} 
                             stock={item.product.stock}
                             imagen={item.product.imagen} 
                             cantidad={item.quantity} />
                            
                        </div>
                        
                        
                    ))

                    :
                    <div  className="d-flex justify-content-center align-items-center mt-5">
                        <div className="row">

                                <div className="col-xl-12">
                                <p className="text-danger textNoCart text-center">No hay productos en carrito :(</p>
                                </div>

                                <div className="col-xl-12 d-flex justify-content-center align-items-center">
                                <button className="btn btn-dark p-2" onClick={handlerMoveCa}>Ir a Cátalogo</button>
                                </div>
                        </div>
                       
                       
                        
                       
                    </div>
                  }
                  
                </div>

                <div className="col-xl-3 col-lg-12 col-md-12 col-sm-12 col-xs-12  mt-5 mb-5">

                           <SideInfPurchase/>
                </div>

            </div>

    



</div>



</section>
        
        </>
    );
}