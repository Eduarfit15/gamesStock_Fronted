import { useContext } from "react";
import { ProductContext } from "../../context/productContext";
import { useNavigate } from "react-router-dom";


export const CardCat=({id,nombre,precio,stock,categoria,imagen,estado})=>{

    const {handlerAddProduct,cartItems}=useContext(ProductContext);

    const thereSomething=cartItems?.find(item=>item.product.id===id);

    const navigate=useNavigate();

    const handlergoCart=()=>{

        navigate("/cart");
    }


    const onAddProduct=(product)=>{

        
        handlerAddProduct(product);
       
        
    }

    return(
        <>
        
        <div className=" cardEntire card">
        
        <img className="imgCardOp" src={`data:image/png;base64,${imagen}`} alt="" />

        <div className="card-body tBody d-flex justify-content-center align-items-center">

            <div className="row">

                <div className="col-xl-12">
                <h3 className="card-title text-center"> {nombre}</h3>
                </div>

                <div className="col-xl-12">
                <p className="card-text text-center ">S/.{precio}</p>
                </div>
                
                
            </div>
          
        </div>

            {
                !thereSomething ?
                <div className=" d-flex justify-content-center align-items-center mb-5">
                <button type="button" className="btnCardComprar" onClick={()=>onAddProduct({id,nombre,precio,stock,categoria,imagen,estado})}
                > Comprar </button>
                </div>
                :
               <div className=" d-flex justify-content-center align-items-center mb-5">
                <button onClick={handlergoCart} className="btnCardComprar1">
                    Ir a Carrito
                </button>
                
               </div> 
            }
            
          
      </div>
        
        
        </>
    );
}