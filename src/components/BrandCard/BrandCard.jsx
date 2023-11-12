import React, { useState, useEffect } from 'react'
import brandImage from '../../assets/images/aston-martin.png'

import BrandCardStyles from "./BrandCard.module.css"
import { listBrands } from '../../api'
const BrandCard = () => {

  const [brands, setBrands] = useState([])
  useEffect(() => {
    const setData = async () => {
      const brands = await listBrands()
      setBrands(brands)
    }
    setData().catch((err) => console.log(err))
  }, [])
  return (
    <>
      <div className="container">
        <div className="row g-4  ">
          {brands && brands.map((brand, index) => (
            <div className="col-md-4 col-lg-2" key={index}>
            <div className={`${BrandCardStyles.brandCard} p-sm-5 p-lg-4  text-center rounded-4 d-flex align-items-center justify-content-center`} >
              <div className='mx-auto'>
                 <img src={brand.logo} alt="" className="img-fluid mb-3"/>
                  <h3 className={`${BrandCardStyles.brandName} m-0`}>{brand.name}</h3>
              </div>
            </div>
          </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default BrandCard
