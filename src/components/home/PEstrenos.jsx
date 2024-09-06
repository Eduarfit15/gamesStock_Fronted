import { pestrenos } from "../../data/PEstrenos";
import { CardsPEstrenos } from "./CardsPEstrenos";
import background from "../../assets/baseVi.jpg";
export const PEstrenos = () => {
  return (
    <>
      <div className="boxNE pb-5" style={{backgroundImage:`url(${background})`}}>
        

        <div className="boxTextPremiers mt-5 pb-5 mb-5">
          <h3 className="textTtitlePremier text-light text-center">
            Next Premiers
          </h3>
        </div>

        <div className="card-group groupcardsPremiers d-flex justify-content-center align-items-center mt-5">
          <div className="row cate container">
            {pestrenos.map(({ id, name, img, descripcionPart }) => (
              <div className="col-xl-4 col-md-6 col-sm-12 mx-auto" key={id}>
                <CardsPEstrenos
                  name={name}
                  img={img}
                  descripcionPart={descripcionPart}
                />
              </div>
            ))}

            <div>
              <span className="loader col-xl-4 col-md-6 col-sm-12 mx-auto"></span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
