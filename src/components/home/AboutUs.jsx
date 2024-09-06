
import { useContext } from "react";
import { ProductContext } from "../../context/productContext";

export const AboutUs = () => {

  const {handlerMoveCa}=useContext(ProductContext);
  return (
    <>
      <div className="principalBoxAbout">


        <div className="row boxAboutGeneral d-flex justify-content-center align-items-center">

          <div className="boxImgAbout col-xl-7 p-0">
            <img className="imgAbout" src="./imgs/AboutUs/about.jpg" alt="" />
          </div>


          <div className="col-xl-5 ">


            <div className="row  boxtextoAbout">


                    <div className="col-xl-12">

                        <h3 className="titleAbout text-center text-light mb-5 pt-5">

                            ABOUT US
                        </h3>
                    </div>

                    <div className="col-xl-12">
                        <p className="textAbout text-center text-light mb-5">

                        ¡La Mejor Tienda de Videojuegos en línea del mercado! Contamos <br />
                        con varios de los mejores videojuegos para PC

                        </p>
                    </div>

                    <div className="col-xl-12 d-flex justify-content-center align-items-center pt-5 pb-5">

                        <button className="btn btn-light buttonAbout" onClick={handlerMoveCa}>

                             
                                    ¡Compra ya!
                             

                        </button>

                    </div>




            </div>

          </div>
        </div>




      </div>
    </>
  );
};
