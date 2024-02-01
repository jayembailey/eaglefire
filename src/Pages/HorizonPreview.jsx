import '../App.css'
import uhFifty from '../assets/UH10.pdf'
import { Link } from 'react-router-dom'

const HorizonPreview = () => {
  return (
    <>
      <div>
        <div className="heading">
          <h2>Eaglefire Productions</h2>
          <Link to='/'>
              <button id='drop-button'>Back</button>
          </Link>
        </div>
        <iframe src={uhFifty} title='Upon Horizon Preview'/>
      </div>
    </>
  )
}

export default HorizonPreview
