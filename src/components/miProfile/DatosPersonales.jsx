import { useContext, useEffect, useState } from "react";
import { DashBoardContext } from "../../auth/context/DashBoardContext";
import { pruebaDatosPersonales } from "../../PruebasErrores/pruebaDatosPersonales";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";


const initalUsaer={

  usuario:''
  ,nombre:''
  ,apellido:''
  ,correo:'',
  nroCelular:'',
}
export const DatosPersonales = () => {
  const { toggleSideBar, screenWidth, handlerUpdateUser, login,handlerFindUserr ,setUsername,username} =useContext(DashBoardContext);

  const [user,setUser]=useState(initalUsaer);

   const {usuario,nombre,apellido,correo,nroCelular}=user; 

   const [readOnly, setReadOnly]=useState(true);

   const datos = JSON.parse(sessionStorage.getItem('login'));

   const {inputTests}=pruebaDatosPersonales();

   const toggleReadeOnly=()=>{

    setReadOnly(!readOnly);
   }



   const onInputChange=({target})=>{
        
    /* console.log(target.value); */
    const {name,value}=target;
    setUser({
        ...user,
        [name]: value,

    });
}


    const showInfoUser=async(username)=>{
      
      const valorCodificado=encodeURIComponent(username);
      const response=await handlerFindUserr(valorCodificado);

      const correo1=response.correo.trim();
      
      setUser(
      {
        usuario:response.usuario,
        nombre:response.nombre,
        apellido:response.apellido,
        correo:correo1,
        nroCelular:response.nroCelular,
      }
      );
      
    }


    const OnSubmit=async(e)=>{

      e.preventDefault();
      
      if(await inputTests(usuario,nombre,apellido,correo,nroCelular,username)){
        
        return;
      }else{
        setUsername(usuario);
       
        datos.user={username: usuario};
        sessionStorage.setItem('login',JSON.stringify(datos));
        handlerUpdateUser(username,{usuario,nombre,apellido,correo,nroCelular});
        setReadOnly(!readOnly);
        
      }

     
      
    }

    useEffect(() => {

      showInfoUser(username);
      
    },[]);

 


  return (
    <>
      <div className="boxPrincipalDPer">
        <div>
          <div className="row">
            <div className="col-xl-1 col-lg-1 col-md-1 col-sm-1 col-xs-1 col-1">
              <button
                onClick={toggleSideBar}
                className={` buttonSideOpenPro openHovePro ${
                  screenWidth >= 1347 ? "aparecerButton" : ""
                }`}
              >
                <img
                  className="imgSizeDashSide tipoLetra"
                  src="./imgs/SideProBurguer.png"
                  alt=""
                />
              </button>
            </div>

            <div className="col-xl-11 col-lg-11 col-md-11 col-sm-11 col-xs-11 col-11">
              <h2 className="text-center mt-4 titlePer">
                Mis Datos Personales
              </h2>
            </div>
          </div>
        </div>

        <div className="card p-5 cardStylesPro">
          <form onSubmit={OnSubmit}>
            <div className="row rowStylePro ">
              <div className="col-xl-6">
                <label htmlFor="" className="tipoLetraMiProfile">
                 Nombre de usuario:
                </label>
                <input type="text" 
                name="usuario"
                value={usuario}
                onChange={onInputChange}
                className="form-control inputCreateStyle tipoLetraMiProfile" readOnly={readOnly}/>
              </div>

              <div className="col-xl-6">
                <label htmlFor="" className="tipoLetraMiProfile">
                  Nombres:
                </label>
                <input type="text" 
                name="nombre"
               value={nombre}
               onChange={onInputChange}
                className="form-control inputCreateStyle tipoLetraMiProfile" readOnly={readOnly}/>
              </div>

              <div className="col-xl-6">
                <label htmlFor="" className="tipoLetraMiProfile">
                  Apellidos:
                </label>
                <input type="text" 
                name="apellido"
                value={apellido}
                onChange={onInputChange}
                className="form-control inputCreateStyle tipoLetraMiProfile" readOnly={readOnly}/>
              </div>

              <div className="col-xl-6">
                <label htmlFor="" className="tipoLetraMiProfile">
                  Correo:
                </label>
                <input type="email"
                name="correo"
                value={correo}
                onChange={onInputChange}
                className="form-control inputCreateStyle tipoLetraMiProfile" readOnly={readOnly}/>
              </div>

              <div className="col-xl-6">
                <label htmlFor="" className="tipoLetraMiProfile">
                  Nro.Celular:
                </label>
                <input
                  type="number"
                  name="nroCelular"
                  value={nroCelular}
                  onChange={onInputChange}
                  className="form-control inputCreateStyle tipoLetraMiProfile"
                  readOnly={readOnly}
                />
              </div>

              <div className="col-xl-6">
                <div className="row">
                  <div className="col-xl-6 d-flex justify-content-center">
                    <button 
                    
                    type="button"
                    onClick={toggleReadeOnly}
                    className="btn btnEdit buttons " disabled={readOnly? false:true}>Editar</button>
                  </div>

                  <div className="col-xl-6 d-flex justify-content-center">
                    <button 
                    type="submit"
                    className="btn btnModific buttons " disabled={readOnly? true:false}>
                      Modificar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
