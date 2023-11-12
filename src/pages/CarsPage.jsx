import React, { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"

import NavBar from "../components/NavBar/NavBar"
import CarsList from "../components/Cars/CarsList"
import { listCars } from "../api"
import FillterSideBar from "../components/FillterSideBar/FillterSideBar"

export default function CarsPage() {
    const [searchParams, setSearchParams] = useSearchParams()
    const [cars, setCars] = useState([])
    useEffect(() => {
        const setData = async () => {
            const cars = await listCars(searchParams)
            setCars(cars)
        }
        setData().catch((err) => console.log(err))
    }, [searchParams])

    return (
        <>
            <NavBar />
            <div className="container py-5">
            <div className="">
                {cars.length > 0 ? (
                    <>
                    <div className="carsPage container py-5">
                    <ToggleSideBar/>
                        <div className="row">
                            <div className="col-md-3">
                                <FillterSideBar/>
                            </div>
                            <div className="col-md-9 pt-5">
                            <CarsList cars={cars} />
                            </div>
                        </div>

                    </div>
                
                    </>
                   
                ) : <h1 className="p-5">No results</h1>}
            </div>
            </div>
            
        </>
    )
}