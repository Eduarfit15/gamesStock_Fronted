
import { useContext } from "react";
import { ProductContext } from "../../context/productContext";

export const CardCategorie = ({ name, img }) => {

  const {handlerMoveCa}=useContext(ProductContext);

  return (
    <>
      <div className="card cardBox ">
        <div className="card-body ">
          <h5 className="card-title text-center text-light textOptionCate">{name}</h5>
        </div>

        <img src={img} className="imgCategories" alt="img" />

        <div className="card-body d-flex justify-content-center align-items-center">
          <button className="btn btn-light buttonCa" onClick={handlerMoveCa}>

              IR
           
          </button>
        </div>
      </div>
    </>
  );
};
