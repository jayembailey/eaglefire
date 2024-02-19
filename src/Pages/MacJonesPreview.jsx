import '../App.css'
import macFifty from '../assets/MAC10.pdf'
import { Link } from 'react-router-dom'

const MacJonesPreview = () => {
  return (
    <>
      <div>
        <div className="heading">
          <Link to='/'><h2>eaglefire productions</h2></Link>
          <Link to='/'><button id='drop-button'>Back</button></Link>
        </div>
        <iframe src={macFifty} title='Mac Jones Book 1 Preview'/>
      </div>
    </>
  )
}

export default MacJonesPreview
