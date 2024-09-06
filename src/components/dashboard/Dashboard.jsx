import { useContext, useEffect } from "react";
import { NavBarDash } from "./NavBarDash";
import { SideBarDash } from "./SideBarDash";
import { ProductContext } from "../../context/productContext";
import { CreateForm } from "./CreateForm";
import { UpdateFomr } from "./UpdateForm";
import { DeleteForm } from "./DeleteForm";
import { DashBoardContext } from "../../auth/context/DashBoardContext";
import MyComponent from "../MyComponent";



export const Dashboard=()=>{


    const {screenWidth,setScreenWidth,setSideBarOpen,op}=useContext(DashBoardContext);

   

  useEffect(()=>{

    const handlerResize=()=>{

      setScreenWidth(window.innerWidth);
      setSideBarOpen(false);
      console.log(screenWidth);
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
        <div className="BoxDashBoardPrincipal generateWidth">

                <div className="row rowDisplay">

                    <div className="p-0 genSide col-xl-2 col-lg-2 col-md-2 col-xs-2 col-2 d-flex justify-content-center">
                    <SideBarDash/>
                    </div>

                    <div className={`ps-3 genNav ${screenWidth>=1024 ? 'col-xl-10 col-lg-10':'col-xl-12'}`}>
                        <NavBarDash/>
                        {
                          op==='crear'?<CreateForm/>: 
                          op==='modificar'? <UpdateFomr/> : 
                          op=='eliminar'? <DeleteForm/>:''
                        }
                    </div>
                </div>
        </div>
      


        
        
        
        </>
    );
}