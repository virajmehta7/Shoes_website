import React from 'react'
import Navbar from '../components/Navbar'
import Offers from '../components/Offers'
import Slider from '../components/Slider'

const Home = () => {
    return (
        <div>
            <Offers/>
            <Navbar/>
            <Slider/>
        </div>
    )
}

export default Home