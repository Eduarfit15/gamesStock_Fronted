import { useContext, useEffect, useState } from "react";
import { ProductContext } from "../../context/productContext";
import { calculatItemsSubTotal } from "../../services/productService";
import { DashBoardContext } from "../../auth/context/DashBoardContext";


const initialCard={

  n_tarjeta:''
  ,f_vencimiento:''
  ,cvv:''
  ,correo:''
  ,tipo:''
}
export const SideInfPurchase = () => {


      const {cartItems,handlerDeletAllProductsCart}=useContext(ProductContext);
      const [subTotal,setSubtotal]=useState(0);
      const {login,handlerSaveVenta,username,handlerGetCard}=useContext(DashBoardContext);

      const [response,setResponse]=useState(initialCard);
      const {n_tarjeta}=response;

      useEffect(() => {

        setSubtotal(calculatItemsSubTotal(cartItems));

      },[cartItems]);

      const SesionProducts=()=>{
        const products = cartItems.map(item => item.product.id);
        const cantidad = cartItems.map(item => item.quantity);
        
        const user=username;

        const productosJson = JSON.stringify(products);
        const cantidadesJson = JSON.stringify(cantidad);

        const formData = {
          productos: productosJson,
          total: subTotal.toFixed(2), // Aquí se incluye el total en el cuerpo de la solicitud
          cantidades: cantidadesJson
        };
        handlerDeletAllProductsCart();
        handlerSaveVenta(user,formData);

    }


    const handlerCards=async()=>{
      const response=await handlerGetCard(username);
      setResponse(
        {
        n_tarjeta:response.n_tarjeta
        }
    );
      
    }



    useEffect(()=>{

      handlerCards();
    },[]);


  return (
    <>
      <div className="row tamC backColorCardInfo  p-1 pb-3">
        <div className="col-xl-12 col-lg-12 pb-4">
          <h3 className="text-center letraCart">Información de la compra</h3>
        </div>

        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <div className="row tamC ">
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-6 col-6">
              <h4 className="text-center letraCart">Subtotal</h4>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-6 col-6">
              <p className="text-center letraCart">S/.{(subTotal*0.82).toFixed(2)}</p>
            </div>
          </div>
        </div>

        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <div className="row tamC ">
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-6 col-6">
              <h4 className="text-center letraCart">IGV</h4>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-6 col-6">
              <p className="text-center letraCart">S/.{(subTotal*0.18).toFixed(2)}</p>
            </div>
          </div>
        </div>

        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <div className="row tamC ">
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-6 col-6">
              <h4 className="text-center letraCart">Total</h4>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-6 col-6">
              <p className="text-center letraCart">S/.{subTotal.toFixed(2)}</p>
            </div>
          </div>
        </div>

        <div className="col-xl-12 btnCart">

          {
            login.isAuth && cartItems.length!==0 && n_tarjeta!==undefined ?
            <button 
          type="button"
          onClick={SesionProducts}
          className="btn btn-dark letraCart">Comprar</button>
          :
          <p className="text-danger text-center">{`${!login.isAuth?' Necesitas iniciar sesión para poder comprar':
                                            n_tarjeta==undefined ? 'Necesita tener un metodo de pago para comprar':
                                                 'Necesitas escoger productos para poder comprar'}`}</p>
          }
          


        </div>
      </div>
    </>
  );
};
