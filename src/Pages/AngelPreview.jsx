import '../App.css'
import adFifty from '../assets/AD10.pdf'
import { Link } from 'react-router-dom'

const AngelPreview = () => {
  return (
    <>
      <div>
        <div className="heading">
          <h2>Eaglefire Productions</h2>
          <Link to='/'>
              <button id='drop-button'>Back</button>
          </Link>
        </div>
        <iframe src={adFifty} title='The Angel Dilemma Preview'/>
      </div>
    </>
  )
}

export default AngelPreview
