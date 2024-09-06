import { useContext } from "react";
import { CardCat } from "./CardCat";
import { ProductContext } from "../../context/productContext";


export const CatalogView=({opSection})=>{


        const {products,terminoBusqueda}=useContext(ProductContext);
        
        const productosCategoria = products.filter(producto => producto.categoria === opSection);

        const filteredBySearchTerm = terminoBusqueda
        ? productosCategoria.filter(producto => producto.nombre.toLowerCase().includes(terminoBusqueda.toLowerCase()))
        : productosCategoria;


        const filteredBySearchTerm1 = terminoBusqueda
        ? products.filter(producto => producto.nombre.toLowerCase().includes(terminoBusqueda.toLowerCase()))
        : products;
        

    return(

        <>
        {
            
            productosCategoria.length!==0 ? //esto es para verificar si esta o no vacio

            filteredBySearchTerm.map(({idproducto,nombre,precio,stock,categoria,imagen,estado})=>{

                        return(
                            <div  className="col-xl-4 col-lg-6 col-md-6 col-sm-6 col-xs-12 p-0 mt-4 p-1 mx-auto" key={idproducto}>
                            <CardCat id={idproducto}  nombre={nombre} precio={precio} stock={stock} categoria={categoria} imagen={imagen} estado={estado} />
                            </div>
                        )

                    }) :

                    filteredBySearchTerm1.map(({idproducto,nombre,precio,stock,categoria,imagen,estado})=>{

                        return(
                            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6 col-xs-12 p-0 mt-4 p-1 mx-auto" key={idproducto} >
                            <CardCat id={idproducto} nombre={nombre} precio={precio} stock={stock} categoria={categoria} imagen={imagen} estado={estado} />
                            </div>
                        )

                    })

        } 

        
        </>
    );
}