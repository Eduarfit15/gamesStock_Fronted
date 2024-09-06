
import { useContext, useState } from "react";
import imgLogin from "../../assets/loginImg.jpg";
import Swal from "sweetalert2";
import { DashBoardContext } from "../context/DashBoardContext";
import { NavLink } from "react-router-dom";
import { pruebaRcontraseña } from "../../PruebasErrores/pruebaRcontraseña";
const initialRecoverForm={
    usuario:'',
    contra:'',
    validContra:''
}





export const RecoverPasswordPage=()=>{

    const {handlerUpdatePass}=useContext(DashBoardContext);
    const [recoverForm,setRecoverForm]=useState(initialRecoverForm);
    const {usuario,contra,validContra}=recoverForm;

    const {prubaInputRcontra}=pruebaRcontraseña();

    const OnInpuntChange=()=>{
        const {name,value}=event.target;
        setRecoverForm({
         ...recoverForm,
            [name]:value,
        });
    }

    const OnSubmit=(e)=>{

        e.preventDefault();
        if(prubaInputRcontra(usuario,contra,validContra)){
            
            return;

        }else{
            const formData = new FormData();

            formData.append("username",usuario);
            formData.append("password",contra);
    
            handlerUpdatePass(formData);
            setRecoverForm(initialRecoverForm);
        }

       

    }



    return(
        <>
         <div className="box-Principal-Login-User" style={{backgroundImage: `url(${imgLogin})`}}>

<div className="boxCardLoginUser ">


     <div className="row rowLoginStile d-flex justify-content-center align-item-center">
          <div className="col-xl-12 boxLoginTitulo mt-5">
             <h1 className="text-center text-light textTtileLoginUser">
                  Recupere su Contraseña
             </h1>
         </div>

         <div className="card cardStyle col-xl-12 ">

             <div className="card-title ">
                     <h2 className="text-center text-light textCardTitle">Ingrese sus Datos</h2>
             </div>
             <div className="card-body d-flex justify-content-center align-item-center m-auto"> 

                     <form onSubmit={OnSubmit}>

                         <label htmlFor="username" className="inputs text-light styleFont">Username:</label>
                         <input
                         
                          type="text" 
                         name="usuario"
                          placeholder="username"
                          className="form-control "
                          value={usuario}
                          onChange={OnInpuntChange}

                          required
                          />

                         <label htmlFor="password" className="inputs text-light styleFont">Password:</label>
                         <input 
                          
                          type="password" 
                         name="contra"
                          placeholder="password"
                          className="form-control "
                          value={contra}
                          onChange={OnInpuntChange}
                          required
                          />


                        <label htmlFor="password" className="inputs text-light styleFont">Password Again:</label>
                         <input 
                          
                          type="password" 
                         name="validContra"
                          placeholder="password"
                          className="form-control "
                          value={validContra}
                          onChange={OnInpuntChange}
                          required
                          />


                         <div className="setButonCenter">
                         <button type="submit" className="btn btn inputs  btnStyle">
                             Submit
                          </button>

                          
                         </div>

                         <div className="row rowLoginStile">

                            <div className="col-xl-12 d-flex justify-content-center">
                                    <NavLink  className="aStyle withUndercor" to={"/user"}>Regresar</NavLink>
                            </div>

                        </div>

                         
                          

                     </form>
             </div>
         </div>
     </div>
         

         

</div>

</div>
        
        
        </>
    )
}