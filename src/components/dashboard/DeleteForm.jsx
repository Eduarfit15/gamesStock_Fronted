import { useContext, useEffect, useState } from "react";
import { categories } from "../../data/Categories";
import { ProductDashBoardContext } from "../../auth/context/ProductDashBoardContext";


const initialDelete={
    id:0
}
const initialFormDelete={
    name:'',
    categoria:'',
    imagen:''
}

export const DeleteForm=()=>{
    const {handlerEliminarProducto,handlerBuscarPorIdAll,products}=useContext(ProductDashBoardContext);
    
    const [putID,setPutId]=useState('');
    const [formDeLETE,setFormDelete]=useState(initialFormDelete);
    const {name,categoria,imagen}=formDeLETE;
    
    const[opSelect,setOpSelect]=useState('');

    const handlerChangeSelect=({target})=>{

        setOpSelect(target.value);
    }

    const OnInputChange=({target})=>{

       setPutId(target.value)

       
    }

    const OnClick=async(id)=>{

        const response=await handlerBuscarPorIdAll(id);
        setFormDelete({
            name: response.nombre,
            categoria: response.categoria,
            imagen:`data:image/png;base64,${response.imagen}`
            
        });
    }

   


    return(
        <>
        
        <div className="BoxProncipalUpdate mt-5">

<div>
    <h2 className="tipoLetra"> Deshabilitar Producto</h2>
</div>

<div className="card CardCrateStyles">
    
    <form  className="container">

        <div className="row pt-4 pb-5 rowDisplayNav">

            <div className="col-xl-12 mx-auto mt-3   ">
                
                <div className="row rowDisplayNav">

                        <div className="col-xl-8 col-lg-8 col-md-8 col-sm-8 col-xs-8 col-8 d-flex justify-content-center p-0">
                        <label htmlFor="" className="mb-1 me-3 labeltyle">Ingrese el Id del producto:</label>
                        <input type="number"
                        name="id"
                        value={putID}
                        onChange={OnInputChange}
                        className="me-1 form-control inputCreateStyle idStyle"
                        required
                        />


                        </div>

                        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-xs-4 col-4 justify-content-end">
                        <button type="button" className="btn btn-dark btnUpdateBuscar" onClick={()=>OnClick(putID)}>Buscar</button>
                        </div>
                </div>
                
            </div>

            <div className="col-xl-12 mx-auto mt-3   ">
                
                <div className="row rowDisplayNav">

                        <div className="col-xl-8 col-lg-8 col-md-8 col-sm-8 col-xs-8 col-8 d-flex justify-content-center p-0">
                        <label htmlFor="opSelectEstado" className="mb-1 me-3 labeltyle">Ingrese el estado del producto:</label>
                       
                        <select id="opSelectEstado" className="me-1 form-select inputCreateStyle idStyle" value={opSelect} onChange={handlerChangeSelect} required>
                        <option disabled selected value={""}>Seleccione una opción</option>
                            <option value="0">0</option>
                            <option value="1">1</option>
                        </select>
                        

                        </div>

                        
                </div>
                
            </div>
            <div className="col-xl-4 mx-auto mt-3">
                <label className="mb-1 tipoLetra">Nombre</label>
                <input type="text" 
                name="name"
                
                   
                    value={name}
                
                
                className="form-control inputCreateStyle" readOnly/>
            </div>

           
            <div className="col-xl-4 mx-auto mt-3">
                <label className="mb-1 tipoLetra">Categoría</label>
                <input type="text"
                name="Categorias"
                value={categoria}
                className="form-control text-dark inputCreateStyle tipoLetra" readOnly/>
                
           
            </div>

            <div className="col-xl-4 mx-auto mt-3">
                <label className="mb-1 tipoLetra"></label>

                {
                    !imagen?
                    <img src="./imgs/whitoutImg.png" className="imgSize"/>
                    :
                    <img src={formDeLETE.imagen} className="imgSize"/>
                }
                
            </div>

            <div className="col-xl-12 pt-5 d-flex justify-content-center">
                <button
                
                type="button"
                onClick={ ()=> handlerEliminarProducto(opSelect,putID)}
                className="btn btn-dark tipoLetra btnCreate">Cambiar Estado Producto</button>
            </div>
        </div>


    </form>





    
</div>
</div>
        </>
    );
}