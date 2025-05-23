import '../App.css'
import tuTen from '../assets/summaries/UF10.pdf'
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
          <div className="empty-div"></div>
          <Link to='/'><button id='drop-button'>Back</button></Link> 
        </div>
        <div className='download'>
          On mobile or having trouble viewing?<br/>Download the PDF <a href={tuTen} download={'TheUnfound10.pdf'} style={{textDecoration: 'underline'}}>here</a>
        </div>
        <iframe src={tuTen} title='The Unfound Preview'/>
      </div>
    </>
  )
}

export default UnfoundPreview
