import '../App.css'
import macFifty from '../assets/MAC10.pdf'
import { Link } from 'react-router-dom'
import efpLogo from '../assets/EFP_logo.jpg'

const MacJonesPreview = () => {
  return (
    <>
      <div>
        <div className="heading">
          <Link to='/'>
            <img src={efpLogo} className='header-logo' alt="" />
          </Link>
          <div className="empty-div"></div>
          <Link to='/'><button id='drop-button'>Back</button></Link>
        </div>
        <div className='download'>
          Having trouble viewing?<br/>Download the PDF <a href={macFifty} download={'MacJones10.pdf'} style={{textDecoration: 'underline'}}>here</a>
        </div>
        <iframe src={macFifty} title='Mac Jones Book 1 Preview'/>
      </div>
    </>
  )
}

export default MacJonesPreview
