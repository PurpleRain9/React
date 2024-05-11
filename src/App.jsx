import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './Header';
import Navbar from './Navbar';
import './index.css';
import Footer from './Footer';
import Food from './Food';
import Card from './Card';

export default function App() {
  return (
    <div className='mx-4 flex flex-wrap'>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      

      {/* <div className='flex justify-between'>
        <Header />
        <Navbar />
      </div>
      <div className='my-4'>
        <Food />
      </div>
      <div>
        <Footer  />
      </div> */}
    </div>



  )
}

