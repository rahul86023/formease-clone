import React from 'react'
import formease  from './images/formease.png'
function Header() {
  return (
    <>
    <nav className=" navbar navbar-expand-lg bg-light">
    <div className="container-fluid container">
         
    <img  class="bi me-2" width="80" height="32" role="img" src={formease}/>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarScroll">
        <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style={{}}>
            <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="#">Result</a>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="#">FAQ</a>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="#">About us</a>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="#">Contact us</a>
            </li>
        </ul>
        <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            {/* <button className="btn btn-outline-success" type="submit">Search</button> */}
        </form>
        <a href="#" class="d-block link-body-emphasis text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
            <img src="https://imgs.search.brave.com/hNMAtjnevC5eE2ATUwsjo--1usL5gaNyunR2ID_epOo/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMtMDAuaWNvbmR1/Y2suY29tL2Fzc2V0/cy4wMC9wcm9maWxl/LWNpcmNsZS1pY29u/LTI1NngyNTYtY205/MWdxbTIucG5n" alt="mdo" width="32" height="32" class="rounded-circle"/>
          </a>
        </div>
    </div>
    </nav>
    </>
  )
}

export default Header