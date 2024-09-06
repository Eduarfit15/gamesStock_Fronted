import {useState } from "react";
import { CatalogView } from "./CatalogView";


export const Sidebar = () => {
  

  const [opcion,setOpcion]=useState('opcion1'); // se pone entre parentesis el valor con el que va a iniciar el estado

  const [opSection,setOpSection]=useState(null);
  
  const OphandlerChange=(id,section)=>{
      setOpcion(id);
      setOpSection(section);
  
  }

  
  
  return (
    <>

    
          <div className="wrapper">

          <div className="row sidebarRow">

            <div className="col-xl-3 col-lg-4 col-md-12 col-sm-12 col-xs-12 p-0 backside">
            <aside className="boxCat">
            <div className="boxCatbox d-flex justify-content-center align-items-center">
              <ul className="groupCart">
                <li className="opCart">
                  <button id="todos" className={opcion=== 'opcion1' ? 'seleccionado' : 'btnOP'}
                  onClick={() => OphandlerChange('opcion1','todos')}
                >Todos</button>
                </li>
                <li className="opCart">
                  <button id="Accion" className={opcion=== 'opcion2' ? 'seleccionado' : 'btnOP'}
                  onClick={() => OphandlerChange('opcion2','Accion')}>Acción</button>
                </li>
                <li className="opCart">
                  <button id="terror" className={opcion=== 'opcion3' ? 'seleccionado' : 'btnOP'}
                  onClick={() => OphandlerChange('opcion3','Terror')}>Terror</button>
                </li>
                <li className="opCart">
                  <button id="Ciencia Ficcion" className={opcion=== 'opcion4' ? 'seleccionado' : 'btnOP'}
                  onClick={() => OphandlerChange('opcion4','Ciencia Ficción')}>Ciencia Ficción</button>
                </li>
                <li className="opCart">
                  <button id="rol" className={opcion=== 'opcion5' ? 'seleccionado' : 'btnOP'}
                  onClick={() => OphandlerChange('opcion5','Rol')}>Rol</button>
                </li>
                <li className="opCart">
                  <button id="aventura" className={opcion=== 'opcion6' ? 'seleccionado' : 'btnOP'}
                  onClick={() => OphandlerChange('opcion6','Aventura')}>Aventura</button>
                </li>
              </ul>
            </div>
          </aside>


            </div>
            <div className="col-xl-9 col-lg-8 col-md-12 col-sm-12 col-xs-12 p-0 ">
            <div className="row cartCatalog">
            <CatalogView  opSection={opSection}  />
              </div>
            </div>
          </div>

</div>






 
        


       
     
    </>
  );
};
