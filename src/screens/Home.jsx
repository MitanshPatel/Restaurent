import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Card from '../components/Card'
import Carousel from '../components/Carousel'
import Title from '../components/Title'

function Home() {
  return (
    <div>
      <div><Navbar /></div>
      <div className='title'><Title /></div>
      <div><Carousel /></div>
      <div className='cardo'>
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <div><Footer /></div>
    </div>
  )
}

export default Home
