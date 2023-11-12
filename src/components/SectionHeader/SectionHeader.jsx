import React from 'react'
import SectionHeaderStyles from "./SectionHeader.module.css"
import ActionButton from '../ActionButton/ActionButton'
const SectionHeader = (props) => {
  return (
    <>
      <div className="sectionHeader mb-5">
        <div className="subtitle d-flex justify-content-between align-items-center">
          <div className='d-inline-block'>
            <h2 className={`${SectionHeaderStyles.mainTitle}`}>{props.title}</h2>
            <p className='m-0 d-inline-block'>{props.subTitle}</p>
          </div>
          <ActionButton />
        </div>
      </div>

    </>
  )
}

export default SectionHeader
