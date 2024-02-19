import '../App.css'
import tuFifty from '../assets/TU10.pdf'
import { Link } from 'react-router-dom'
import efpLogo from '../assets/EFP_logo.jpg'

const UnfoundPreview = () => {
  return (
    <>
      <div>
        <div className="heading">
          <Link to='/'>
            <img src={efpLogo} className='header-logo' alt="" />
          </Link>
          <Link to='/'><button id='drop-button'>Back</button></Link> 
        </div>
        <iframe src={tuFifty} title='The Unfound Preview'/>
      </div>
    </>
  )
}

export default UnfoundPreview
