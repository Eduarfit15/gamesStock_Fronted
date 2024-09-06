
import { useContext } from "react";
import { ProductContext } from "../../context/productContext";

export const Welcome = () => {


  const {handlerMoveCa}=useContext(ProductContext);
  
  return (
    <>
      <div>
        <div className="hola">
          <div className="row up d-flex justify-content-center align-items-center">
            <div className="textWelcome col-xl-12 col-md-12 col-xs-12">

              <div className="row textbox">

                <div className="boxh1Text col-xl-12 col-md-12">
                <h1 className="textWelcomeh1 text-center text-light mb-2">GameStock</h1>
                </div>

              
              
              <div className="boxh2Text col-xl-12 col-md-12">
                <h2 className="textWelcomeh2 text-center  text-light mt-3">
                  Disfruta y Busca el <br />
                  Juego que más te apasione
                </h2>
              </div>
              
                <div className="btnWelcome mt-3 col-xl-12 col-md-12">
                <button className="btnNomC" onClick={handlerMoveCa}> 
                
                  COMPRAR

                 </button>
                </div>
              
            </div>

            </div>

            <div className="img-box  col-xl-12 col-md-12 col-xs-12">
              <img className="imgWelcome" src="./imgs/mandos.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
