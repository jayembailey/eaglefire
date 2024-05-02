import '../App.css'
import { Link } from 'react-router-dom'
import efpLogo from '../assets/EFP_logo.jpg'
import amoebaVid from '../assets/AmoebaAnimation1.mp4'

const AngelPreview = () => {
  return (
    <>
      <div className="heading">
        <Link to='/'>
          <img src={efpLogo} className='header-logo' alt="" />
        </Link>
        <div className="empty-div"></div>
        <Link to='/' id='drop-wrapper'><button id='drop-button'>Back</button></Link>
      </div>
      <div className="">
        <video id='video-aboeba' width='80%' height='auto' autoPlay controls>
          <source src={amoebaVid} type='video/mp4' />
        </video>
      </div>
      <div className="summary">
        <h1>Adventures of the American Amoebas!</h1>
        <h3 id='amoeba-sub'>A new reality ... wait, <span className="ital">what's reality!?</span>
        <br />By
        <br />S. Pflueger</h3>
        <h2>summary</h2>
        <p className="paragraph">
          Once upon a time, two amoebas were living a quiet, simple amoeba life in their suburban
          petri dish. Then, one day, they suddenly became self-aware and began talking!
        </p>
        <p className="paragraph">
          Jack and Jill became fast friends and discovered a mutual passion for adventure. Jack
          dreams of being a Hollywood stuntman and Jill wants to go to college. But first, they will have to
          learn words, what words are and how to use them! Together—they’re dreamers, but also realists,
          straight-forward common-sense types, but also philosophically inclined, passionate risk takers
          and always-happy amoeba rebels! Perhaps the greatest buddy story ever told!
        </p>
        <p className="paragraph">
          From <span className="ital">eaglefire productions</span>, introducing the graphic novel series — Adventures of the
          American Amoebas! — revealed weekly in real-time on <Link to={'https://www.instagram.com/eaglefireproductions/'} style={{'textDecoration': 'underline'}}>Instagram</Link> and <Link to={'https://www.facebook.com/eaglefire.productions'} style={{'textDecoration': 'underline'}}>Facebook</Link>. 
          The episodic excerpts of two upbeat, hopeful and otherwise clueless amoebas who have dreams—big dreams!
        </p>
        <p className="paragraph">
          After developing their unique friendship amidst a predominately introverted amoeba
          society—jack and jill decide to break out from their Petry dish, hit the road, get an apartment
          together and live their lives full-tilt boogie!
        </p>
        <p className="paragraph">
          Apart from their primary goals, they’re both excited to find new hobbies. Jill is
          considering Olympic downhill skiing and computer design, while Jack is interested in vacuum
          cleaners and automotive parts. So much to do...where to begin!? They want to know what every
          self-aware amoeba wants to know: <span className="ital">Who am I... and what’s my purpose in life?</span>
        </p>
      </div>
    </>
  )
}

export default AngelPreview
