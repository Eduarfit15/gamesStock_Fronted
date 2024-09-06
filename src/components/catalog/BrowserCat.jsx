import { useContext, useEffect, useState} from "react";

import { ProductContext } from "../../context/productContext";
import { calculateTamItems } from "../../services/productService";
import { Sidebar } from "./Sidebar";
import MyComponent from "../MyComponent";


export const BrowserCat=()=>{


    const {handlerBuscar,terminoBusqueda,cartItems}=useContext(ProductContext);
    const [count,setCount]=useState(0);

    useEffect(()=>{


        setCount(calculateTamItems(cartItems));

    },[cartItems]);

    return (

        <>

       
        <section >

                <div  className="BoxPrincipalBrowser pt-5">

                <div className="row cartImg">


                    <div className="col-xl-5 boxBrowser d-flex justify-content-center align-content-center">


                        <h2 className="textCatalgo">GameStock</h2>


                    </div>

                    <div className=" col-xl-5  ">

                        <input className="inputBrow" 
                        type="text"  
                        placeholder="Search products"
                        value={terminoBusqueda}
                        onChange={handlerBuscar}
                        />

                    </div>

                    <div className="col-xl-2 d-flex justify-content-center align-content-center p-0">


                        
                        <img className="cartP" src="./imgs/cart.gif" alt="" />
                        <div className="canPro">{count}</div>
                       
                        

                    </div>

                </div>



                </div>
        </section>


        <Sidebar/>
        
        


        </>

    );
}