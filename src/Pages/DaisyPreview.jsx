import '../App.css'
import ddFifty from '../assets/DD10.pdf'
import { Link } from 'react-router-dom'

const DaisyPreview = () => {
  return (
    <>
      <div>
        <div className="heading">
          <Link to='/'><h2>eaglefire productions</h2></Link>
          <Link to='/'><button id='drop-button'>Back</button></Link>
        </div>
        <iframe src={ddFifty} title='Daisy and the Dream Defenders Preview'/>
      </div>
    </>
  )
}

export default DaisyPreview
