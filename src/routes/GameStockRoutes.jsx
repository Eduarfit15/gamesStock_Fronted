import { Navigate, Route, Routes } from "react-router-dom"
import { LandingPage } from "../pages/LandingPage"
import { Catalogo } from "../pages/Catalogo"
import { useContext, useEffect } from "react";
import { ProductContext } from "../context/productContext";
import { Cart } from "../pages/Cart";
import { CartView } from "../components/cart/CartView";
import { CartCards } from "../components/cart/CartCards";
import { LoginUserPage } from "../auth/pages/LoginUserPage";
import { LoginAdminPage } from "../auth/pages/LoginAdminPage";
import { Dashboard } from "../components/dashboard/Dashboard";
import { Navbar } from "../components/layout/Navbar";
import { CreateUserPage } from "../auth/pages/CreateUserPage";
import { RecoverPasswordPage } from "../auth/pages/RecoverPasswordPage";
import { SideBarProfile } from "../components/miProfile/SideBarProfile";
import { DashBoardContext } from "../auth/context/DashBoardContext";
import { MiPerfil } from "../components/miProfile/MiPerfil";
import { SaveCardForm } from "../components/miProfile/SaveCardForm";
import { MetodoDePago } from "../components/miProfile/MetodoDePago";
import MyComponent from "../components/MyComponent";


export const GameStockRoutes=()=>{
    const {isUser}=useContext(DashBoardContext);
    
  
    return(

        <>

       <Navbar/>
            <Routes>
            
                        <Route path="landing" element={<LandingPage/>}/>
                        <Route path="catalogo" element={<Catalogo/>} />
                        <Route path="cart" element={<Cart/>} />
                        <Route path="user" element={<LoginUserPage/>}/>
                        <Route path="crearCuenta" element={<CreateUserPage/>}/>
                        <Route path="recoverPass" element={<RecoverPasswordPage/>}/>
                    
                         <Route path="miPerfil" element={<MiPerfil/>}/>
                         <Route path="mePago" element={<SaveCardForm/>}/>
                       
                    
                


                

            </Routes>

       
        
        
        
        </>
    );

    
}