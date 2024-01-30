import '../App.css'
import UnfoundFifty from './UnfoundFifty'

const UnfoundPreview = () => {
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
            <h1>The Unfound</h1>
            <hr />
            <h2 className='summary-header'>Summary and Preview</h2>
            <UnfoundFifty/>
        </div>
    </>
  )
}

export default UnfoundPreview
