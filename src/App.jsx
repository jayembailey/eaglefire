import './App.css'
import horizonCover from './assets/horizon-cover.png'
import daisyCover from './assets/daisy-cover.png'
import macCover from './assets/mac-cover.png'
import unfoundCover from './assets/unfound-cover.jpg'
import angelCover from './assets/angel-cover.jpg'
import salemChild from './assets/salem-child.jpg'
// import Emailer from './Functions/emailer'
import { sendCustomEmail } from './Functions/Email'

import { useEffect, useState } from 'react'

function App() {
  const [fadeId, setFadeId] = useState('')
  const [messageSent, setMessageSent] = useState(false)
  const [navOn, setNavOn] = useState(false)
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

  const handleSendEmail = () => {
    // sendCustomEmail(details)
    setMessageSent(true)
  };

  const displayNav = () => {
    setNavOn(!navOn)
  }
  
  // useEffect(() => {
  //   const timeout = setInterval(() => {
  //     if (fadeId === '') {
  //       setFadeId('fade-out')
  //     }
  //   })
  // }, 2000)  

  return (
    <>
    {/* <div>
      <img className='coverImg' id={fadeId} src={daisyCover} alt="" />
    </div> */}
      <div className='body'>
        <div className="heading">
          <h2>Eaglefire Productions</h2>
          <button id='drop-button' onClick={displayNav}>
            <i className="fa-solid fa-bars-staggered"></i>
          </button>
        </div>
        {navOn ? 
        <header>
          <nav>
              <a id="navlink" href={'/mission'}>MISSION STATEMENT</a>
              <a id="navlink" href={'/about'}>ABOUT THE AUTHOR</a>
              <a id="navlink" href={'/charity'}>CHARITY T-SHIRTS</a>
              <a id="navlink" href={'/stroke'}>MY STROKE HISTORY</a>
              <a id="navlink" href={'/homeless'}>MY HOMELESS HISTORY</a>
          </nav>
        </header> : <></>}
        <div>
          <div className="name-wrapper">
              <h1>Salem Pflueger</h1>
          </div>
          <div className="intro-box">
            <div className="portrait">
              <img id='intro-portrait' src={salemChild} alt="" />
            </div>
            <div className='intro-text'>
              <p><span style={{'fontStyle' : 'italic'}}>Hi, I'm Salem...</span><br/>
              <span style={{'fontStyle' : 'italic', 'fontWeight' : 'bold'}}>Agents</span> and everyone, thanks for stopping by!
              Please, browse arond and take a look at the summary/first
              10 pages of my books below. Kindly contact me <a href="#contact-box" style={{'fontWeight' : 'bold'}}>here</a> for the
              first 50 pages. Welcome to <span style={{'fontStyle' : 'italic'}}>
              eaglefire productions... the readiness is all!</span>
              </p>
            </div>
          </div>
        </div>
        <div id="main">
            <div id="highlight-section">
                <div className="header-wrapper">
                    <h2 id="header-block"><p id="header-text">Books</p></h2>
                </div>
                <div id="highlight-box">
                    <div className="book-container">
                          <a href={"/daisypreview"}>
                            <img id="hl-item" src={daisyCover} alt='daisy and the dream defenders book cover' />
                            <p id="book-preview-link">Summary and First 10 Pages</p>
                          </a>
                        <h4>Daisy and the<br/>Dream Defenders</h4>
                    </div>
                    <div className="book-container">
                        <a href={'/horizonpreview'}>
                          <img id="hl-item" src={horizonCover} alt='upon horizon book cover' />
                            <p id="book-preview-link">Summary and First 10 Pages</p>
                        </a>
                        <h4>Upon Horizon</h4>
                    </div>
                    <div className="book-container">
                        <a href={'/angelpreview'}>
                          <img id="hl-item" src={angelCover} alt='the angel dilemma book cover' />
                            <p id="book-preview-link">Summary and First 10 Pages</p>
                        </a>
                        <h4>The Angel Dilemma</h4>
                    </div>
                    <div className="book-container">
                        <a href={'/unfoundpreview'}>
                          <img id="hl-item" src={unfoundCover} alt='the unfound book cover' />
                            <p id="book-preview-link">Summary and First 10 Pages</p>
                        </a>
                        <h4>The Unfound</h4>
                    </div>
                    <div className="book-container">
                        <a href={'macjonespreview'}>
                          <img id="hl-item" src={macCover} alt='mac jones book cover' />
                            <p id="book-preview-link">Summary and First 10 Pages</p>
                        </a>
                        <h4>Mac Jones<br/>The Plumber-Astronaut<br/>who Saved the World</h4>
                    </div>
                </div>
            </div>
            <p id='quote'>Unto the breach, dear friends, once more...</p>
            <div id="contact-section">
                <div className="header-wrapper">
                    <h2 id="header-block" className="contact-header"><p id="header-text">Contact</p></h2>
                </div>
                <div className="form-contact-box" id='contact-box'>
                    {!messageSent ? <div className="message-form">
                        <h3>Leave a Comment</h3>
                        <div id='contact-form'>
                            <div id="name-box">
                                <div id="first-input">
                                    <label htmlFor="first_name">First Name</label>
                                    <input 
                                      type="text"
                                      value={details.first_name}
                                      onChange={handleDetailsChange}
                                      name="first_name"
                                      id="first_name"
                                      placeholder="First Name" />
                                </div>
                                <div id="last-input">
                                    <label htmlFor="last_name">Last Name</label>
                                    <input
                                      type="text"
                                      value={details.last_name}
                                      onChange={handleDetailsChange}
                                      name="last_name"
                                      id="last_name"
                                      placeholder="Last Name" />
                                </div>
                            </div>
                            <label htmlFor="subject">Subject</label>
                            <input
                              type="text"
                              value={details.subject}
                              onChange={handleDetailsChange}
                              name="subject"
                              id="subject"
                              placeholder="Subject" />
                            <label htmlFor="reply_to">Email</label>
                            <input
                              type="email"
                              value={details.reply_to}
                              onChange={handleDetailsChange}
                              name="reply_to"
                              id="reply_to"
                              placeholder="Email" />
                            <label htmlFor="message">Message</label>
                            <textarea
                              name="message"
                              value={details.message}
                              onChange={handleDetailsChange}
                              id="message"
                              cols="30"
                              rows="10"
                              placeholder="Tell me your story...">
                            </textarea>
                            <button
                              id="submit-button" type="button"
                              onClick={handleSendEmail}>Send
                            </button>
                        </div>
                    </div>
                    : 
                     <h3 className='message-sent'>Message sent. <br/><br/>Thanks for reaching out!</h3>}
                </div>
            </div>
          </div>
      </div>
    </>
  )
}

export default App