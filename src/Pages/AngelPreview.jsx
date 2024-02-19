import '../App.css'
import adFifty from '../assets/AD10.pdf'
import { Link } from 'react-router-dom'

const AngelPreview = () => {
  return (
    <>
      <div>
        <div className="heading">
          <Link to='/'><h2>eaglefire productions</h2></Link>
          <Link to='/'><button id='drop-button'>Back</button></Link>
        </div>
        <iframe src={adFifty} title='The Angel Dilemma Preview'/>
      </div>
    </>
  )
}

export default AngelPreview
