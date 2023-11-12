import React, { useEffect, useState } from 'react'
import CategoryCardStyles from "./CategoryCard.module.css"
import categoryImage from '../../assets/images/sports2.png'
import { listCategories } from '../../api'

const CategoryCard = () => {
  const [categories, setCategories] = useState([])
  useEffect(() => {
    const setData = async () => {
      const categories = await listCategories()
      setCategories(categories)
    }
    setData().catch((err) => console.log(err))
  }, [])

  return (
    <>
      <div className="container">
        <div className="row g-4">
          {categories && categories.map((category, index) => (
               <div className="col-md-4 col-lg-3" key={index}>
               <div className= {`${CategoryCardStyles.categoryCard}  p-4 text-center rounded-4`}>
                   <img src={category.image} alt="" className="img-fluid mb-3"/>
                   <h3 className={`${CategoryCardStyles.categoryName}`}>{category.name}</h3>
               </div>
             </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default CategoryCard
