import React, { useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';
const Navbar = () => {
  let navigate = useNavigate()
  const HandleLogout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('Admintoken')
    navigate("/")
  }
  let location = useLocation()
  useEffect(() => {

  }, [location])
  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid ">
          <Link className="navbar-brand"  to="#">Hospital Management System</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname === "/" ? "active" : ""}`} aria-current="page" to="/">Home</Link>
              </li>
              {!localStorage.getItem('token') ? "" :
                <>
                  <li className="nav-item">
                    <Link className={`nav-link ${location.pathname === "/appointment" ? "active" : ""}`} to="/appointment">Appointment</Link>
                  </li>
                  <li className="nav-item">
                    <Link className={`nav-link ${location.pathname === "/patient" ? "active" : ""}`} to="/patient">Patient</Link>
                  </li>
                </>}
              {!localStorage.getItem('Admintoken') ?"":
                <li className="nav-item">
                  <Link className="nav-link" to="/admin">Admin</Link>
                </li>
              }
              <li className="nav-item dropdown">
                <Link className='nav-link dropdown-toggle' to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Login
                </Link>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="/doctorlogin">Doctor Login</Link></li>
                  <li><Link className="dropdown-item" to="/adminlogin">Admin Login</Link></li>
                </ul>
              </li>
            </ul>
            {!(localStorage.getItem('token')||localStorage.getItem('Admintoken')) ? <div></div> :
              <>
                <button className="btn mx-1" onClick={HandleLogout}>Logout</button>
              </>
            }
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar