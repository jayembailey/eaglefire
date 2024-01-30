import '../App.css'
import AngelFifty from './AngelFifty'

const AngelPreview = () => {
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
            <h1>The Angel Dilemma</h1>
            <hr />
            <h2 className='summary-header'>Summary and Preview</h2>
            <AngelFifty/>
        </div>
    </>
  )
}

export default AngelPreview
