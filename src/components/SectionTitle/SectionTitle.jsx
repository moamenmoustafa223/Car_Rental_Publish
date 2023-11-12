import React from 'react'
import SectionTitleStyles from "./SectionTitle.module.css"
const SectionTitle = () => {
  return (
    <>
  <div className="sectionTitle text-center mb-5">
    <h2 className={`${SectionTitleStyles.mainTitle}`}>The Most Searched Cars</h2>
    <p className='text-muted m-0'>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
  </div>
    </>
  )
}

export default SectionTitle
