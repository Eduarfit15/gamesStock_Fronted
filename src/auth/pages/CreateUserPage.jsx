import { useContext, useEffect, useState } from "react";
import imgLogin from "../../assets/loginImg.jpg";
import { DashBoardContext } from "../context/DashBoardContext";
import Swal from "sweetalert2";
import { NavLink } from "react-router-dom";
import { pruebasCrearCuenta } from "../../PruebasErrores/pruebasCrearCuenta";

const intialForm={

    usuario:'',
    contra:'',
    validContra:'',
    nombre:'',
    apellido:'',
    correo:'',
    nroCelular:'',
    
}


export const CreateUserPage=()=>{

    const [loginForm,setLoginForm]=useState(intialForm);
    const {handleSaveClient,erros}=useContext(DashBoardContext);

    const {usuario,contra,validContra,nombre,apellido,correo,nroCelular}=loginForm;
    const {controlInputsCrear}=pruebasCrearCuenta();
    const OninputChange=(event)=>{

        const {name,value}=event.target;
        setLoginForm({
         ...loginForm,
            [name]:value,
        });
        
    }

   

    const OnSubmit=async(e)=>{

        e.preventDefault();

        if(await controlInputsCrear(usuario,nombre,apellido,correo,nroCelular,contra,validContra)){
            
            return;
        }
        else{
            handleSaveClient({usuario,contra,nombre,apellido,correo,nroCelular});
        }
        

    }


  
    return(

        <>
        
        <div className="box-Principal-Login-User" style={{backgroundImage: `url(${imgLogin})`}}>

                   <div className="boxCardLoginUser ">


                        <div className="row rowLoginStile d-flex justify-content-center align-item-center">
                             <div className="col-xl-12 boxLoginTitulo mt-5">
                                <h1 className="text-center text-light textTtileLoginUser">
                                     Bienvenido nuevo Usuario
                                </h1>
                            </div>

                            <div className="card cardStyle col-xl-12 ">

                                <div className="card-title ">
                                        <h2 className="text-center text-light textCardTitle">Crear Cuenta</h2>
                                </div>
                                <div className="card-body d-flex justify-content-center align-item-center m-auto"> 

                                        <form onSubmit={OnSubmit}>

                                            <div className="row">
                                                    <div className="col-xl-6">
                                                    <label htmlFor="username" className="inputs text-light styleFont">Username:</label>
                                                        <input
                                                        
                                                        type="text" 
                                                        name="usuario"
                                                        placeholder="Username"
                                                        className="form-control "
                                                        value={usuario}
                                                        onChange={OninputChange}
                                                        required
                                                        />

                                                        <p className="text-danger">{erros?.usuario}</p>
                                                    </div>
                                                    


                                                    <div className="col-xl-6">
                                                    <label htmlFor="" className="inputs text-light styleFont">Nombres:</label>
                                                        <input 
                                                        
                                                        type="text" 
                                                        name="nombre"
                                                        placeholder="Nombres"
                                                        className="form-control "
                                                        value={nombre}
                                                        onChange={OninputChange}
                                                        required
                                                        />
                                                        
                                                    </div>

                                                    <div className="col-xl-6">
                                                    <label htmlFor="" className="inputs text-light styleFont">Apellidos:</label>
                                                        <input 
                                                        
                                                        type="text" 
                                                        name="apellido"
                                                        placeholder="Apellidos"
                                                        className="form-control "
                                                        value={apellido}
                                                        onChange={OninputChange}
                                                        required
                                                        />
                                                        
                                                    </div>

                                                    <div className="col-xl-6">
                                                    <label htmlFor="" className="inputs text-light styleFont">Correo:</label>
                                                        <input 
                                                        
                                                        type="email" 
                                                        name="correo"
                                                        placeholder="Correo"
                                                        className="form-control "
                                                        value={correo.trim()}
                                                        onChange={OninputChange}
                                                        required
                                                        
                                                        />
                                                         <p className="text-danger">{erros?.correo}</p>
                                                    </div>

                                                    <div className="col-xl-6">
                                                    <label htmlFor="" className="inputs text-light styleFont">Nro. Celular:</label>
                                                        <input 
                                                        
                                                        type="number" 
                                                        name="nroCelular"
                                                        placeholder="Nro. Celular"
                                                        className="form-control "
                                                        value={nroCelular}
                                                        onChange={OninputChange}
                                                        required
                                                        />
                                                        
                                                    </div>

                                                    <div className="col-xl-6">


                                                    <label htmlFor="password" className="inputs text-light styleFont">Password:</label>
                                                    <input 
                                                    
                                                    type="password" 
                                                    name="contra"
                                                    placeholder="password"
                                                    className="form-control "
                                                    value={contra}
                                                    onChange={OninputChange}
                                                    required
                                                    />

                                                        
                                                    </div>

                                                    <div className="col-xl-12">
                                                    <label htmlFor="password" className="inputs text-light styleFont">Password Again:</label>
                                                        <input 
                                                        
                                                        type="password" 
                                                        name="validContra"
                                                        placeholder="Password"
                                                        className="form-control "
                                                        value={validContra}
                                                        onChange={OninputChange}
                                                        required
                                                        />
                                                    
                                                    </div>
                                            </div>


                                            <div className="setButonCenter">
                                            <button type="submit" className="btn btn inputs  btnStyle">
                                                Submit
                                             </button>

                                             
                                            </div>

                                            <div className="row rowLoginStile">

                                                <div className="col-xl-12 d-flex justify-content-center">
                                                        <NavLink className="aStyle withUndercor" to={"/user"}>Regresar</NavLink>
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