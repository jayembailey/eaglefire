import React from 'react'
import salemLeaning from '../assets/salem-pics/leaning.jpg'
import salemNoglasses from '../assets/salem-pics/noglasses.jpg'
import salemChild from '../assets/salem-pics/salem-child.jpg'
import salemSepia from '../assets/salem-pics/sepia.jpg'
import { Link } from 'react-router-dom'
import efpLogo from '../assets/EFP_logo.jpg'

const Photo = () => {
  return (
    <>
      <div className="heading">
        <Link to='/'>
          <img src={efpLogo} className='header-logo' alt="" />
        </Link>
        <div className="empty-div"></div>
        <Link to='/' id='drop-wrapper'><button id='drop-button'>Back</button></Link>
      </div>
      <h1>Photo Gallery</h1>
      <div className="gallery">
        <div className="photo-cont"><img className='gallery-photo' id='sepia-photo' src={salemSepia} alt="old photo of salem" /></div>
        <div className="photo-cont"><img className='gallery-photo' id='leaning-photo' src={salemLeaning} alt="salem leaning on a stool" /></div>
        <div className="photo-cont"><img className='gallery-photo' id='noglasses-photo' src={salemNoglasses} alt="salem without glasses" /></div>
        <div className="photo-cont"><img className='gallery-photo' id='child-photo' src={salemChild} alt="salem as a child" /></div>
      </div>
      <footer>Site designed by J. Bailey Developments</footer>
    </>
  )
}

export default Photo
