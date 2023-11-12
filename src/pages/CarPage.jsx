import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { getCar, listCars } from "../api"
import CarDeltails from "../components/CarDeltails/CarDeltails"

export default function CarPage() {
    const { id } = useParams()
    const [car, setCar] = useState(null)
    useEffect(() => {
        const setData = async () => {
            const car = await getCar(id)
            setCar(car)
        }
        setData().catch((err) => console.log(err))
    }, [])
    return (
        // TODO: Add a car page UI here
        <div>
            {
                car ? (
                    <>
                    <div className="container py-5">
                    <CarDeltails car={car}/>
                    </div>
                    
                    </>
                  
                ) : (
                    <h1>Car not found</h1>
                )
            }
        </div>
    )
}