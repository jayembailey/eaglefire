import './App.css'
import horizonCover from './assets/horizon-cover.png'
import daisyCover from './assets/daisy-cover.png'
import macCover from './assets/mac-cover.png'
import unfoundCover from './assets/unfound-cover.jpg'
import angelCover from './assets/angel-cover.jpg'
import amoebaCover from './assets/amoeba-cover.png'
import salemSeated from './assets/salem-pics/seated.jpg'
import salemOutTable from './assets/salem-pics/outside-table.jpg'

import efpLogo from './assets/EFP_logo.jpg'
import Video from './assets/salemmarch2024.mov'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import { sendCustomEmail } from './Functions/Email'
import { useEffect, useState } from 'react'

function App() {
  const [fadeId, setFadeId] = useState(window.sessionStorage.getItem('fadeId'))
  const [messageSent, setMessageSent] = useState(false)
  const [details, setDetails] = useState({
    subject: "",
    message: "",
    reply_to: "",
    first_name: "",
    last_name: "",
  });

  console.log(`fade id = ${fadeId}`)

  const handleDetailsChange = (e) => {
    const {name, value} = e.target;

    setDetails((prevDetails) => {
      return {
        ...prevDetails,
        [name]: value,
      };
    });
  };

  const handleSendEmail = (e) => {
    e.preventDefault()
    sendCustomEmail(details)
    setMessageSent(true)
  };
  
  useEffect(() => {
    fadeId ? console.log('youve been here before!') : setFadeId('fade-out')
  }, []);

  useEffect(() => {
    window.sessionStorage.setItem('fadeId', fadeId);
  }, [fadeId]);

  return (
    <>
    <div className='coverContainer' id={fadeId}>
      <img className='coverImg' src={efpLogo} alt="eaglefire productions logo" />
    </div>
      <div className='body'>
        <div className="heading">
          <div className='empty-div'></div>
          <Link to={'/'}>
            <img className='header-logo' src={efpLogo} alt="eaglefire productions logo" />
          </Link>
          <div className="social-box">
            <Link to={'https://www.linkedin.com/company/eaglefire-productions/'}><i className="fa-brands fa-linkedin fa-xl" style={{color: '#0074cc'}}></i></Link>
            <Link to={'https://www.instagram.com/eaglefireproductions/'}><i className="fa-brands fa-instagram fa-xl" style={{color: '#ff0088'}}></i></Link>
            <Link to={'https://www.facebook.com/eaglefire.productions'}><i className="fa-brands fa-facebook fa-xl" style={{color: '#0040ff'}}></i></Link>
          </div>
        </div>
        <header>
          <nav>
              {/* <Link to='/mission' id="navlink">MISSION STATEMENT</Link> */}
              <Link to='/about' id="navlink">ABOUT THE AUTHOR</Link>
              {/* <Link to='/charity' id="navlink">CHARITY T-SHIRTS</Link>
              <Link to='/stroke' id="navlink">DAISY ORIGIN</Link>
              <Link to='/homeless' id="navlink">ANGEL ORIGIN</Link> */}
          </nav>
        </header>
        <div>
          <div className="name-wrapper">
              <h1>Salem Pflueger</h1>
          </div>
          <div className="intro-box">
            <div className="portrait">
              <img id='intro-portrait' src={salemOutTable} alt="photo of Salem Pflueger" />
              {/* <Link className='photo-link' to='/photo'>actor photo gallery</Link> */}
            </div>
            <div className='intro-text'>
              <p><span style={{'fontStyle' : 'italic'}}>Hi, I'm Salem...</span><br/>
              <span style={{'fontWeight' : 'bold'}}>Agents</span> and everyone, thanks for stopping by!
              Please, browse around and take a look at the summary/first
              10 pages of my books below. Kindly contact me <HashLink to={"/#contact-box"} style={{'fontWeight' : 'bold', 'textDecoration': 'underline'}}>here</HashLink> for the
              first 50 pages. Welcome to eaglefire productions... <span style={{'fontStyle' : 'italic'}}>
              the readiness is all!</span>
              </p>
            </div>
          </div>
          <div id='video-section'>
            {/* <video id='video-intro' width='80%' height='auto' autoPlay controls>
              <source src={Video} type='video/mp4' />
            </video> */}
            
          </div>
        </div>
        <div id="main">
            <div id="highlight-section">
                <div className="header-wrapper">
                    <h2 id="header-block">Books</h2>
                </div>
                <div id="highlight-box">
                    <div className='book-container'>
                      {/* <h4 id='new-book'>In progress!<br/>Click below for summary and animation</h4> */}
                        <Link to='/amoebapreview'>
                          <img id="hl-item" src={amoebaCover} alt='daisy and the dream defenders book cover' />
                          <p id="new-preview">Summary and Animation</p>
                        </Link>
                        <h4><span id='new-book'>In Progress!</span><br/>Adventures of the <br/>American Amoebas!</h4>
                    </div>
                    <div className="book-container">
                      <Link to='/daisypreview'>
                        <img id="hl-item" src={daisyCover} alt='amoebas book cover' />
                        <p id="book-preview-link">Summary and First 10 Pages</p>
                      </Link>
                      <h4>Daisy and the<br/>Dream Defenders</h4>
                    </div>
                    <div className="book-container">
                      <Link to='/horizonpreview'>
                        <img id="hl-item" src={horizonCover} alt='upon horizon book cover' />
                        <p id="book-preview-link">Summary and First 10 Pages</p>
                      </Link>
                      <h4>Upon Horizon</h4>
                    </div>
                    <div className="book-container">
                      <Link to='/angelpreview'>
                        <img id="hl-item" src={angelCover} alt='the angel dilemma book cover' />
                          <p id="book-preview-link">Summary and First 10 Pages</p>
                      </Link>
                      <h4>The Angel Dilemma</h4>
                    </div>
                    <div className="book-container">
                      <Link to='/unfoundpreview'>
                        <img id="hl-item" src={unfoundCover} alt='the unfound book cover' />
                          <p id="book-preview-link">Summary and First 10 Pages</p>
                      </Link>
                      <h4>The Unfound</h4>
                    </div>
                    <div className="book-container">
                      <Link to='/macjonespreview'>
                        <img id="hl-item" src={macCover} alt='mac jones book cover' />
                          <p id="book-preview-link">Summary and First 10 Pages</p>
                      </Link>
                      <h4>Mac Jones<br/>The Plumber-Astronaut<br/>who Saved the World</h4>
                    </div>
                </div>
            </div>
            <p id='quote'>Unto the breach, dear friends, once more...</p>
            <div id="contact-section">
                <div className="header-wrapper">
                    <h2 id="header-block">Contact</h2>
                </div>
                <div className="form-contact-box" id='contact-box'>
                    {!messageSent ? <div className="message-form">
                        <h3>Leave a Comment</h3>
                        <form id='contact-form' onSubmit={handleSendEmail}>
                            <div id="name-box">
                                <div id="name-input">
                                    <label htmlFor="first_name">First Name</label>
                                    <input 
                                      type="text"
                                      value={details.first_name}
                                      onChange={handleDetailsChange}
                                      name="first_name"
                                      id="first_name"
                                      placeholder="First Name" 
                                      required={true} />
                                </div>
                                <div id="name-input">
                                    <label htmlFor="last_name">Last Name</label>
                                    <input
                                      type="text"
                                      value={details.last_name}
                                      onChange={handleDetailsChange}
                                      name="last_name"
                                      id="last_name"
                                      placeholder="Last Name" 
                                      required={true}/>
                                </div>
                            </div>
                            <label htmlFor="subject">Subject</label>
                            <input
                              type="text"
                              value={details.subject}
                              onChange={handleDetailsChange}
                              name="subject"
                              id="subject"
                              placeholder="Subject" 
                              required={true}/>
                            <label htmlFor="reply_to">Email</label>
                            <input
                              type="email"
                              value={details.reply_to}
                              onChange={handleDetailsChange}
                              name="reply_to"
                              id="reply_to"
                              placeholder="Email"
                              required={true}/>
                            <label htmlFor="message">Message</label>
                            <textarea
                              name="message"
                              value={details.message}
                              onChange={handleDetailsChange}
                              id="message"
                              cols="30"
                              rows="10"
                              placeholder="Tell me your story..."
                              required={true}>
                            </textarea>
                            <button
                              id="submit-button" type="submit"
                              >Send
                            </button>
                        </form>
                    </div>
                    : 
                     <h3 className='message-sent'>Message sent. <br/><br/>Thanks for reaching out!</h3>}
                </div>
            </div>
          </div>
          <footer>Site designed by J. Bailey Developments</footer>
      </div>
    </>
  )
}

// You will notice a lot of things commented out. Client wanted a lot of things deleted,
// but I chose to simply comment them out in case anyone changed their minds.
// The original site took a lot of work to format and get together, so I, the developer,
// am reluctant to simply delete it. If you ever need to lighten things useParams, just
// delete the commented sections and the css items to which they refer. Happy coding!


export default App