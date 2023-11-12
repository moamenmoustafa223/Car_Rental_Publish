import React from 'react'
import HomeStyles from "./Home.module.css"
import SectionHeader from '../SectionHeader/SectionHeader'
import BrandCard from '../BrandCard/BrandCard'
import CategoryCard from '../CategoryCard/CategoryCard'
import FeaturedCard from '../FeaturedCard/FeaturedCard'

import ActionButton from '../ActionButton/ActionButton'
import SectionTitle from '../SectionTitle/SectionTitle'
import HorizontalCard from '../HorizontalCard/HorizontalCard'
import Slider from '../Slider/Slider'
import JoinUsSection from '../JoinUsSection/JoinUsSection'
import FillterSideBar from '../FillterSideBar/FillterSideBar'
import { useState } from 'react'
import ToggleSideBar from '../ToggleSideBar/ToggleSideBar'
import Banner from '../Banner/Banner'
import CardSlider from '../CardSlider/CardSlider'
import TenderSlider from '../TenderSlider/TenderSlider'



const Home = () => {
 
  return (
    <>
  
  <section className="container py-5 px-3">
        <SectionHeader title={"hot deals"} subTitle={"Make your first car rental a great experience with luxury rental vehicles."} />
       <CardSlider/>
      </section>

      <section className="container py-5 px-3">
        <Banner/>
        {/* <TenderSlider/> */}
      </section>



      <section className="container py-5 px-3">
        <SectionHeader title={"browse cars"} subTitle={"Make your first car rental a great experience with luxury rental vehicles."} />
        <FeaturedCard />
      </section>

      <section className="container py-5 px-3">
        <SectionHeader title={"luxury cars"} subTitle={"Make your first car rental a great experience with luxury rental vehicles."} />
        <FeaturedCard />
      </section>

      <section className="container py-5 px-3">
        <SectionHeader title={"sport cars"} subTitle={"Make your first car rental a great experience with luxury rental vehicles."} />
        <FeaturedCard />
      </section>

      <section className="container py-5 px-3">
        <SectionHeader title={"suv&family cars"} subTitle={"Make your first car rental a great experience with luxury rental vehicles."} />
        <FeaturedCard />
      </section>

      <section className="container py-5 px-3">
        <SectionHeader title={"economic cars"} subTitle={"Make your first car rental a great experience with luxury rental vehicles."} />
        <FeaturedCard />
      </section>


      <section className="container py-5 px-3">
        <Banner/>
      </section>


      <section className="container py-5 px-3">
        <SectionHeader title={"our categories"} subTitle={"Make your first car rental a great experience with luxury rental vehicles."} />
        <CategoryCard />
      </section>

     

      <section className="container  py-5 px-3">
        <SectionHeader title={"our premium brands"} subTitle={"Make your first car rental a great experience with luxury rental vehicles."} />
        <BrandCard />
      </section>

    </>
  )
}

export default Home
