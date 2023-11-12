import React from 'react'
import BannerStyles from "./Banner.module.css"
import bannerImg from '../../assets/images/banner.png'
const Banner = () => {
  return (
    <>
   <div className={`${BannerStyles.Banner}`}>
    <img src={bannerImg} className='img-fluid w-100' alt="" />
   </div>
    </>
  )
}

export default Banner
