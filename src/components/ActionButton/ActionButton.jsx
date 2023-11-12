import React from 'react'
import ActionButtonStyles from "./ActionButton.module.css"
const ActionButton = ({className}) => {
  return (
    <>
     <a className={`${className} ${ActionButtonStyles.wrap} btnCustom m-0 rounded-4 `} >Show More <i className="bi bi-arrow-up-right fw-bolder fs-6 fw-bold "></i></a> 
    </>
  )
}

export default ActionButton
