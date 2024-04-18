import '../App.css'
import { Link } from 'react-router-dom'
import efpLogo from '../assets/EFP_logo.jpg'
import amoebaVid from '../assets/AmoebaAnimation.mp4'

const AngelPreview = () => {
  return (
    <>
      <div className="heading">
        <Link to='/'>
          <img src={efpLogo} className='header-logo' alt="" />
        </Link>
        <div className="empty-div"></div>
        <Link to='/' id='drop-wrapper'><button id='drop-button'>Back</button></Link>
      </div>
      <div className="">
      <video id='video-aboeba' width='80%' height='auto' autoPlay muted controls>
        <source src={amoebaVid} type='video/mp4' />
      </video>
      </div>
    </>
  )
}

export default AngelPreview
