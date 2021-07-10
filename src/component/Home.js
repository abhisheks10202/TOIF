import React from 'react'
import "./Home.css"
import Carousels from './Carousel'
// import {Link} from "react-router-dom"
import Header from "./Header"
import Card from './Card'
import Blog from './Blog'
import FourE from './FourE'
import Footer from './footer/Footer'

const Home = () => {
  return (


    <div className="bg-info">
      <Header />
      <Carousels />
      <Card />
      <FourE />
      <Blog />
      <Footer />
    </div>
  )
}

export default Home
