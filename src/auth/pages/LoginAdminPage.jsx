

import { NavLink, useNavigate } from "react-router-dom";
import imgLogin from "../../assets/loginAdminImg.jpg";
import { useContext, useState } from "react";
import { DashBoardContext } from "../context/DashBoardContext";


const initialLoginForm={

    usuario:'',
    contra:''
}

export const LoginAdminPage=()=>{


    const {handlerLoginAdmin}=useContext(DashBoardContext);
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

        handlerLoginAdmin({usuario,contra});
        setLoginForm(initialLoginForm);
    }





    return(

        <>
        <div className="box-Principal-Login-User" style={{backgroundImage: `url(${imgLogin})`}}>

<div className="boxCardLoginUser ">


     <div className="row rowLoginStile d-flex justify-content-center align-item-center">
          <div className="col-xl-12 boxLoginTitulo mt-5">
             <h1 className="text-center text-light textTtileLoginUser">
                  Bienvenido Administrador
             </h1>
         </div>

         <div className="card cardStyle col-xl-12 pb-5">

             <div className="card-title ">
                     <h2 className="text-center text-light textCardTitle">Ingrese sus Datos</h2>
             </div>
             <div className="card-body d-flex justify-content-center align-item-center m-auto"> 

                     <form onSubmit={onSubmit} className="pb-5">


                        <div className="row rowLoginStile">

                                <div className="col-xl-12">

                                <label htmlFor="username" className="inputs text-light styleFont">Username:</label>
                                    <input id="username" type="text" 
                                    name="usuario"
                                    placeholder="username"
                                    className="form-control sizeInput"
                                    value={usuario}
                                    onChange={OnInputChange}
                                    />
                                </div>


                                <div className="col-xl-12">

                                <label htmlFor="password" className="inputs text-light styleFont">Password:</label>
                                    <input id="password" type="password" 
                                    name="contra"
                                    value={contra}
                                    onChange={OnInputChange}
                                    placeholder="password"
                                    className="form-control sizeInput"
                                    />

                                </div>

                                <div className="col-xl-12 setButonCenter">
                                <button type="submit" className="btn btn inputs  btnStyle">
                                    Submit
                                </button>

                                
                                </div>


                                <div className="col-xl-12 d-flex justify-content-center">
                                        <NavLink  className="aStyle withUndercor" to={'/landing'}>Regresar</NavLink>
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