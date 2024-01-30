import '../App.css'
import HorizonFifty from './HorizonFifty'

const HorizonPreview = () => {
  return (
    <>
      <div>
            <header>
                <nav>
                    <a id="navlink" href="/about.html">ABOUT</a>
                    <a id="navlink" href="/works.html">WORKS</a>
                    <a id="navlink" href="/contact.html">CONTACT</a>
                </nav>
            </header>
            <h1>Upon Horizon</h1>
            <hr />
            <h2 className='summary-header'>Summary and Preview</h2>
            <HorizonFifty/>
        </div>
    </>
  )
}

export default HorizonPreview
