
export const CardsPEstrenos=({name,img,descripcionPart})=>{




    return(

        <>
        
        <div className="card cardBoxPremiers mb-5">
                <img  src={img} className="imgPremiers" alt="img" />
                  <div className="card-body ">
                    <h5 className="card-title titleCardPremier text-center text-light">{name}</h5>
                  
                  <p className="card-text text-light">
                  {descripcionPart}
                  </p>
                  
                    <div className="d-flex justify-content-center align-items-center">
                    <button className="btn btn-light buttonPremier">Más información</button>
                  </div>
                  
                  </div>

                </div>
        
        </>
    )
}