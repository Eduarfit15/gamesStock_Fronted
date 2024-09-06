import { useContext, useEffect, useState } from "react";
import { DashBoardContext } from "../../auth/context/DashBoardContext";
import { ProductDashBoardContext } from "../../auth/context/ProductDashBoardContext";
import { useSpring } from "framer-motion";


export const MisCompras=()=>{

    const {toggleSideBar,screenWidth,login,username}=useContext(DashBoardContext);
    const {handleGetCompras}=useContext(ProductDashBoardContext);

    const [ventasConProductos,setVentasConProductos]=useState('');

    const deliverProducts=async()=>{

        const response=await handleGetCompras(username);
        const compras=response.data;

        const ventasConProductos = {};

       
        let idCounter = 1;

        compras.forEach(compra => {
            // Verificamos si la venta ya está en nuestro objeto
            if (!ventasConProductos.hasOwnProperty(compra.n_venta)) {
                // Si la venta no está, la inicializamos con un array vacío de productos y le asignamos un id único
                ventasConProductos[compra.n_venta] = {
                    id: idCounter++, // Asignamos un id único y luego incrementamos el contador
                    n_venta:compra.n_venta,
                    fechaVenta: compra.fecha_venta,
                    totalVenta: compra.total_venta,
                    productos: []
                };
            }
            compra.id=idCounter++;
            // Agregamos el producto a la venta correspondiente
            ventasConProductos[compra.n_venta].productos.push(compra);
        });

        setVentasConProductos(ventasConProductos);
        
       } 

    useEffect(()=>{
       deliverProducts();

    },[]);




    return(
        <>
        
        <div  className="BoxMisComrpasPrinciPal">

                    <div className="boxTituloCompras">

                        <div className="row">
                            <div className="col-xl-2 col-lg-1 col-md-1 col-sm-1 col-xs-1 col-2">
                            <button onClick={toggleSideBar} className={` buttonSideOpenPro openHovePro ${screenWidth>=1347 ? 'aparecerButton' : ''}`} > 
                            <img className="imgSizeDashSide tipoLetra" src="./imgs/SideProBurguer.png" alt="" /></button>
                            </div >
                            
                            <div className="col-xl-11 col-lg-11 col-md-11 col-sm-11 col-xs-10 col-10">
                            <h2 className="text-center titlePerPago">Mis compras</h2>
                            </div>
                    </div>
                    </div>

                                {
                                    

                                        Object.values(ventasConProductos).reverse().map((numeroVenta) =>(
                                         
                                            
                                            <div className="Box_Compras" key={numeroVenta.id}  >


                                            <div  className="NavCompra ">

                                                    <div className="row">
                                                            <div className="col-xl-4">
                                                                <h4 className="text-light text-center btnModific">Número de venta: {numeroVenta.n_venta}</h4>
                                                            </div>

                                                            <div className="col-xl-4">
                                                                <h4 className="text-light text-center btnModific">Fecha: {numeroVenta.fechaVenta}</h4>
                                                            </div>

                                                            <div className="col-xl-4">
                                                                <h4 className="text-light text-center btnModific">Total de la compra: {numeroVenta.totalVenta}</h4>
                                                            </div>
                                                    </div>
                                            </div>


                                            {
                                                numeroVenta.productos.map(producto=>(

                                                        <div className="BodyCompra" key={producto.id}>

                                                        <div className="row difuminado boxBoyd">

                                                                <div className="col-xl-3 difuminado">
                                                                    
                                                                        <img className="sizeProCompra" src={`data:image/png;base64,${producto.imagen}`}alt="" />
                                                                </div>

                                                                <div className="col-xl-3 difuminado">

                                                                    <h3 className="text-center text-light btnModific">Nombre</h3>
                                                                    <p className="text-center text-light btnModific">{producto.nombre}</p>
                                                                </div>

                                                                <div className="col-xl-2 difuminado">
                                                                    <h3 className="text-center text-light btnModific">Precio</h3>
                                                                    <p className="text-center text-light btnModific">{producto.precio}</p>
                                                                </div>


                                                                <div className="col-xl-2 difuminado">
                                                                <h3 className="text-center text-light btnModific">Cantidad</h3>
                                                                    <p className="text-center text-light btnModific">{producto.cant_vendida}</p>

                                                                </div>

                                                                <div className="col-xl-2 difuminado">
                                                                <h3 className="text-center text-light btnModific">SubTotal</h3>
                                                                    <p className="text-center text-light btnModific">{producto.sub_total}</p>

                                                                </div>
                                                        </div>

                                                        </div>

                                                ))
                                            }

                                     
                                            



                                            </div>

                                        ))

                                       
                                   
                                    
                                        
                                    
                                }

                  


                   





        </div>
        
        </>
    )
}