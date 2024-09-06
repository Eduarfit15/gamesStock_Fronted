import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { DashBoardContext } from "../../auth/context/DashBoardContext";
import { pruebaAgregarTarjeta } from "../../PruebasErrores/pruebaAgregarTarjeta";



const initialCard={

    n_tarjeta:'',
    f_vencimiento:''
    ,cvv:''
    ,correo:''
    ,tipo:''
}

export const SaveCardForm = () => {


     const {handlerSaveCard,username}=useContext(DashBoardContext);
      const [saveCardForm, setSaveCardForm] = useState(initialCard);

      const {n_tarjeta,f_vencimiento,cvv,correo,tipo}=saveCardForm;
      //const [f_vencimiento,setF_vencimiento]=useState('');


      const {pruebaInputsTarjeta}=pruebaAgregarTarjeta();
    const OnInputChange=(e)=>{

        const {name,value}=e.target;
        
        setSaveCardForm({
         ...saveCardForm,
            [name]:value,
        });

        
    }
    
    /* const OnFechaChange=()=>{
      let formattedDate = event.target.value.replace(/\D/g, ''); // Eliminar caracteres no numéricos
        formattedDate = formattedDate.slice(0, 4); // Limitar la longitud a MM/YY
        
        // Formatear la fecha como MM/YY
        if (formattedDate.length > 2) {
            formattedDate = formattedDate.substring(0, 2) + '/' + formattedDate.substring(2);
        }
        
        // Validar el rango de fechas (mes entre 01 y 12, año entre 00 y 30)
        const month = parseInt(formattedDate.substring(0, 2), 10);
        const year = parseInt(formattedDate.substring(3), 10);
        const currentYear = new Date().getFullYear() % 100;
        if (month < 1 || month > 12 || year < currentYear || year > (currentYear + 30)) {
            formattedDate = formattedDate.slice(0, -1); // Eliminar el último carácter ingresado
        }
        
        setF_vencimiento(formattedDate);
    }
 */



    const OnSubmit=(e)=>{

        e.preventDefault();

        if(pruebaInputsTarjeta(n_tarjeta,f_vencimiento,cvv,correo)){
          return;
        }
        else{
            
          handlerSaveCard(username,{n_tarjeta,f_vencimiento,cvv,correo,tipo});
        }
        

    }



  return (
    <>
      <div className="BoxPrincipalCardForm">
        <div>
          <h2 className="text-center titleCardForm">
            Ingrese los datos de su Tarjeta
          </h2>
        </div>

        <div className="card p-5 cardStylesProCard">


          <form onSubmit={OnSubmit}>

            <div className="row rowStylePro ">
              <div className="col-xl-6">
                <label htmlFor="" className="">
                  Número de la tarjeta:
                </label>
                <input
                  type="number"
                  name="n_tarjeta"
                  value={n_tarjeta}
                  onChange={OnInputChange}
                  className="form-control inputCreateStyle"
                  required
                />
              </div>

              <div className="col-xl-6">
                <label htmlFor="" className="">
                  Fecha de vencimiento:
                </label>
                <input type="text"
                 placeholder="MM/YY"
                name="f_vencimiento"
                value={f_vencimiento}
                maxlength="5"
                onChange={OnInputChange}
                className="form-control inputCreateStyle" required/>
              </div>

              <div className="col-xl-6">
                <label htmlFor="" className="">
                  CVV:
                </label>
                <input
                  type="number"
                  name="cvv"
                  value={cvv}
                  onChange={OnInputChange}
                  className="form-control inputCreateStyle"
                  required
                />
              </div>

              <div className="col-xl-6">
                <label htmlFor="" className="">
                  Correo:
                </label>
                <input type="email" 
                name="correo"
                value={correo.trim()}
                onChange={OnInputChange}
                className="form-control inputCreateStyle" required/>
              </div>

              <div className="col-xl-6 mx-auto">
                <label htmlFor="" className="">
                  Tipo:
                </label>
                <select
                name="tipo"
                value={tipo}
                onChange={OnInputChange}
                className="form-control inputCreateStyle form-select " required>
                <option disabled  value={""}>Seleccione una opción</option>
                  <option value="Credito">Credito</option>
                  <option value="Debito">Debito</option>
                </select>
              </div>

              <div className="col-xl-12  ">
                <div className="row">
                  <div className="col-xl-2 ">
                    <NavLink
                      className={"btn btnModific buttons"}
                      to={"/miPerfil"}
                    >
                      Volver
                    </NavLink>
                  </div>

                  <div className="col-xl-8 d-flex justify-content-center">
                    <button
                    type="submit"
                    className="btn btnModific buttons">Guardar</button>
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
