import { useContext, useEffect, useState } from "react";
import { ProductContext } from "../../context/productContext";
import { DashBoardContext } from "../../auth/context/DashBoardContext";



export const SideBarDash=()=>{


    const {sideBarOpen, setSideBarOpen,screenWidth,handlerLogout,setOp}=useContext(DashBoardContext);
   
    const [opcion,setOpcion]=useState('opcion1');
    
    const OphandlerChangeDash=(id,option)=>{
        setOpcion(id);
        setOp(option);
    
    }

    return(
        <>
        
        <aside id="asidePro" className={`sidebar ${ sideBarOpen ? 'open' : screenWidth<=1024 ? 'closed': ''}`}>
            <div className="boxAsideDash">

                    <div>
                        <div className="row rowDisplayNav ">
                                <div className={` p-0 ${screenWidth>=1025 ? 'col-12': 'col-10'}`}>
                                <h3 className="text-center text-light tipoLetra">Categorías </h3>
                                </div>

                                <div className={`col-2 p-0 ${screenWidth>=1025 ? 'aparecerX': ''}`}>
                                <button onClick={()=>setSideBarOpen(false)} className="buttonX"><img className="imgSizeDashx" src="./imgs/icons/x.png" alt="" /> </button>
                                </div>
                        </div>
                       
                        <hr className="text-light"/>
                    </div>

                    <div >
                        <ul className="mt-5">
                            <li className={`optionLiDash tipoLetra ${opcion==='opcion1'? 'seleccionadoDash': ''}`}>
                                <button onClick={()=>OphandlerChangeDash('opcion1','dashboard')} className="optionsSideDash">
                                   <img className="imgSizeDash" src="./imgs/icons/Dashboard.png" alt="" /> DashBoard</button>
                            </li>
                            <li className={`optionLiDash tipoLetra ${opcion==='opcion2'? 'seleccionadoDash': ''}`}>
                                <button onClick={()=>OphandlerChangeDash('opcion2','crear')} className="optionsSideDash">
                                   <img className="imgSizeDash" src="./imgs/icons/CrearProducto.png" alt="" /> Crear Producto</button>
                            </li>
                            <li className={`optionLiDash tipoLetra ${opcion==='opcion3'? 'seleccionadoDash': ''}`}>
                                <button onClick={()=>OphandlerChangeDash('opcion3','modificar')} className="optionsSideDash">
                                   <img className="imgSizeDash" src="./imgs/icons/EditarProducto.png" alt="" /> Modificar Producto</button>
                            </li>
                            <li className={`optionLiDash tipoLetra ${opcion==='opcion4'? 'seleccionadoDash': ''}`}>
                                <button onClick={()=>OphandlerChangeDash('opcion4','eliminar')} className="optionsSideDash">
                                   <img className="imgSizeDash" src="./imgs/icons/EliminarProducto.png" alt="" /> Cambiar Estado</button>
                            </li>
                            <li className={`optionLiDash tipoLetra ${opcion==='opcion5'? 'seleccionadoDash': ''}`}>
                                <button onClick={()=>{
                                    OphandlerChangeDash('opcion5','')
                                    handlerLogout();
                                }
                                 }
                                  className="optionsSideDash">
                                   <img className="imgSizeDash" src="./imgs/icons/Salir.png" alt="" /> Sign Out</button>
                            </li>
                        </ul>
                    </div>
            </div>
        </aside>
        </>
    );
}