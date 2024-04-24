import '../App.css'
import adTen from '../assets/summaries/AD10.pdf'
import { Link } from 'react-router-dom'
import efpLogo from '../assets/EFP_logo.jpg'

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
      <div className='download'>
        On mobile or having trouble viewing?<br/>Download the PDF <a href={adTen} download={'AngelDilemma10.pdf'} style={{textDecoration: 'underline'}}>here</a>
      </div>
      <iframe src={adTen} title='The Angel Dilemma Preview'/>
    </>
  )
}

export default AngelPreview
