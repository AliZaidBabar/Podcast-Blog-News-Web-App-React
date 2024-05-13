import React from 'react'
import '../style.css'
import SearchIcon from '../images/search-icon.png'
import Brainlogo from '../images/brain-logo.png'
function navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container">
        <a className="navbar-brand" href="#"><img src={Brainlogo} className='img-fluid'/></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto ">
            <li className="nav-item ">
              <a className="nav-link pe-3" aria-current="page" href="#">HOME</a>
            </li>
            <li className="nav-item">
              <a className="nav-link pe-3" href="#">ABOUT</a>
            </li>
            <li className="nav-item">
              <a className="nav-link pe-3" href="#">TEAM</a>
            </li>
            <li className="nav-item">
              <a className="nav-link pe-3" href="#">QUIZZES</a>
            </li>
            <li className="nav-item">
              <a className="nav-link pe-3" href="#">BLOG</a>
            </li>
            <li className="nav-item">
              <a className="nav-link pe-3" href="#">CONTACT</a>
            </li>
            <li className="nav-item">
              <a className="nav-link pe-3" href="#">E-BOOK</a>
            </li>
          </ul>
          <img src={SearchIcon} className='img-fluid pe-5'/>
          <button type="button" class="btn btn-nav btn-primary ps-4 pe-4 pt-2 pb-2">SIGN IN</button>
          {/* <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form> */}
        </div>
      </div>
    </nav>
  )
}

export default navbar
