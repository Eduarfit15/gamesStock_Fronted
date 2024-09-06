import { NavLink } from "react-router-dom";

export const CarouselVideogames = () => {
  return (
    <>


    <div  className="container box-PrincipalCarousel">



        <div className="box-text-Games">
            <h3 className="textGames text-center ">
                Los mejores juegos
            </h3>
        </div>

    <div id="carouselExampleIndicators" className="carousel slide">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>

            <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>

        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <NavLink to={'/catalogo'}>
            <img src="./imgs/carousel/fc24.jpeg" className="d-block w-100" alt="fc24" />
            </NavLink>
            
          </div>
          <div className="carousel-item">
          <NavLink to={'/catalogo'}>
            <img src="./imgs/carousel/GOW.jpeg" className="d-block w-100" alt="gow" />
            </NavLink>
         </div>
          <div className="carousel-item">
          <NavLink to={'/catalogo'}>
            <img src="./imgs/carousel/TLOFS2.jpg" className="d-block w-100" alt="tlou" />
            </NavLink>
          </div>

          <div className="carousel-item">
          <NavLink to={'/catalogo'}>
            <img src="./imgs/carousel/Baldurs_Gate_3.jpg" className="d-block w-100" alt="bg3" />
            </NavLink>
          </div>

        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

    </div>
     
    </>
  );
};
