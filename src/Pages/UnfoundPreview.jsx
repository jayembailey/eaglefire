import '../App.css'
import tuFifty from '../assets/TU10.pdf'
import { Link } from 'react-router-dom'

const UnfoundPreview = () => {
  return (
    <>
      <div>
        <div className="heading">
          <Link to='/'><h2>eaglefire productions</h2></Link>
          <Link to='/'><button id='drop-button'>Back</button></Link> 
        </div>
        <iframe src={tuFifty} title='The Unfound Preview'/>
      </div>
    </>
  )
}

export default UnfoundPreview
