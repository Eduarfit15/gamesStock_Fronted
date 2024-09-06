import { useContext, useEffect } from "react";
import { SideBarProfile } from "./SideBarProfile";
import { DashBoardContext } from "../../auth/context/DashBoardContext";
import { DatosPersonales } from "./DatosPersonales";
import { MetodoDePago } from "./MetodoDePago";
import { MisCompras } from "./MisCompras";
import MyComponent from "../MyComponent";



export const MiPerfil=()=>{

    const {screenWidth,setScreenWidth,setSideBarOpen,op,setOp}=useContext(DashBoardContext);
    useEffect(()=>{

      setOp('DtPersonal');
        const handlerResize=()=>{
    
          setScreenWidth(window.innerWidth);
          setSideBarOpen(false);
         
        }
    
        window.addEventListener('resize', handlerResize);
    
        // Limpia el evento de redimensionamiento al desmontar el componente
        return () => {
          window.removeEventListener('resize', handlerResize);
        };

        },[])

    return(
            <>
          
          <MyComponent/>
               <div  className="BoxMiPerfilPrincipal ">

              <div   className="row rowStylePro ">
              
                      <div className="p-2 genSide col-xl-3 col-lg-3 pe-0">
                              <SideBarProfile/>
                      </div>

                        <div className={` p-3  genNav ${screenWidth<=1347 ? 'col-xl-12 col-lg-12': 'col-xl-9 col-lg-9'}`}>
                          {
                              op==='DtPersonal' ? <DatosPersonales/> :
                              op==='Mpago' ? <MetodoDePago/>:
                              op==='Mcompras' ? <MisCompras/>:''
                              
                          }
                      </div>
                      

              </div>
              </div>
         
          
            </>
    );
}
