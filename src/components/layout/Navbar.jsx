import { useContext } from "react";
import { NavLink} from "react-router-dom";
import { DashBoardContext } from "../../auth/context/DashBoardContext";
import { flushSync } from "react-dom";

export const Navbar = () => {

  const {login,handlerLogout,username}=useContext(DashBoardContext);



  return (
    <>
      <div className="Nabvar-box">
        <nav className="navbar navbar-expand-lg colorNav">
          <div className="container-fluid">

            <NavLink className={"navbar-brand text-light options"} to={'/landing'}>
            <img className="imgNav" src="./imgs/logo_gameStock_1.png" alt="" />GameStock
            </NavLink>
           
            <button
              className="navbar-toggler "
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarNav"
            >

                <div className="spaceContenido">
                <ul className="navbar-nav ">

                  <li className="nav-item">

                  <NavLink  className={"nav-link active text-light options  d-flex align-items-center justify-content-center"} aria-current="page"
                    href="#inicio" to={'/landing'}>

                      HOME
                  </NavLink>


                  </li>
                  <li className="nav-item">


                  <NavLink className={"nav-link text-light  options d-flex align-items-center justify-content-center"} to={'/catalogo'}>
                    CATALOGO
                  </NavLink>


                  </li>
                  <li className="nav-item">
                  <NavLink
                    className={"nav-link text-light options   d-flex align-items justify-content-center"}
                    to={'/cart'}
                  >
                    CARRITO
                  </NavLink>
                  </li>


                </ul>
                </div>
              

                    <div className="box2-navbar ">
                    <ul className="navbar-nav ms-auto loginSpace">
                                    <li className="nav-item dropdown ">


                                      {
                                        login.isAuth && !login.isAdmin ?

                                        <>
                                        <button
                                        className="buttonlog  nav-link dropdown-toggle text-light "
                                        href="#"
                                        role="button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        {username}
                                    </button>
                                        <ul className="dropdown-menu">
                                        <li>
                                        <NavLink className={"dropdown-item "} to={'/miPerfil'}>
                                            MiPerfil
                                        </NavLink>
                                        </li>
                                        <li>
                                        <button onClick={handlerLogout} className="dropdown-item ">
                                            LogOut
                                        </button>
                                        </li>
                                    </ul>
                                        
                                        </>:

                                        <>
                                        <button
                                        className="buttonlog  nav-link dropdown-toggle text-light "
                                        href="#"
                                        role="button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        LOGIN
                                    </button>
                                    <ul className="dropdown-menu">
                                        <li>
                                        <NavLink className={"dropdown-item "} to={'/user'}>
                                            CLIENTE
                                        </NavLink>
                                        </li>
                                        <li>
                                        <NavLink className={"dropdown-item "} to={'/admin'}>
                                            ADMINISTRADOR
                                        </NavLink>
                                        </li>
                                    </ul>

                                        </>
                                      }
                                    

                                    </li>
                                    </ul>
                    </div>
                    
                    

                
                
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};
