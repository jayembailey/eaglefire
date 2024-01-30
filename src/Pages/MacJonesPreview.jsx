import '../App.css'
import MacJonesFifty from './MacJonesFifty'

const MacJonesPreview = () => {
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
        <h1 style={{marginBottom:1+'rem'}}>Mac Jones</h1>
        <h2>the Plumber-Astronaut who Saved the World</h2>
        <h2>Book 1</h2>
        <hr />
        <h2 className='summary-header'>Summary and Preview</h2>
        <MacJonesFifty/>
      </div>
    </>
  )
}

export default MacJonesPreview
