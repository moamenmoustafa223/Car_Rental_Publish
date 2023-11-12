import React, { useEffect, useState } from "react";

import FilterBarStyles from "./FilterBar.module.css";
import SearchBox from "../SearchBox/SearchBox";
import {
  listBrands,
  listVendors,
  listCategories,
} from "../../api";

const FilterBar = () => {
  const [vendors, setVendors] = useState([]);
  const [brands, setBrands] = useState([]);
  const [carCategories, setCarCategories] = useState([]);
  const [filters, setFilters] = useState({});

  useEffect(() => {
    const setData = async () => {
      setVendors(await listVendors());
      setBrands(await listBrands());
      setCarCategories(await listCategories());
    };

    setData().catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div
        className={`${FilterBarStyles.classificationBox}  p-2 rounded-4  bg-white`}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col p-0 ">
              <div className="border-end">
                <select
                  id="inputState"
                  class="form-select border-0 shadow-none rounded-3"
                  onChange={(e) => {
                    setFilters({ ...filters, brand: e.target.value });
                  }}
                >
                  <option selected disabled>
                    Any Brands
                  </option>
                  {brands.length > 0 ? (
                    brands.map((brand, index) => (
                      <option key={index} value={brand.id}>
                        {brand.name}
                      </option>
                    ))
                  ) : (
                    <option disabled>No brands available</option>
                  )}
                </select>
              </div>
            </div>

            <div className="col p-0">
              <div className="border-end">
                <select
                  id="inputState"
                  class="form-select border-0 shadow-none  rounded-3"
                  onChange={(e) => {
                    setFilters({ ...filters, category: e.target.value });
                  }}
                >
                  <option selected disabled>
                    Any Category
                  </option>
                  {carCategories.length > 0 ? (
                    carCategories.map((category, index) => (
                      <option key={index} value={category.id}>{category.name}</option>
                    ))
                  ) : (
                    <option disabled>No categories available</option>
                  )}
                </select>
              </div>
            </div>
            <div className="col   p-0 ">
              <div className=" border-end">
                <select
                  id="inputState"
                  class="form-select border-0 shadow-none  rounded-3    "
                  onChange={(e) => {
                    setFilters({ ...filters, vendor: e.target.value });
                  }}
                >
                  <option selected disabled>
                    Any Vendor
                  </option>
                  {vendors.length > 0 ? (
                    vendors.map((vendor, index) => (
                      // TODO: change vendor.email to vendor.name once added in the api response
                      <option key={index} value={vendor.id}>{vendor.email}</option>
                    ))
                  ) : (
                    <option disabled>No vendors available</option>
                  )}
                </select>
              </div>
            </div>
            <div className="col-5">
              <SearchBox filters={filters} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FilterBar;
