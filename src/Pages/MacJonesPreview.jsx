import '../App.css'
import macTen from '../assets/summaries/MAC10.pdf'
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
          On mobile or having trouble viewing?<br/>Download the PDF <a href={macTen} download={'MacJones10.pdf'} style={{textDecoration: 'underline'}}>here</a>
        </div>
        <iframe src={macTen} title='Mac Jones Book 1 Preview'/>
      </div>
    </>
  )
}

export default MacJonesPreview
