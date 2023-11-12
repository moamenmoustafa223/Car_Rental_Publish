import React from "react";
import { Link } from "react-router-dom";
import Badge from 'react-bootstrap/Badge';
import Stack from 'react-bootstrap/Stack';
import Card from 'react-bootstrap/Card';

import cardImage from '../../assets/images/Ferrari_296-GTB_2023_23888_23888_17178874182-1_small.jpg'
import logoImage from '../../assets/images/ferrari (1).png'
import CarsStyles from './Cars.module.css'

/**
 * 
 * @param {Object} props
 * @param {object} props.car
 */
export default function CarCard({ car }) {
    console.log('car card', car)
    return (
        <>
         <div className="container p-5 ">

<div className={`${CarsStyles.cardCustom} card mb-3  ms-auto p-0 position-relative`} >
  <div className={`${CarsStyles.cardHeader} position-absolute p-3 d-flex justify-content-between align-items-center`}>
    <Badge className='py-2 px-3 rounded-4 mainBG'>{car.model.type.name}</Badge>
    <div className={`${CarsStyles.fav}  p-2 rounded-circle  mainColor d-flex justify-content-center align-items-center`}>
      <i className="fa-regular fa-bookmark"></i>
      <i className="fa-solid fa-bookmark"></i>
    </div>
  </div>
  <div className="row g-0">
    <div className="col-md-4 ">
      <div className={`${CarsStyles.imgContainer} h-100 position-relative `}>
        <img src={car.pictures[0] || cardImage} className="img-fluid w-100 h-100 rounded-start" alt="..." />
        <div className={`${CarsStyles.imgLayer} rounded-start-1 position-absolute d-flex justify-content-center align-items-center`}>
          <Link className={`${CarsStyles.btnCustom}`}  to={`/car/${car.id}`}>
            Show More <i className="bi bi-arrow-up-right ms-2 fs-6 fw-bold"></i>
            </Link>
        </div>
      </div>
    </div>
    <div className="col-md-8 text-start">
      <div className="card-body p-md-3 px-lg-4">
        <div className="cardContent">
          <h5 className="card-title ">
            <div className="cardHeader d-flex align-items-center text-start mb-3">
              <img src={logoImage} className='me-3 img-fluid' alt="" />
              <div>
                <h5 className={`${CarsStyles.cardTitle} m-0 mb-1`}>{car.model.name} <span>2008</span> <span>2023</span></h5>
                <p className={`${CarsStyles.vendorName} m-0`}>{car.vendor.name}</p>
              </div>
            </div>
          </h5>
          <div className={`${CarsStyles.divider} p-0 text-center mb-3 px-3`}>

          {/* to do */}
          
            <div className="container">
              <div className="row">
                <div className=" col-4 p-0 d-flex align-items-center justify-content-start text-start ">
                  <div className="cardFooter py-3">
                    <h6 className={`${CarsStyles.features} `}>MINIMUM</h6>
                    <p className={`${CarsStyles.featuresProb} m-0`}>{car.minDays} <span className={`${CarsStyles.currency}`}>DAYS</span></p>
                  </div>
                </div>
                <div className="col-4 p-0 d-flex align-items-center justify-content-center">
                  <div className="cardFooter py-3">

                    <h6 className={`${CarsStyles.features} `}>insurence</h6>
                    <p className={`${CarsStyles.featuresProb} m-0`}>{!car.hasInsurance && 'Not included'}Included</p>

                  </div>
                </div>
                <div className="col-4 p-0 d-flex align-items-center justify-content-end text-end">
                  <div className="cardFooter py-3">
                    <h6 className={`${CarsStyles.features} `}>deposite</h6>
                    <p className={`${CarsStyles.featuresProb} m-0`}> <span className={`${CarsStyles.currency}`}>AED</span> {car.deposit}</p>
                  </div>
                </div>



              </div>
            </div>

          </div>
          <div className='px-3 d-flex justify-content-between'>
            <div className='text-start'>
              <h6 className={`${CarsStyles.features}`}>per day</h6>

              <div className=''>
                {car.costPerDayBefore ? (
                <>
                  <div className={`${CarsStyles.discountPrice}`}>
                  <p className={`mainColor fw-bold d-inline-block position-relative m-0 `}><span className={`${CarsStyles.currency}`}>AED</span> {car.costPerDayBefore}</p>
                </div>
                </>
                ):""
                }
                
                <p className={`${CarsStyles.price} m-0 `}><span className={`${CarsStyles.currency}`}>AED</span> {car.costPerDayNow}</p>


              </div>

            </div>

            <div className='text-center'>
              <h6 className={`${CarsStyles.features}`}>per week</h6>

              <div className=''>
                {car.costPerWeekBefore ? (
                <>
                  <div className={`${CarsStyles.discountPrice}`}>
                  <p className={`mainColor fw-bold d-inline-block position-relative m-0 `}><span className={`${CarsStyles.currency}`}>AED</span> {car.costPerWeekBefore}</p>
                </div>
                </>
                ):""
                }
                
                <p className={`${CarsStyles.price} m-0 `}><span className={`${CarsStyles.currency}`}>AED</span> {car.costPerWeekNow}</p>


              </div>

            </div>

            <div className=' text-end'>
              <h6 className={`${CarsStyles.features} `}>per month</h6>
              <div className=''>
              {car.costPerMonthBefore ? (
                <>
                  <div className={`${CarsStyles.discountPrice}`}>
                  <p className={`mainColor fw-bold d-inline-block position-relative m-0`}><span className={`${CarsStyles.currency}`}>AED </span>{car.costPerMonthBefore}</p>
                </div>

                </>
              ):""}

                <p className={`${CarsStyles.price} m-0`}><span className={`${CarsStyles.currency}`}>AED</span> {car.costPerMonthNow}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


</div>
        </>
    )
}