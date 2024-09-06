import { useContext, useState } from "react";
import { categories } from "../../data/Categories";
import { ProductDashBoardContext } from "../../auth/context/ProductDashBoardContext";
import { pruebasAgregarProducto } from "../../PruebasErrores/pruebasAgregarProducto";



const initialProduct={
    nombre:'',
    precio:'',
    stock:'',
    categoria:'',
}

export const CreateForm=()=>{


        const [productForm, setProductForm] = useState(initialProduct);
        const [img,setImg]=useState(null);
        const {handleCrearProducto}=useContext(ProductDashBoardContext);

        const {probarInputsAgregar}=pruebasAgregarProducto();
        const {nombre,precio,stock,categoria}=productForm;
        const [imageDataUrl, setImageDataUrl]=useState('');
        const [fileInputKey, setFileInputKey] = useState('');


        const OnsubmitProduct=async(e)=>{

            e.preventDefault();

            if(await probarInputsAgregar(nombre,precio,stock,img)){
                return;
            }
            else{

            const formData = new FormData();
            formData.append('nombre', nombre);
            formData.append('precio', precio);
            formData.append('stock', stock);
            formData.append('categoria', categoria);
            formData.append('imagen', img);

            handleCrearProducto(formData);
            /* setProductForm(initialProduct);
            setImageDataUrl(null);
            setFileInputKey(Date.now());  */
            }
            

            
        }


        const onInputChange=({target})=>{
        
            /* console.log(target.value); */
            const {name,value}=target;
           
           
            setProductForm({
                ...productForm,
                [name]: value,
    
            });
        }


        const handleFileInputChange = (event) => {

            setImg(event.target.files[0])
            const file = event.target.files[0];
            if (file) {
              const reader = new FileReader();
              reader.onload = (e) => {
                const imageDataUrl = e.target.result;
                setImageDataUrl(imageDataUrl);
              };
              reader.readAsDataURL(file);
            }
          };
    

    return(

        <>
        <div className="BoxProncipalCreate mt-5">

            <div>
                <h2 className="tipoLetra"> Crear Producto</h2>
            </div>

            <div className="card CardCrateStyles">
                
                <form onSubmit={OnsubmitProduct} className="container">

                    <div className="row pt-4 pb-5 rowDisplayNav">

                        <div className="col-xl-4 mx-auto mt-3">
                            <label className="mb-1 tipoLetra">Nombre</label>
                            <input name="nombre" type="text" className="form-control inputCreateStyle" 
                            value={nombre}
                            onChange={onInputChange}
                            required/>
                        </div>

                        <div className="col-xl-4 mx-auto mt-3">
                            <label className="mb-1 tipoLetra">Precio</label>
                            <input name="precio" type="number" className="form-control inputCreateStyle" 
                            value={precio}
                            onChange={onInputChange}
                            required/>
                        </div>

                        <div className="col-xl-4 mx-auto mt-3">
                            <label className="mb-1 tipoLetra">Stock</label>
                            <input name="stock" type="number" className="form-control inputCreateStyle"
                            value={stock}
                            onChange={onInputChange}
                            required/>
                        </div>

                        <div className="col-xl-4 mx-auto mt-3">
                            <label className="mb-1 tipoLetra">Categoría</label>
                            <select  name="categoria" className="form-select text-dark inputCreateStyle tipoLetra"
                            value={categoria}
                            onChange={onInputChange}
                            required
                            >
                            <option disabled selected value={""}>Seleccione una opción</option>
                            
                           {
                            categories.map(({id,name})=>{

                                return(
                                   
                                    <option key={id}  value={name}>{name}</option>
                                    
                                )
                            }
                            )
                           }

                            </select>
                        </div>

                        <div className="col-xl-4 mx-auto mt-3">
                            <label className="mb-1 tipoLetra">Imagen</label>
                            <input key={fileInputKey} name="imagen" type="file" className="form-control inputCreateStyle tipoLetra"
                            onChange={handleFileInputChange} required/>
                            {
                                imageDataUrl?
                                <img src={imageDataUrl} className="imgUpDate"/>
                                :
                                null
                            }
                                
                        </div>

                        <div className="col-xl-12 pt-5 d-flex justify-content-center">
                            <button type="submit" className="btn btn-dark tipoLetra btnCreate">Crear Producto</button>
                        </div>
                    </div>


                </form>
            </div>
        </div>
       
         
        </>
    );
}













