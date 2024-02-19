import '../App.css'
import uhFifty from '../assets/UH10.pdf'
import { Link } from 'react-router-dom'
import efpLogo from '../assets/EFP_logo.jpg'

const HorizonPreview = () => {
  return (
    <>
      <div>
        <div className="heading">
          <Link to='/'>
            <img src={efpLogo} className='header-logo' alt="" />
          </Link>
          <Link to='/'><button id='drop-button'>Back</button></Link>
        </div>
        <iframe src={uhFifty} title='Upon Horizon Preview'/>
      </div>
    </>
  )
}

export default HorizonPreview
