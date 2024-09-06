import { useReducer, useState } from "react";
import { loginReducer } from "../reducers/loginReducer";
import { SaveCard, deleTeCard, finUser, getCard, loginUser, saveClient, saveVenta, updatePass, updateUser } from "../service/authService";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";




const initialLogin=JSON.parse(sessionStorage.getItem('login'))||{
    isAuth:false,
    isAdmin:false,
    user:undefined
}
const intialForm={

    usuario:'',
    contra:'',
    validContra:'',
    nombres:'',
    apellidos:'',
    correo:'',
    nroCelular:'',
    
}
const initialUserErrors={
    usuario:'',
    contra:'',
    correo:'',
  };

const initialProduct=[];
export const useDashboard=()=>{

    
    const [sideBarOpen,setSideBarOpen]=useState(false);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const [op,setOp]=useState('DtPersonal');
   
    const navigate=useNavigate();
    const [login,dispacth]=useReducer(loginReducer,initialLogin);

    const [username,setUsername]=useState(login.isAuth ? login.user.username : '');

    const[errors, setErrors]=useState(initialUserErrors)
    const [isUser,setIsUser]=useState(false);
    


    const handlerLogin=async({usuario,contra})=>{

        try {
        
            const response=await loginUser({usuario,contra});
            const token=response.data.token;
            const claims=JSON.parse(window.atob(token.split(".")[1]));
            
            const user={username: response.data.username};


            dispacth(
                {
                    type:'login',
                    payload:{user,isAdmin: claims.isAdmin},
                }
            );

         setIsUser(true);

         if(claims.isAdmin){
            Swal.fire("Error Login","No cuenta con los permisos","error");
            
         }else{
            sessionStorage.setItem('login',JSON.stringify({
                isAuth:true,
                isAdmin:claims.isAdmin,
                user
            }));
   
            sessionStorage.setItem('token',`Bearer ${token}`);
            Swal.fire("Correct Login","Bienvenido a GameStock ","success");
            navigate('/Landing');
            setUsername(response.data.username);
         }
         
         
        } catch (error) {
            
            if(error.response?.status==401){
                Swal.fire("Error Login","Username o password invalidos","error");
            }
            else if(error.response?.status==403){

                Swal.fire("Error Login","No tienes permisos","error")
            }
            else{
                throw error;
            }
        }
    }


    const handlerLoginAdmin=async({usuario,contra})=>{

        try {
        
            const response=await loginUser({usuario,contra});
            const token=response.data.token;
            const claims=JSON.parse(window.atob(token.split(".")[1]));
            
            const user={username: response.data.username};


            dispacth(
                {
                    type:'login',
                    payload:{user,isAdmin: claims.isAdmin},
                }
            );


         setIsUser(false);

         if(!claims.isAdmin){
            Swal.fire("Error Login","No cuenta con los permisos","error");
            
         }else{
            sessionStorage.setItem('login',JSON.stringify({
                isAuth:true,
                isAdmin:claims.isAdmin,
                user
            }));
   
            sessionStorage.setItem('token',`Bearer ${token}`);
            Swal.fire("Correct Login","Bienvenido a GameStock ","success");
            navigate('/dashboard');
         }
         
         
        } catch (error) {
            
            if(error.response?.status==401){
                Swal.fire("Error Login","Username o password invalidos","error");
            }
            else if(error.response?.status==403){

                Swal.fire("Error Login","No tienes permisos","error")
            }
            else{
                throw error;
            }
        }
    }
    

    const handlerLogout=()=>{

        dispacth({
            type:'logout'
        })

        sessionStorage.removeItem('login');
        sessionStorage.removeItem('token');
        

        if(login.isAdmin){
            navigate('/admin');
        }else{
            navigate('/Landing');
        }
        

    }

    const toggleSideBar=()=>{

        setSideBarOpen(!sideBarOpen);
    }



    const handleSaveClient=async(user)=>{

        try {
            
            await saveClient(user);

            Swal.fire("success","Usuario creado con éxito","success");
            navigate('/user');
        } catch (error) {
            
           throw error;
        }


    }

    const isInDB=async(username)=>{

        try {
            
            await finUserWROL(username);

           return true;

        } catch (error) {

            return false;
           
        }
    }


    const handlerUpdatePass=async(formData)=>{

        try {
            
            await updatePass(formData);
            Swal.fire("success","Contraseña modficada con éxito","success");
            navigate('/user');
        } catch (error) {
            Swal.fire("Failed","El usuario ingresado no se encuentra registrado","error");
        }
    }

    const handlerSaveVenta=async(username,formData)=>{

        try {  
            
            if(login.isAuth){
                await saveVenta(username,formData);
                Swal.fire("success","Su compra ha sido realizada con éxito","success");
                sessionStorage.removeItem('cart');
                navigate('/cart');
               
            }
           // Swal.fire("Failed","Necesitas iniciar sesión primero antes de comprar","error");
            
        } catch (error) {
            Swal.fire("Failed","El usuario no se ha encontrado"+error.message,"error");
        }
    }
    

    const handlerUpdateUser=async(username,{usuario,nombre,apellido,correo,nroCelular})=>{

        try {
            
            await updateUser(username,{usuario,nombre,apellido,correo,nroCelular});
            Swal.fire("success","Usuario modificado éxitosamente","success");
           
        } catch (error) {
            Swal.fire("Failed","El usuario no se ha encontrado"+error.message,"error");
        }
    }

    const handlerFindUserr=async(username)=>{

        try {
            
           const response= await finUser(username);
           return response.data;
           
        } catch (error) {
            Swal.fire("Failed","El usuario no se ha encontrado"+error.message,"error");
        }
    }


    const handlerSaveCard=async(username,{n_tarjeta,f_vencimiento,cvv,correo,tipo})=>{

        try {
            
          await SaveCard(username,{n_tarjeta,f_vencimiento,cvv,correo,tipo});
           Swal.fire("success","Tarjeta guardada correctamente","success");
           navigate("/miPerfil");
          
           
        } catch (error) {
            Swal.fire("Failed","El usuario no se ha encontrado"+error.message,"error");
        }
    }


    const handlerGetCard=async(username)=>{

        try {
        
          const response=await getCard(username);
          return response.data;
        

          
        } catch (error) {
            
            throw error;
        }
    }

    const handlerDeleteCard=async(username)=>{
       
                try {
        
                    await deleTeCard(username);
                    Swal.fire("success","Tarjeta Eliminada correctamente","success");
                    navigate("/miPerfil");
                  
                  } catch (error) {
                      
                      Swal.fire("Failed","El usuario no se ha encontrado"+error.message,"error");
                  }
    }

    return{

        sideBarOpen,
        screenWidth,
        op,
        login,
        initialLogin,
        errors,
        isUser,
        username,
        isInDB,
        handlerDeleteCard,
        handlerGetCard,
        handlerSaveCard,
        setUsername,
        handlerFindUserr,
        handlerUpdateUser,
        handlerSaveVenta,
        handlerUpdatePass,
        handleSaveClient,
        handlerLoginAdmin,
        handlerLogin,
        handlerLogout,
        setOp,
        setSideBarOpen,
        setScreenWidth,
        toggleSideBar
    }

}