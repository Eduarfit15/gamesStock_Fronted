import { useContext, useEffect, useState } from "react";
import { ProductContext } from "../../context/productContext";
import { DashBoardContext } from "../../auth/context/DashBoardContext";



export const NavBarDash=()=>{


  const {toggleSideBar,screenWidth,handlerLogout,login}=useContext(DashBoardContext);
 
  return(

    
    
    <>
    <nav className="navbar navbar-expand-lg bg-light mt-3  NavStyles">
  <div className="container-fluid">
    
    
    <div className="row rowDisplayNav">
    <div className="col-xl-2 col-lg-2 col-md-12 col-sm-12 col-xs-12 col-12">

    <h2 className="navbar-brand tipoLetra" href="#">Bienvenido: {login.user.username}</h2>
    </div>

    <div className="col-xl-10 col-lg-10 col-md-12 col-sm-12 col-xs-12 col-12" >
     
     <div className="row rowDisplayNav">
     <div className="col-xl-5 col-lg-6 col-md-6 col-sm-6 col-sx-6 col-6">
          <button onClick={toggleSideBar} className={` buttonSideOpen openHove ${screenWidth>=1025 ? 'aparecerButton' : ''}`} > 
          <img className="imgSizeDashSide tipoLetra" src="./imgs/icons/openSide.png" alt="" />Open</button>
          </div>
        
          
         
         
          <div className="col-xl-5 col-lg-6 col-md-6 col-sm-6 col-sx-6 col-6">
            <button onClick={handlerLogout} className="buttonSideOpen buttonLogout tipoLetra">
            <img className="imgSizeDash" src="./imgs/icons/Salir.png" alt="" />LOGOUT
            </button>
          </div>
     </div>
          
  
      
    </div>

    </div>
    
    
   
    
  </div>
</nav>
    
    
    </>
  );
}