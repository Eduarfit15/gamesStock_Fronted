import { useContext, useState } from "react";
import { DashBoardContext } from "../../auth/context/DashBoardContext";


export const SideBarProfile=()=>{




    
    const {sideBarOpen, setSideBarOpen,screenWidth,setOp}=useContext(DashBoardContext);
   
    const [opcion,setOpcion]=useState('opcion1');
    
    const OphandlerChangeDash=(id,option)=>{
        setOpcion(id);
        setOp(option);
    
    }


    return(

        <>
        
        <aside id="asideDash" className={`sidebarPro ${ sideBarOpen ? 'openPro' : screenWidth<=1347 ? 'closedPro': ''}`}>
            <div className="boxAsideDash">

                    <div>
                        <div className="row rowDisplayNav ">
                                <div className={` p-0 ${screenWidth>=1347 ? 'col-12': 'col-10'}`}>
                                <h3 className="text-center text-light tipoLetra">Mi Perfil </h3>
                                </div>

                                <div className={`col-2 p-0 ${screenWidth>=1347 ? 'aparecerX': ''}`}>
                                <button onClick={()=>setSideBarOpen(false)} className="buttonX"><img className="imgSizeDashx" src="./imgs/icons/x.png" alt="" /> </button>
                                </div>
                        </div>
                       
                        <hr className="text-light"/>
                    </div>

                    <div>
                        <ul className="mt-5 optionUl">
                            <li className={`optionLiDash tipoLetra ${opcion==='opcion1'? 'seleccionadoPro': ''}`}>
                                <button onClick={()=>OphandlerChangeDash('opcion1','DtPersonal')} className="optionsSidePro">
                                   <img className="imgSizePro" src="./imgs/icons/Dashboard.png" alt="" /> Datos Personales</button>
                            </li>
                            <li className={`optionLiDash tipoLetra ${opcion==='opcion2'? 'seleccionadoPro': ''}`}>
                                <button onClick={()=>OphandlerChangeDash('opcion2','Mpago')} className="optionsSidePro">
                                   <img className="imgSizePro" src="./imgs/icons/CrearProducto.png" alt="" /> Método de Pago</button>
                            </li>
                            <li className={`optionLiDash tipoLetra ${opcion==='opcion3'? 'seleccionadoPro': ''}`}>
                                <button onClick={()=>OphandlerChangeDash('opcion3','Mcompras')} className="optionsSidePro">
                                   <img className="imgSizePro" src="./imgs/icons/EditarProducto.png" alt="" /> Mis compras</button>
                            </li>
                            
                           
                        </ul>
                    </div>
            </div>
        </aside>
        </>
        
       

    );
}