import '../App.css'
import ddTen from '../assets/summaries/DD10.pdf'
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
          On mobile or having trouble viewing?<br/>Download the PDF <a href={ddTen} download={'Daisy10.pdf'} style={{textDecoration: 'underline'}}>here</a>
        </div>
        <iframe src={ddTen} title='Daisy and the Dream Defenders Preview'/>
      </div>
    </>
  )
}

export default DaisyPreview
