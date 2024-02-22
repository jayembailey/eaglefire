import './App.css'
import horizonCover from './assets/horizon-cover.png'
import daisyCover from './assets/daisy-cover.png'
import macCover from './assets/mac-cover.png'
import unfoundCover from './assets/unfound-cover.jpg'
import angelCover from './assets/angel-cover.jpg'
import salemChild from './assets/salem-child.jpg'
import efpLogo from './assets/EFP_logo.jpg'
import { Link } from 'react-router-dom'
import { sendCustomEmail } from './Functions/Email'

import { useEffect, useState } from 'react'

function App() {
  const [fadeId, setFadeId] = useState('')
  const [messageSent, setMessageSent] = useState(false)
  const [details, setDetails] = useState({
    subject: "",
    message: "",
    to_email: "jbaileydevelopments@gmail.com",
    reply_to: "",
    first_name: "",
    last_name: "",
  });

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
  
  // useEffect(() => {
  //     if (fadeId === '') {
  //       setFadeId('fade-out')
  //     }
  // }, [])  

  return (
    <>
    {/* <div>
      <img className='coverImg' id={fadeId} src={efpLogo} alt="eaglefire productions logo" />
    </div> */}
      <div className='body'>
        <div className="heading">
          <div className='empty-div'></div>
          <Link to={'/'}>
            <img className='header-logo' src={efpLogo} alt="eaglefire productions logo" />
          </Link>
          <div className="social-box">
            <Link to={'https://www.instagram.com/salempflueger/'}><i className="fa-brands fa-instagram fa-xl" style={{color: '#ff0088'}}></i></Link>
            <Link to={'https://www.facebook.com/salem.pflueger'}><i className="fa-brands fa-facebook fa-xl" style={{color: '#0040ff'}}></i></Link>
          </div>
        </div>
        <header>
          <nav>
              <Link to='/mission' id="navlink">MISSION STATEMENT</Link>
              <Link to='/about' id="navlink">ABOUT THE AUTHOR</Link>
              <Link to='/charity' id="navlink">CHARITY T-SHIRTS</Link>
              <Link to='/stroke' id="navlink">DAISY ORIGIN</Link>
              <Link to='/homeless' id="navlink">ANGEL ORIGIN</Link>
          </nav>
        </header>
        <div>
          <div className="name-wrapper">
              <h1>Salem Pflueger</h1>
          </div>
          <div className="intro-box">
            <div className="portrait">
              <img id='intro-portrait' src={salemChild} alt="photo of Salem Pflueger" />
            </div>
            <div className='intro-text'>
              <p><span style={{'fontStyle' : 'italic'}}>Hi, I'm Salem...</span><br/>
              <span style={{'fontStyle' : 'italic', 'fontWeight' : 'bold'}}>Agents</span> and everyone, thanks for stopping by!
              Please, browse around and take a look at the summary/first
              10 pages of my books below. Kindly contact me <Link href="#contact-box" style={{'fontWeight' : 'bold'}}>here</Link> for the
              first 50 pages. Welcome to <span style={{'fontStyle' : 'italic'}}>
              eaglefire productions... the readiness is all!</span>
              </p>
            </div>
          </div>
        </div>
        <div id="main">
            <div id="highlight-section">
                <div className="header-wrapper">
                    <h2 id="header-block">Books</h2>
                </div>
                <div id="highlight-box">
                    <div className="book-container">
                          <Link to='/daisypreview'>
                            <img id="hl-item" src={daisyCover} alt='daisy and the dream defenders book cover' />
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

export default App
