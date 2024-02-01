import React from 'react'
import shirt from '../../assets/shirt.jpeg'
import { Link } from 'react-router-dom'

const Charity = () => {
  return (
    <>
      <div className="body">
        <header>
          <nav>
            <Link to='/' id="navlink">HOME</Link>
            <Link to='/mission' id="navlink">MISSION STATEMENT</Link>
            <Link to='/about' id="navlink">ABOUT THE AUTHOR</Link>
            <Link to='/stroke' id="navlink">MY STROKE HISTORY</Link>
            <Link to='/homeless' id="navlink">MY HOMELESS HISTORY</Link>
          </nav>
        </header>
        <div className="name-wrapper">
            <h1 style={{'color': 'rgb(188, 147, 22)'}}>Charities</h1>
        </div>
        <p className="paragraph">
          Allow me to say a few words about the charities to which I’m committed and what they mean to
          me. I grew up surrounded by books—books that offered entertainment but also insights and
          human understanding. It breaks my heart to think of underprivileged kids not having reading and
          writing resources.
        </p>
        <p className="paragraph">
          I’m grateful that there are many wonderful charities committed to helping children. What I feel
          most strongly about are the kids in the low-income communities who are otherwise without or
          don’t have access to books—and enough teachers.
        </p>
        <p className="paragraph">
          I lived in NYC for years, I lived in the projects for six months and was part of a wonderful group
          dedicated to helping those kids living in the projects—helping, supporting and encouraging
          them. I functioned as a big brother to two young men. It was a profound experience. It opened
          me to a world I had only imagined—it inspired me and it changed me forever.
        </p>
        <p className="paragraph">
          We can really help these kids, the kids born into a challenging world are often lacking in
          educational resources and support. We can help them take a critically important step toward
          becoming the best they can be with increased reading and writing development.
        </p>
        <p className="paragraph">
          To that, the non-profit organization, <span className="ital">First Book</span>, focuses its efforts on those underprivileged kids
          and communities, offering not only books and reading materials but teachers and volunteers,
          both on-line and in person.
        </p>
        <p className="paragraph">
          Another issue I feel very strongly about is the staggering suicide rate of our soldiers. The
          numbers are almost impossible to comprehend. It’s estimated that 20 soldiers take their life every
          day...<span className="ital">every day.</span>
        </p>
        <p className="paragraph">
          I’ve worked with a few therapists over the years to help me understand, process and move
          through whatever mental/emotional/psychological roadblocks I was dealing with. Those were
          very important moments of my journey, a process that helped me understand the feelings or
          behavior that was holding me back, limiting me from being the best I can be.
        </p>
        <p className="paragraph">
          I have absolutely no idea what being a soldier is, what being a soldier in combat is...but I know
          what’s it like to be buried in a crippling depression that seems to suggest there’s no way out, no
          way through to the other side of love and purpose. I’m painfully familiar with that feeling and
          experience. I was lucky, I had resources. Some don’t.
        </p>
        <p className="paragraph">
          Thankfully, there are many great charities supporting our soldiers—what resonates the most for
          me is a non-profit group that is exclusively dedicated to providing therapy and counseling
          resources. <span className="ital">The Headstrong Project</span> does just that, providing therapists and counselors who are
          devoted to helping soldiers work through the unimaginable stresses of combat. Please, let’s help
          to expand the mental health resources available to them—steadfast support that allows them to
          process, understand and heal from the experiences so few of us can even imagine. It’s not
          political. <span className="ital">It’s human.</span>
        </p>
        <p className="paragraph">
          Having lived in and seen how terribly difficult the projects can be for children, having personally
          experienced severe depression, I’m compelled to help these causes. While many excellent groups
          and efforts are moving forward, more resources and support are always needed.
        </p>
        <p className="paragraph">
          Right out of the gate, it’s deeply important to me that <span className="ital">eaglefire productions</span> be founded on a
          commitment to supporting and helping others. I’m driven to build something that—apart from
          writing, acting, directing and producing engaging stories and films—is also known as being
          socially conscious and steadfast in raising funds for some of our most important causes.
        </p>
        <p className="paragraph">
          To that end, I’ve reached out to the charity fund-raising department of <span className="ital">Custom Ink</span> and have set a
          modest goal of 25 <span className="ital">eaglefire</span> productions t-shirts—with all proceeds going to the charities. Below
          the company logo it will simply read—<span className="ital">Support the Strong</span>. Link here: Custom Ink
        </p>
        <img src={shirt} id='shirt' alt="" />
        <p className="paragraph">
          If you would rather contribute directly to one of the charities—I’ll leave the links here:
        </p>
        <p className="paragraph" style={{'textAlign':'center'}}>
          <a href="https://www.firstbook.org">First Book</a> — for children’s books/reading/writing
        </p>
        <p className="paragraph" style={{'textAlign':'center'}}>
          <a href="https://www.theheadstrongproject.org">The Headstrong Project</a> — for soldiers' mental health
        </p>
        <p className="paragraph">
          <span className="ital">Please...and thank you.</span>
        </p>
      </div>
    </>
  )
}

export default Charity
