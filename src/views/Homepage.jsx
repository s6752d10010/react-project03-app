import React from 'react'
import NavBar from './../components/NavBar.jsx'
import Footer from '../components/Footer.jsx'
import PicCard from '../components/PicCard.jsx'
import pic1 from '../assets/pic1.png'
import pic2 from '../assets/pic2.png'
import pic3 from '../assets/pic3.png'

export default function Homepage() {
  return (
    <>
    <NavBar/>
    <h1>Homepage</h1>
    <br />
    <PicCard showimg={pic1}/>
    <br />
    <PicCard showimg={pic2}/>
    <br />
    <PicCard showimg={pic3}/>

    <Footer/>
    </>
  )
}