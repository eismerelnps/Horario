import { NavLink, useNavigate } from "react-router-dom";

export const Navbar = () => {
    const navigate = useNavigate();
  const handleLogout = () => {
    navigate('/login', {
        replace: true
    });
  };

  return (
    <nav className='navbar navbar-expand-sm navbar-light bg-dark  fixed-top'>
      {/* <Link className="navbar-brand" to="/">
        Asociaciones
      </Link> */}

      <div className="navbar-collapse">
        <div className="navbar-nav">
          <NavLink
            className="nav-item nav-link"
            to="/hours"
          >
            Horario
          </NavLink>
        </div>
      </div>

      <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
        <ul className="navbar-nav ml-auto">
        <NavLink
            className="nav-item nav-link"
            to="/profile"
          >
           <span className="nav-item nav-link text-">Eismer</span>

          </NavLink>
          
          <button className="nav-item nav-link btn text-danger" onClick={handleLogout}>
            Logout
          </button>
        </ul>
      </div>
    </nav>
  );
};
