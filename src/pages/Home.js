import React from 'react'
import Navbar from '../components/Navbar'
import Offers from '../components/Offers'
import Shop from '../components/Shop'
import Categories from '../components/Categories'
import Product from '../components/Product'
import Footer from '../components/Footer'
import Trending from '../components/Trending'

const Home = () => {
    return (
        <div>
            <Offers/>
            <Navbar/>
            <Shop/>
            <Categories/>
            <Trending/>
            <Product/>
            <Footer/>
        </div>
    )
}

export default Home