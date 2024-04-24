import React from 'react'
import salemLeaning from '../assets/salem-pics/leaning.jpg'
import salemNoglasses from '../assets/salem-pics/noglasses.jpg'
import salemChild from '../assets/salem-pics/salem-child.jpg'
import salemSepia from '../assets/salem-pics/sepia.jpg'
import salemBench from '../assets/salem-pics/bench.jpg'
import salemComputer from '../assets/salem-pics/computer.jpg'
import salemOutTable from '../assets/salem-pics/outside-table.jpg'
import salemTeen from '../assets/salem-pics/salem-teen.jpg'
import salemGrandma from '../assets/salem-pics/grandma.jpg'
import salemWallJacket from '../assets/salem-pics/wall-jacket.jpg'
import salemNoJacket from '../assets/salem-pics/wall-nojacket.jpg'

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
        <div className="photo-cont"><img className='gallery-photo' id='bench-photo' src={salemBench} alt="salem on bench with statue" /></div>
        <div className="photo-cont"><img className='gallery-photo' id='computer-photo' src={salemComputer} alt="salem working at speakeasy" /></div>
        <div className="photo-cont"><img className='gallery-photo' id='out-table-photo' src={salemOutTable} alt="salem seated outside" /></div>
        <div className="photo-cont"><img className='gallery-photo' id='teen-photo' src={salemTeen} alt="salem as a teen" /></div>
        <div className="photo-cont"><img className='gallery-photo' id='grandma-photo' src={salemGrandma} alt="salem with grandmother" /></div>
        <div className="photo-cont"><img className='gallery-photo' id='wall-jacket-photo' src={salemWallJacket} alt="salem pondering life" /></div>
        <div className="photo-cont"><img className='gallery-photo' id='no-jacket-photo' src={salemNoJacket} alt="salem thinking bout business" /></div>
      </div>
      <footer>Site designed by J. Bailey Developments</footer>
    </>
  )
}

export default Photo
