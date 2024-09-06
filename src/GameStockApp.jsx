import {Navigate, Route, Routes, useNavigate } from "react-router-dom"
import { GameStockRoutes} from "./routes/GameStockRoutes"
import { useContext, useEffect } from "react"
import { ProductProvider } from "./context/ProductProvider"
import { LoginAdminPage } from "./auth/pages/LoginAdminPage"
import { Dashboard } from "./components/dashboard/Dashboard"
import { DashBoardContext } from "./auth/context/DashBoardContext"
import { ProductDashBoardProvider } from "./auth/context/ProductDashBoardProvider"
import MyComponent from "./components/MyComponent"

export const GameStockApp=()=>{

    const navigate=useNavigate();

    useEffect(()=>{
        navigate('/landing');
    },[])


    const {login,isUser}=useContext(DashBoardContext);

   
    return(
        <>
        
      
        {<ProductProvider>
        
            <ProductDashBoardProvider>
            
        <Routes>

            {
                 login.isAuth && login.isAdmin && !isUser ? 

                <>
                <Route path="dashboard" element={<Dashboard/>}/>
                <Route path="/*" element={<Navigate to="/dashboard" />}/>
                 
                </>

                : 
                <>
                <Route path="/*" element={<GameStockRoutes/>}/>
                <Route path="admin" element={<LoginAdminPage/>}/>
                <Route path="/*" element={<Navigate to="/landing" />}/>
                </>
                
            }
                
        </Routes>
        </ProductDashBoardProvider>

        </ProductProvider>}
       
        </>
        
    )
    
}
