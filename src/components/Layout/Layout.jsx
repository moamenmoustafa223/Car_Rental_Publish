import React from 'react'
import LayoutStyles from "./Layout.module.css"
import { Outlet } from 'react-router-dom'
import NavBar from '../NavBar/NavBar'
import BrandCard from '../BrandCard/BrandCard'
import CategoryCard from '../CategoryCard/CategoryCard'
import FeaturedCard from '../FeaturedCard/FeaturedCard'
import HorizontalCard from '../HorizontalCard/HorizontalCard'
import SectionHeader from '../SectionHeader/SectionHeader'
import HeroSection from '../HeroSection/HeroSection'
import SearchBox from '../SearchBox/SearchBox'
import Slider from '../Slider/Slider'
const Layout = () => {
  return (
    <>
      <NavBar />
      <HeroSection />
      <div className="container">
        <Outlet />
      </div>
    </>
  )
}

export default Layout
