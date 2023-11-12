import React from 'react'
import logoImage from "../../assets/images/Logo.svg"
import NavBarStyles from "./NavBar.module.css"
import SearchBox from '../SearchBox/SearchBox'

const NavBar = () => {
  return (
    <>
      <nav className={`${NavBarStyles.navCustom} navbar navbar-expand-lg fixed-top py-3 px-3`}>
        <div className={`${NavBarStyles.dir} container`}>
          <a className="navbar-brand me-5" href="/">
            <div className="logo d-flex align-items-center justify-content-center">
              <img src={logoImage} className="img-fluid me-2" alt="" />
              <div>
              <h6 className={`${NavBarStyles.logoName} m-0`}>CarsWin</h6>
              <p className='m-0'>Rent the perfect car for your</p>
              </div>
             
            </div>
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`${NavBarStyles.navMenu} collapse navbar-collapse`}  id="navbarSupportedContent">
      
            <ul className={`${NavBarStyles.navbarnavCustom} navbar-nav ms-lg-5 mt-4  mt-lg-0   mb-5 mb-lg-0`}>
              <li className="nav-item me-4">
                <a className={`${NavBarStyles.navlinkCustom} ${NavBarStyles.active} py-1`} aria-current="page" href="/">HOME</a>
              </li>
              <li className="nav-item me-4">
                <a className={`${NavBarStyles.navlinkCustom}  py-1 `} href="">ABOUT US</a>
              </li>
              <li className="nav-item me-4">
                <a className={`${NavBarStyles.navlinkCustom} py-1 `} href="">WHY US</a>
              </li>
              <li className="nav-item me-4">
                <a className={`${NavBarStyles.navlinkCustom} py-1 `} href="">TESTIMONIAL</a>
              </li>
              <li className="nav-item me-4">
                <a className={`${NavBarStyles.navlinkCustom} py-1`} href="">GET IN TOUCH</a>
              </li>
            </ul>

            <ul className={`${NavBarStyles.navbarnavCustom} navbar-nav mb-2 mb-lg-0 ms-auto d-flex flex-row`}>
              <li className="nav-item me-1">
                <a className={`${NavBarStyles.navlinkCustom} p-2 `} href="/"><i className="fa-brands fa-instagram fw-bold"></i></a>
              </li>
              <li className="nav-item me-1">
                <a className={`${NavBarStyles.navlinkCustom} p-2 `} href=""><i className="fa-brands fa-linkedin-in"></i></a>
              </li>
              <li className="nav-item me-1">
                <a className={`${NavBarStyles.navlinkCustom} p-2 `} href=""><i className="fa-brands fa-facebook-f"></i></a>
              </li>
              <li className="nav-item me-1">
                <a className={`${NavBarStyles.navlinkCustom} p-2 `} href=""><i className="fa-brands fa-tiktok"></i></a>
              </li>
              <li className="nav-item me-1">
                <a className={`${NavBarStyles.navlinkCustom} p-2 `} href=""><i className="fa-brands fa-snapchat fw-bold"></i></a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default NavBar
