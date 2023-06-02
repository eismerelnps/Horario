import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

export const OffcanvasNavBar = () => {
    const navigate = useNavigate();
    const handleLogout = () => {
        navigate('/login', {
            replace: true
        });
      };

  return (
    <nav className="navbar navbar-expand-lg bg-primary ">
      <div className="container-fluid">
        <button
          className="navbar-toggler text-light"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        
        <span className="navbar-brand text-light" href="#">
          Horario
        </span>

        {/* <button className="nav-item nav-link btn text-danger" onClick={handleLogout}>
            Logout
          </button>
           */}
          <i className="bi bi-box-arrow-right " onClick={handleLogout}></i>


        <div
          className="offcanvas offcanvas-start "
          tabIndex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header bg-primary text-light">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
              Horario
            </h5>
            <button
              type="button"
              className="btn-close "
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li className="nav-item">
                <NavLink className="nav-link text-center" to="/hours">
                  Horario
                </NavLink>
                <hr/>
              </li>

              <li className="nav-item">

              <NavLink className="nav-link text-center" to="/profile">
                  Perfil
                </NavLink>
                <hr/>

              </li>
              {/* <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li> */}
            </ul>
            {/* <form className="d-flex mt-3" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form> */}
          </div>
        </div>
      </div>
    </nav>
  );
};
