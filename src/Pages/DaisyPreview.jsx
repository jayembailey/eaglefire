import '../App.css'
import DaisyFifty from './DaisyFifty'

const DaisyPreview = () => {
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
            <h1>Daisy and the Dream Defenders</h1>
            <hr />
            <h2 className='summary-header'>Summary and Preview</h2>
            <DaisyFifty/>
        </div>
    </>
  )
}

export default DaisyPreview
