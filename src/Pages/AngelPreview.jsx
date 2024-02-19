import '../App.css'
import adFifty from '../assets/AD10.pdf'
import { Link } from 'react-router-dom'
import efpLogo from '../assets/EFP_logo.jpg'

const AngelPreview = () => {
  return (
    <>
      <div>
        <div className="heading">
          <Link to='/'>
            <img src={efpLogo} className='header-logo' alt="" />
          </Link>
          <Link to='/'><button id='drop-button'>Back</button></Link>
        </div>
        <iframe src={adFifty} title='The Angel Dilemma Preview'/>
      </div>
    </>
  )
}

export default AngelPreview
