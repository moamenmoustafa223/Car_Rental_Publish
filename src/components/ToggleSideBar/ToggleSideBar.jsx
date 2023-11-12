import React from 'react'
import ToggleSideBarStyles from "./ToggleSideBar.module.css"
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import FillterSideBar from '../FillterSideBar/FillterSideBar';
const ToggleSideBar = () => {

  const [isMinimized, setIsMinimized] = useState( true );

  return (
    <>

<div className= {`${ToggleSideBarStyles.visibility} position-relative`}>
        <div
          className={
            isMinimized ? `${ToggleSideBarStyles["sidebar-mini"]}` : `${ToggleSideBarStyles.sidebar}`
          }>
        
         <nav className={`${ToggleSideBarStyles.nav} shadow-sm overflow-auto`}>
         <i className="fa-solid fa-xmark fs-4"  onClick={() => {
            setIsMinimized(!isMinimized);
          }}></i>
      <FillterSideBar/>

       
      </nav>
     
      <div
          className={`${ToggleSideBarStyles.change} shadow pointer `}
          onClick={() => {
            setIsMinimized(!isMinimized);
          }}
         
        > Fillter
          {/* <i
            className={`fa-solid ${
              isMinimized ? "fa-chevron-up" : "fa-chevron-left"
            }`}
          ></i> */}
        </div>  


        </div>
      </div>
    
    </>
  )
}

export default ToggleSideBar
