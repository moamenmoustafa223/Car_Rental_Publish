import React from 'react'
import HorizontalCardStyles from "./HorizontalCard.module.css"
import Stack from 'react-bootstrap/Stack';
import Badge from 'react-bootstrap/Badge';
import logoImage from '../../assets/images/ferrari (1).png'
import cardImage from '../../assets/images/Ferrari_296-GTB_2023_23888_23888_17178874182-1_small.jpg'
import { Link } from 'react-router-dom';

const HorizontalCard = ({ car }) => {
  return (
    <>

      <div className="container ">

        <div className={`${HorizontalCardStyles.cardCustom} card d-inline-block mb-3 ms-auto p-0 position-relative`} >
    <div className= {`${HorizontalCardStyles.cardHeader} position-absolute p-3 d-flex justify-content-between align-items-center`}>
        <Badge  className='py-2 px-3 rounded-4 mainBG'>Sports</Badge>
        <div className= {`${HorizontalCardStyles.fav}  p-2 rounded-circle  mainColor d-flex justify-content-center align-items-center`}>
        <i className="fa-regular fa-bookmark"></i>
        <i className="fa-solid fa-bookmark"></i>
        </div>
        </div>
  <div className="row g-0">
    <div className="col-md-4 ">
    <div className= {`${HorizontalCardStyles.imgContainer} h-100 position-relative `}>
     
      <img src={cardImage} className="img-fluid w-100 h-100 rounded-start"  alt="..."/>
          <div className= {`${HorizontalCardStyles.imgLayer} rounded-start-1 position-absolute d-flex justify-content-center align-items-center`}>
          <a className={`${HorizontalCardStyles.btnCustom}`} >Show More <i className="bi bi-arrow-up-right ms-2 fs-6 fw-bold"></i></a>
          </div>
        </div>
    </div>
    <div className="col-md-8 text-start">
      <div className="card-body p-md-3 px-lg-4">
        <div className="cardContent">
        
        <h5 className="card-title ">
        
        <div className="cardHeader d-flex align-items-center text-start mb-3">
                <img src={logoImage} className='me-3 img-fluid'  alt="" />
                  <div>
                    <h5 className={`${HorizontalCardStyles.cardTitle} m-0 mb-1`}>Peugeot <span>2008</span> <span>2023</span></h5>
                    <p className={`${HorizontalCardStyles.vendorName} m-0`}>EuroLine</p>
                  </div>
                  
               
                </div>
        </h5>

        <div className={`${HorizontalCardStyles.divider} p-0 text-center mb-3 px-3`}>
        <div className="d-flex  justify-content-center py-3">
                  <Badge className='py-2 px-2 rounded-4 mx-1 mainBG '>Sports</Badge>
                  <Badge className='py-2 px-2 rounded-4 mx-1 mainBG '>Sports</Badge>
                  <Badge className='py-2 px-2 rounded-4 mx-1 mainBG '>Sports</Badge>
                  <Badge className='py-2 px-2 rounded-4 mx-1 mainBG '>Sports</Badge>
                  </div>
              
              </div>
              <div className='px-3 d-flex justify-content-between'>
                  <div className='text-start'>
                  <h6 className={`${HorizontalCardStyles.features}`}>per day</h6>
                  <div className=''>
                  <div className={`${HorizontalCardStyles.discountPrice}`}> 
                          <p className={`mainColor fw-bold d-inline-block position-relative m-0 `}><span className={`${HorizontalCardStyles.currency}`}>AED</span> 180</p>
                      </div>
                      <p className={`${HorizontalCardStyles.price} m-0`}><span className={`${HorizontalCardStyles.currency}`}>AED</span> 120</p>
                      
                      </div>
                 

                  </div>

                  <div className='text-center'>
                  <h6 className={`${HorizontalCardStyles.features}`}>per week</h6>
                  <div className=' '>
                  <div className={`${HorizontalCardStyles.discountPrice}`}> 
                          <p className={`mainColor fw-bold d-inline-block position-relative m-0 `}><span className={`${HorizontalCardStyles.currency}`}>AED</span> 180</p>
                      </div>
                      <p className={`${HorizontalCardStyles.price} m-0 `}><span className={`${HorizontalCardStyles.currency}`}>AED</span> 120</p>
                      
                      </div>
                 

                  </div>

                  <div className=' text-end'>
                  <h6 className={`${HorizontalCardStyles.features} `}>per month</h6>
                  <div className=''>
                  <div className={`${HorizontalCardStyles.discountPrice}`}> 
                          <p className={`mainColor fw-bold d-inline-block position-relative m-0 `}><span className={`${HorizontalCardStyles.currency}`}>AED </span>1800</p>
                      </div>
                      <p className={`${HorizontalCardStyles.price} m-0`}><span className={`${HorizontalCardStyles.currency}`}>AED</span> 1200</p>
                      
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

export default HorizontalCard
