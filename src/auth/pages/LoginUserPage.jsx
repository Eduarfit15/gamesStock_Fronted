

import { useContext, useState } from "react";
import imgLogin from "../../assets/loginImg.jpg";
import { DashBoardContext } from "../context/DashBoardContext";
import Swal from "sweetalert2";
import { NavLink, useNavigate } from "react-router-dom";


const initialLoginForm={

    usuario:'',
    contra:''
}


export const LoginUserPage=()=>{


    

    const {handlerLogin}=useContext(DashBoardContext);
    const [loginForm,setLoginForm]=useState(initialLoginForm);
    const navigate=useNavigate();
    const {usuario,contra}=loginForm;
 



    const OnInputChange=({target})=>{

        const {name,value}=target;

        setLoginForm({
         ...loginForm,
            [name]:value,
        });

       
    }


    const onSubmit=(e)=>{

        e.preventDefault();

        if(!usuario || !contra){
            Swal.fire('Error de validación', 'Username y password requeridos','error');
            return;
        }

        handlerLogin({usuario,contra});
        setLoginForm(initialLoginForm);
    }







    return(
        <>
        
                <div className="box-Principal-Login-User pt-5 mt-1" style={{backgroundImage: `url(${imgLogin})`}}>

                   <div className="boxCardLoginUser ">


                        <div className="row rowLoginStile d-flex justify-content-center align-item-center">
                             <div className="col-xl-12 boxLoginTitulo mt-5">
                                <h1 className="text-center text-light textTtileLoginUser">
                                     Bienvenido a GameStock
                                </h1>
                            </div>

                            <div className="card cardStyle col-xl-12 ">

                                <div className="card-title ">
                                        <h2 className="text-center text-light textCardTitle">Ingrese sus Datos</h2>
                                </div>
                                <div className="card-body d-flex justify-content-center align-item-center m-auto"> 

                                        <form onSubmit={onSubmit}>

                                            <label htmlFor="username" className="inputs text-light styleFont">Username:</label>
                                            <input
                                            
                                             type="text" 
                                            name="usuario"
                                             placeholder="username"
                                             className="form-control "
                                             value={usuario}
                                             onChange={OnInputChange}

                                             required
                                             />

                                            <label htmlFor="password" className="inputs text-light styleFont">Password:</label>
                                            <input 
                                             
                                             type="password" 
                                            name="contra"
                                             placeholder="password"
                                             className="form-control "
                                             value={contra}
                                             onChange={OnInputChange}
                                             required
                                             />

                                            <div className="setButonCenter">
                                            <button type="submit" className="btn btn inputs  btnStyle">
                                                Submit
                                             </button>

                                             
                                            </div>

                                            <div className="row rowLoginStile">

                                                <div className="col-xl-12 d-flex justify-content-center align-item-center">
                                                <NavLink  className={"styleFont aStyle "} to={"/recoverPass"}>
                                                ¿Has olvidado tú contraseña?
                                            </NavLink>

                                           
                                                </div>

                                                <div className="col-xl-12 d-flex justify-content-center align-item-center">
                                                <NavLink  className={"styleFont aStyle"} to={"/crearCuenta"}>
                                                    Crear cuenta
                                                </NavLink>
                                                </div>
                                            </div>

                                            
                                             

                                        </form>
                                </div>
                            </div>
                        </div>
                            

                            

                   </div>
    
                </div>
        
        </>
    );
}