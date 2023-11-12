import React from 'react'
import CarDeltailsStyles from "./CarDeltails.module.css"
import cardImage from '../../assets/images/Ferrari_296-GTB_2023_23888_23888_17178874182-1_small.jpg'
import logoImage from '../../assets/images/ferrari (1).png'
import { Link } from 'react-router-dom'
import SectionHeader from '../SectionHeader/SectionHeader'
import FeaturedCard from '../FeaturedCard/FeaturedCard'
import Slider from 'react-slick'
const CarDeltails = ({car}) => {
  return (
    <>
   <div className="container py-5">
    <Link className="btnCustom mb-4 d-inline-block" to={`/cars`} ><i className="fa-solid fa-arrow-left-long me-2"></i> Back to search
    </Link>
    <h2 className={`${CarDeltailsStyles.carName}`}> {car.model.type.name} <span>{car.model.name}</span> <span>{car.year}</span></h2>
    <div className='d-flex mb-3'>
    <div className="d-flex align-items-center me-5">
                <h6 className={`${CarDeltailsStyles.features} m-0 me-2 `}>MINIMUM</h6>
                <p className={`${CarDeltailsStyles.featuresProb} m-0`}>{car.minDays} <span className={`${CarDeltailsStyles.currency}`}>DAYS</span></p>
      </div>
      <div className="d-flex align-items-center ">
                <h6 className={`${CarDeltailsStyles.features} m-0 me-2 `}>insurance</h6>
                <p className={`${CarDeltailsStyles.featuresProb} m-0`}>{!car.hasInsurance && 'Not included'} included</p>
      </div>
    </div>
    <div className="row g-2 mb-4 px-2">
    
      <div className="col-md-6">
        <div className="imgContainer h-100">
        <img src={car.pictures[0] || cardImage} className={`${CarDeltailsStyles.mainImg} img-fluid w-100 h-100 `} alt="" />
        </div>
     
      </div>
      <div className="col-md-6">
        <div className="row g-2">
          <div className="col-6">
          <div className="imgContainer">
        <img src={car.pictures[0] || cardImage} className={`${CarDeltailsStyles.topLeft} img-fluid w-100`} alt="" />
        </div>
      
          </div>
          <div className="col-6">
          <div className="imgContainer">
        <img src={car.pictures[1] || cardImage} className={`${CarDeltailsStyles.topRight} img-fluid w-100`} alt="" />
        </div>
      
          </div>
          <div className="col-6">
          <div className="imgContainer">
        <img src={car.pictures[2] || cardImage} className={`${CarDeltailsStyles.bottomLeft} img-fluid w-100`} alt="" />
        </div>
      
          </div>
          <div className="col-6">
          <div className="imgContainer">
        <img src={car.pictures[3] || cardImage} className={`${CarDeltailsStyles.bottomRight} img-fluid w-100`} alt="" />
        </div>
       
          </div>
        </div>

      </div>
    </div>

    <div className="row g-4 px-2 mb-5">
      <div className="col-md-8 pe-md-5">
        <div className="colWraper  mb-4">
          <div className=' d-flex justify-content-between align-items-center py-3 border-bottom'>
            <h5 className={`${CarDeltailsStyles.providBy}`}>listed by <span>{car.vendor.name}</span></h5>
            <img src={logoImage} className='img-fluid' alt="" />
          </div>
        </div>

        <ul className='px-2 mb-5'>
          <li className='mb-3'>
          <i className="fa-solid fa-arrow-left-long me-2"></i> {car.model.doors} Doors
          </li>
          <li className='mb-3'>
          <i className="fa-solid fa-arrow-left-long me-2"></i> Fits {car.model.passengers} passengers
          </li>
          <li className='mb-3'>
          <i className="fa-solid fa-arrow-left-long me-2"></i>{car.model.transmission} Transmission
          </li>
          <li className='mb-3'>
          <i className="fa-solid fa-square me-2" style={{backgroundColor:`${car.color.name}`}}></i> color
          </li>
          <li className='mb-3'>
          <i className="fa-solid fa-arrow-left-long me-2"></i> 4 Doors
          </li>
          <li className='mb-3'>
          <i className="fa-solid fa-arrow-left-long me-2"></i> 4 Doors
          </li>
          <li className='mb-3'>
          <i className="fa-solid fa-arrow-left-long me-2"></i> 4 Doors
          </li>
          <li className='mb-3'>
          <i className="fa-solid fa-arrow-left-long me-2"></i> 4 Doors
          </li>
          
        </ul>
        <div className=' d-flex justify-content-between align-items-center p-3 border rounded'>
          <div className=' d-flex  align-items-center' >
          <img src={logoImage} className='img-fluid me-2' alt="" />
            <h4 className={`${CarDeltailsStyles.vendorName} m-0`}>{car.vendor.name}</h4>
          </div>
          <Link className=" btnCustom btnFilled rounded-4 px-5" >about the vendor</Link>
        
           
          </div>
      </div>

      <div className="col-md-4">
        <div className=' border p-3 rounded-3 mb-5'>
        <div className='  d-flex justify-content-between mb-3'>
                  <div className='text-start'>
                    <h6 className={`${CarDeltailsStyles.features}`}>price per day</h6>
                    {car.costPerDayBefore ? (
                      <>
                       <div className={`${CarDeltailsStyles.discountPrice}`}>
                      <p className={`mainColor fw-bold d-inline-block position-relative m-0 `}><span className={`${CarDeltailsStyles.currency}`}>AED</span> {car.costPerDayBefore}</p>
                    </div>
                      </>
                    ):""}
                   
                    <p className={`${CarDeltailsStyles.price} m-0`}><span className={`${CarDeltailsStyles.currency}`}>AED</span> {car.costPerDayNow}</p>
                  </div>
                  <div className=' text-end'>
                    <h6 className={`${CarDeltailsStyles.features} `}>price per month</h6>
                    {car.costPerMonthBefore ? (
                      <>
                        <div className={`${CarDeltailsStyles.discountPrice}  `}>
                      <p className={`mainColor fw-bold d-inline-block position-relative m-0 `}><span className={`${CarDeltailsStyles.currency}`}>AED</span> {car.costPerMonthBefore}</p>
                    </div>
                      </>
                    ):""}
                    <p className={`${CarDeltailsStyles.price} m-0`}><span className={`${CarDeltailsStyles.currency}`}>AED</span> {car.costPerMonthNow}</p>
                  </div>
                </div>

                <button className=' btnCustom btnFilled w-100 rounded-4'> Book via Whatsapp</button>

        </div>

        <div>
          <h5>Euroline's Location</h5>
          <iframe className='w-100' height={"300px"}
        title="Embedded Map"

        
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3225.5036476266433!2d-122.08539848472485!3d37.421999579819705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808587adb36514cf%3A0xbb0a2ca96be05e4a!2sGolden%20Gate%20Bridge!5e0!3m2!1sen!2sus!4v1564690867545!5m2!1sen!2sus"
        allowFullScreen
      ></iframe>
        

        </div>
      </div>

    </div>
    <SectionHeader title={"Similar Cars"} subTitle={"Make your first car rental a great experience with luxury rental vehicles."} />
    <FeaturedCard/>
    </div> 
    </>
  )
}

export default CarDeltails
