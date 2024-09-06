import { useContext, useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { DashBoardContext } from "../../auth/context/DashBoardContext";
import Swal from "sweetalert2";

const initialCard = {
    n_tarjeta:'',
    tipo:'',

}


export const MetodoDePago=()=>{
    const {toggleSideBar,screenWidth,handlerGetCard,username,handlerDeleteCard}=useContext(DashBoardContext);

    const [tarjeta,setTarjeta]=useState(initialCard);
    const {n_tarjeta,tipo}=tarjeta;
   
    const navigate=useNavigate();
    

    const getCards=async(username)=>{

        const response=await handlerGetCard(username);
        
        
        setTarjeta(
            {
            n_tarjeta:response.n_tarjeta,
            tipo:response.tipo,
            }
        );
        

    }


    const delteCard=()=>{

        Swal.fire({
            title: "Esta seguro que desea eliminar",
            text: "Cuidado el usuario sera eliminado",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, eliminar"
          }).then(async(result) => {
            if (result.isConfirmed) {
      
                handlerDeleteCard(username);
                setTarjeta(
                    {
                    n_tarjeta:undefined,
                    tipo:undefined,
                    }
                );
      
            }
          });
       
    }

        
    
    const navegarCard=()=>{

        navigate("/mePago")
    }

    useEffect(()=>{
        getCards(username);

    },[]);



    return(

        <>
        
        <div className="BoxPrincipalMetodPagar ">

               

                <div className="row">
                        <div className="col-xl-2 col-lg-1 col-md-1 col-sm-1 col-xs-1 col-2">
                        <button onClick={toggleSideBar} className={` buttonSideOpenPro openHovePro ${screenWidth>=1347 ? 'aparecerButton' : ''}`} > 
                        <img className="imgSizeDashSide tipoLetra" src="./imgs/SideProBurguer.png" alt="" /></button>
                        </div >
                           
                        <div className="col-xl-11 col-lg-11 col-md-11 col-sm-11 col-xs-10 col-10">
                        <h2 className="text-center titlePerPago">Método de Pago</h2>
                        </div>
                </div>
                    
             

            <div className="card p-5 cardStylesProPago ">

                <div className="row rowStylePro ">


                         <div className="col-xl-12">
                            <label htmlFor="" className="btnModific">Tipo:</label>
                            <input type="text" value={`${tipo==undefined  ? 'No existe' : tipo}`}  className="form-control inputCreateStyle btnModific" readOnly/>
                        </div>


                        <div className="col-xl-12">
                            <label htmlFor="" className="btnModific">Número de la tarjeta:</label>
                            <input type={`${n_tarjeta==undefined  ? 'text': 'number'}`} value={`${n_tarjeta==undefined ? 'No existe' : n_tarjeta}`} className="form-control inputCreateStyle btnModific" readOnly/>
                        </div>

                        
                        <div className="col-xl-12">
                                    <div className="row">

                                            <div className="col-xl-6 d-flex justify-content-center">
                                                    <button type="button" onClick={delteCard} className="btn btnEdit buttons"
                                                    
                                                    disabled={tipo==undefined ? true : false}>Eliminar Tarjeta</button>
                                            </div>

                                            <div className="col-xl-6 d-flex justify-content-center">

                                                <button type="button" 
                                                onClick={navegarCard}
                                                className={"btn btnModific buttons"} disabled={tipo==undefined ? false : true}>
                                                             Agregar Tarjeta
                                                </button>
                                                   
                                            </div>
                                    </div>
                            </div>




                </div>
</div>



        </div>
        
        </>
    );
}