import '../App.css'
import ddFifty from '../assets/DD10.pdf'
import { Link } from 'react-router-dom'
import efpLogo from '../assets/EFP_logo.jpg'

const DaisyPreview = () => {
  return (
    <>
      <div>
        <div className="heading">
          <Link to='/'>
            <img src={efpLogo} className='header-logo' alt="" />
          </Link>          
          <Link to='/'><button id='drop-button'>Back</button></Link>
        </div>
        <iframe src={ddFifty} title='Daisy and the Dream Defenders Preview'/>
      </div>
    </>
  )
}

export default DaisyPreview
