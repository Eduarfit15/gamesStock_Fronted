import { useContext, useState } from "react";
import { categories } from "../../data/Categories";
import { ProductDashBoardContext } from "../../auth/context/ProductDashBoardContext";
import { pruebasActualizarProducto } from "../../PruebasErrores/pruebasActualizarProducto";


const initialProduct={

    nombre:'',
    precio:'',
    stock:'',
    categoria:'',
    imagen:''
}
export const UpdateFomr=()=>{

    const [productForm, setProductForm] = useState(initialProduct);
    const [img,setImg]=useState(null);
    const {handleUpdateProducto,handlerBuscarPorId,blobToFile, base64toBlob,}=useContext(ProductDashBoardContext);
    const [putID,setPutId]=useState('');
    const {nombre,precio,stock,categoria,imagen}=productForm;
    const [imageDataUrl, setImageDataUrl]=useState('');
    const [fileInputKey, setFileInputKey] = useState('');
   
    const {prubaInputAcProducts}=pruebasActualizarProducto();
    const [file, setFile] = useState(null);
    const OnInputIdChange=({target})=>{

        setPutId(target.value)
 
        
         
     }

     const OnsubmitProduct=async(e)=>{

        e.preventDefault();
        
        const imagenBack=img? img : file;
        if(await prubaInputAcProducts(nombre,precio,stock,imagenBack,putID)){
            return;
        }else{
            
            const formData = new FormData();
            formData.append('nombre', nombre);
            formData.append('precio', precio);
            formData.append('stock', stock);
            formData.append('categoria', categoria);
            formData.append('imagen', imagenBack);
    
            handleUpdateProducto(putID,formData);
    
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


    const handleBuscarProducto=async()=>{
            setImg(null);
          const response= await handlerBuscarPorId(putID);
            
          
            setProductForm({
                nombre:response.nombre,
                precio:response.precio,
                stock:response.stock,
                categoria:response.categoria,
                imagen:`data:image/png;base64,${response.imagen}`
                
            })
           
            const blobimg=base64toBlob(response.imagen, "imagen/png")
            const imgfile = blobToFile(blobimg, "imagen.png");
            setFile(imgfile);
            setImageDataUrl(null);
            setFileInputKey(Date.now()); 
           
    }

    const handleFileInputChange = (event) => {

        setFile(null);
        setProductForm({
            nombre:nombre,
                precio:precio,
                stock:stock,
                categoria:categoria,
                imagen:''
        });
        
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
        
        <div className="BoxProncipalUpdate mt-5">

            <div>
                <h2 className="tipoLetra"> Modificar Producto</h2>
            </div>

            <div className="card CardCrateStyles">
                
                <form onSubmit={OnsubmitProduct} className="container">

                    <div className="row pt-4 pb-5 rowDisplayNav">

                        <div className="col-xl-12 mx-auto mt-3   ">
                            
                            <div className="row rowDisplayNav">

                                    <div className="col-xl-8 col-lg-8 col-md-8 col-sm-8 col-xs-8 col-8 d-flex justify-content-center p-0">
                                    <label htmlFor="" className="mb-1 me-3 labeltyle">Ingrese el Id del producto:</label>
                                    <input type="number"  className="me-1 form-control inputCreateStyle idStyle"
                                    value={putID}
                                    onChange={OnInputIdChange}
                                    required
                                    />


                                    </div>

                                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-xs-4 col-4 justify-content-end">
                                    <button className="btn btn-dark btnUpdateBuscar"
                                    type="button"
                                    onClick={handleBuscarProducto}
                                    >Buscar</button>
                                    </div>
                            </div>
                            
                            
                            
                            
                        </div>
                        <div className="col-xl-4 mx-auto mt-3">
                            <label className="mb-1 tipoLetra">Nombre</label>
                            <input type="text" className="form-control inputCreateStyle" 
                            name="nombre"
                            value={nombre}
                            onChange={onInputChange}
                            required
                            />
                        </div>

                        <div className="col-xl-4 mx-auto mt-3">
                            <label className="mb-1 tipoLetra">Precio</label>
                            <input type="number" className="form-control inputCreateStyle"
                            name="precio"
                            value={precio} 
                            onChange={onInputChange}
                            required
                            />
                        </div>

                        <div className="col-xl-4 mx-auto mt-3">
                            <label className="mb-1 tipoLetra">Stock</label>
                            <input type="number" className="form-control inputCreateStyle"
                            name="stock" 
                            value={stock}
                            onChange={onInputChange}
                            required
                            />
                        </div>

                        <div className="col-xl-4 mx-auto mt-3">
                            <label className="mb-1 tipoLetra">Categoría</label>
                            <select name="categoria" className="form-select text-dark inputCreateStyle tipoLetra"
                            
                            value={categoria}
                            onChange={onInputChange}
                            required
                            >
                            
                            <option disabled  value={""}>Seleccione una opción</option>
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
                            <input key={fileInputKey} type="file" className="form-control inputCreateStyle tipoLetra"
                            onChange={handleFileInputChange}
                            
                            />

                            {
                                imageDataUrl?
                                <img src={imageDataUrl} className="imgUpDate"/>
                                :
                                imagen?
                                <img src={imagen} className="imgUpDate" />
                                :
                                <img src="./imgs/whitoutImg.png" className="imgUpDate"/>
                            }
                            
                        </div>

                      {  <div>
                            
                        </div>
                        
                        }

                        <div className="col-xl-12 pt-5 d-flex justify-content-center">
                            <button type="submit" className="btn btn-dark tipoLetra btnCreate">Modificar Producto</button>
                        </div>
                    </div>


                </form>
            </div>
    </div>
        
        </>
    );
}