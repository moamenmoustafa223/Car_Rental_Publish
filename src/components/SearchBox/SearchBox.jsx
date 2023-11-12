import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";

import styles from "./SearchBox.module.css"


const SearchBox = ({ filters }) => {
  const navigate = useNavigate();
  const [search, setSearch] = useState('')

  const handleSearch = () => {
    const queryObj = filters
    if (search.length > 0) {
      queryObj.search = search
    }

    const queryString = new URLSearchParams(queryObj).toString()
    if (queryString.length > 0) {
      navigate(`/cars?${queryString}`)
      return
    }
  }

  return (
    <>
      <div class={`${styles.SearchBox} input-group `}>
        <input type="text" class="form-control py-3  " onChange={(e) => setSearch(e.target.value)} placeholder="SEARCH FOR CARS.." aria-label="Recipient's username" aria-describedby="button-addon2"/>
        <button className="btn btnCustom btnFilled rounded-end  " onClick={handleSearch} type="button" id="button-addon2">SEARCH</button>
      </div>

    </>
  )
}

export default SearchBox
