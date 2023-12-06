import React from 'react'
import './Home.css'
import MyDialog from './MyDialog'

function Home() {
  return (
    <div className='home'>
      <div className="home__row">
      <MyDialog/>
      <MyDialog/>
      <MyDialog/>
      <MyDialog/>
      </div>
      
    </div>
  )
}

export default Home
