import React from 'react'
import { Helmet } from 'react-helmet'

const AboutUs = () => {

    const style1 = {
        width : "50%"
    }
    const style2 = {
        textAlign:"center"
    }
  return (
    <div>
        <Helmet>
        <link rel="stylesheet" href="assets/css/aboutUs.css"/>
        </Helmet>
      <div class="about-section">
  <h1>About Us</h1>
  
  <p>Grownited is an open-source organisation for individuals and groups that think unique. Ideas are valuable to individuals, and we know that you have spent energy just thinking it up. We believe that ideas should not sit idle, so we do the work for them.</p>

  <p>Grownited is a start-up cultivating firm where we grow and nurture ideas into a tangible reality. We endeavour to build new things with you, to build a new, modern, futuristic India. It is a task to bring together a concept and the people to work for it, to make it an actuality.</p>

  <p>Working in partnership with idea cultivators, Grownited is oriented to become a hub of creativity and coherence woven into one. We believe in the conviction of entrepreneurship by the youth being the future. And we wish to be a part of this future, doing our piece in promoting our beliefs.</p>

  <p>In these beliefs is another – the future is ours, and it is, thus, our responsibility to nurture the future. In today’s global scenario, nothing matters more than experience. For this, we provide internships in over 15 categories for individuals from age 14-26.
  </p>
</div>

<h2 style={style2}>Our Team</h2>
<div class="row">
  <div class="column">
    <div class="card">
      <img src="assets/images/face18.jpg" alt="Jane"style={style1}/>
      <div class="container">
        <h2>Jane Doe</h2>
        <p class="title">CEO & Founder</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>jane@example.com</p>
        <p><button class="button">Contact</button></p>
      </div>
    </div>
  </div>

  <div class="column">
    <div class="card">
      <img src="assets/images/face16.jpg" alt="Mike" style={style1}/>
      <div class="container">
        <h2>Mike Ross</h2>
        <p class="title">Art Director</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>mike@example.com</p>
        <p><button class="button">Contact</button></p>
      </div>
    </div>
  </div>

  <div class="column">
    <div class="card">
      <img src="assets/images/face23.jpg" alt="John" style={style1}/>
      <div class="container">
        <h2>John Doe</h2>
        <p class="title">Designer</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>john@example.com</p>
        <p><button class="button">Contact</button></p>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default AboutUs
