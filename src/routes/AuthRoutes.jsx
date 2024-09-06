
import { Route, Routes } from "react-router-dom"
import { LandingPage } from "../pages/LandingPage"
import { LoginUserPage } from "../auth/pages/LoginUserPage"
import { LoginAdminPage } from "../auth/pages/LoginAdminPage"
import { Dashboard } from "../components/dashboard/Dashboard"
import { useContext } from "react"
import { DashBoardContext } from "../auth/context/DashBoardContext"


export const AuthRoutes=()=>{

    const {login}=useContext(DashBoardContext);


    return(
<>
    
    <Routes>

        {/* <Route path="user" element={<LoginUserPage/>}/> */}
        {/* is not admin */}
        {/* <Route path="miPerfil"/> 
        <Route path="crearCuenta"/>
        <Route path="recuperarContraseña"/> */}
       {/*  //isadmin */}


       {

        login.isAdmin?
        <Route path="dashboard" element={<Dashboard/>}/>:
        <Route path="miPerfil" element={<Dashboard/>}/>

       }
        
        
    </Routes>
    
    
    </>
    )
    
}