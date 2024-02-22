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
          <div className="empty-div"></div>      
          <Link to='/'><button id='drop-button'>Back</button></Link>
        </div>
        <div className='download'>
          Having trouble viewing?<br/>Download the PDF <a href={ddFifty} download={'Daisy10.pdf'} style={{textDecoration: 'underline'}}>here</a>
        </div>
        <iframe src={ddFifty} title='Daisy and the Dream Defenders Preview'/>
      </div>
    </>
  )
}

export default DaisyPreview
