
import './App.css';
import {React, useState, useRef, useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import {Navbar, Container, Nav, Carousel, NavDropdown} from 'react-bootstrap'
import { FaLinkedin, FaGithub, FaEnvelope, FaBars } from "react-icons/fa"

import carousel from './carousel.jpeg'
import photo from './photo.jpg'

function App() {
 
  const aboutRef = useRef()
  const workRef = useRef()
  const scrollDown = () => {
    window.scrollTo({
      top: aboutRef.current.offsetTop,
      behavior: 'smooth',
    });
  };
 
  const scrollWork = () => {
    window.scrollTo({
      top: workRef.current.offsetTop,
      behavior: 'smooth',
    });
  };

  return (
    <>
      
   
  <Navbar bg="light" variant="light">
    <Container>
    <Navbar.Brand href="#home">
      <h1>Yulia Glushenko.</h1>
      <h5>Full Stack Developer.</h5>
     
    </Navbar.Brand>
    <Nav className="ml-auto" align="right">
      <Nav.Link onClick={scrollDown}>About</Nav.Link>
      <Nav.Link onClick={scrollWork}>Resume</Nav.Link>
      <Nav.Link href="#pricing">Work</Nav.Link>
      
      <NavDropdown title="Contact" id="basic-nav-dropdown">
          <NavDropdown.Item href="mailto:yulia.glushenko@gmail.com">Email <FaEnvelope/></NavDropdown.Item>
          <NavDropdown.Item href="https://www.linkedin.com/in/yulia-glushenko/" target='_blank'>LinkedIn <FaLinkedin/></NavDropdown.Item>
        </NavDropdown>

      {/* <Nav.Link href="#pricing">Contact</Nav.Link> */}
    </Nav>
    </Container>
  </Navbar>
    
     
      <Carousel fade>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src={carousel}
      alt="First slide"
    />
    <Carousel.Caption style={{  top: '40%', textAlign:'center', color: 'black'}}>
      <h1> HTML || CSS || JavaScript || Python</h1>
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item  interval={1000}>
    <img
      className="d-block w-100"
      src={carousel}
      alt="Second slide"
    />
    <Carousel.Caption style={{ top: '40%', color: 'black'}}>
      <h1> React.js || Node.js || Express || Django  </h1>
      
    </Carousel.Caption>
  </Carousel.Item >
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src={carousel}
      alt="Third slide"
    />

    <Carousel.Caption style={{  top: '40%', color: 'black'}}>
      <h1>Bootstrap || Material UI </h1>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src={carousel}
      alt="Fourth slide"
    />

    <Carousel.Caption style={{  top: '40%', color: 'black'}}>
      <h1> MongoDB || PostgreSQL </h1>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        <Container>
          <div className='row' style={{ marginTop: 100}}>
            <div className='col-sm-9' ref={aboutRef} style={{marginTop: 20}}>
            <h1>Hello!</h1>
            <p>My name is Yulia and I am a full stack developer.</p>
          
            With 10 years of experience in hospitality, I have strong foundation in communication,
            ability to work in teams efficiently and have also learned how to lead one. 
            I am well organized, very passionate about my field and a highly motivated person with attention to details.
            My mission is to contribute my knowledge and skills to new projects that make a difference - one line of code at a time. 
            Interested in both front-end and back-end spectrum and working on ambitious projects with positive people.
            <p style={{marginTop: 20}}>
            Let's work together! <a href="mailto:yulia.glushenko@gmail.com"> <FaEnvelope/></a> < a href="https://www.linkedin.com/in/yulia-glushenko/"> <FaLinkedin/></a>
            < a href="https://github.com/YuliaG1989"> <FaGithub/></a>
            </p>
            </div>
              <div className='col-sm-3'>
              <img style={{width: 300, borderRadius: 220}} src = {photo}/>
              </div>
        
          
      </div>
      </Container>
     <Container className='row' ref={workRef} style={{marginTop: 200}}>
       
       <div className='col-sm-6'>
       <h1  style={{textAlign: 'center', marginTop:250}}>Work experience</h1>
       </div>
       <div className='col-sm-6'>
         <div style={{marginTop:20}}>
          <h3>Manager</h3>
         <h5>Sakuramen</h5>

<p>Jun 2014 – Aug 2021</p> 
<ul>
<li>Coordinated communications among customers, team members and all levels of the organization to ensure accurate and timely customer service.</li>
<li>Recruited and hired qualified candidates to fill open positions. </li>
<li>Evaluated store performance by receiving, analyzing and incorporating feedback from store inspections to implement action plans for improvements.</li> 
<li>Trained employees on additional job positions.</li>
</ul>
      </div>

<div style={{marginTop:20}}>
<h3>Project coordinator</h3>
<h5>Asia-Pacific Region Org.</h5>

<p>Jun 2010 – Sep 2013</p> 
<ul>
<li>Directed event production in collaboration with sponsors, hosts and internal teams.</li>
<li>Coordinated vendors, timelines and budget for events.</li>
<li>Maintained close communication with clients to mitigate service issues.</li>
<li>Organized all event logistics and operations, including facility selection, pricing, transportation, accommodations.</li>
<li>Updated and managed project databases.</li>
</ul>
</div>
</div>   
     </Container>
 <Container className="row" style={{marginTop: 100}}>
 <div className="col-sm-6">
   <div>
     <h3>Software Engineering</h3>
     <h5>General Assembly</h5>
     <p>April 2022-July 2022</p>
     <p>
     Full-stack software engineering immersive student in an intensive, 
     twelve-week, 450+ hour program focused on product development fundamentals, 
     object-oriented programming, MVC frameworks, data modeling, and team collaboration strategies. 
     Developed a portfolio of individual and group projects.
     </p>
     </div>
     <div style={{marginTop: 50}}>
     <h3>Masters in Economics</h3>
     <h5>Far Eastern Federal University</h5>
     <p>September 2006-June 2011</p>
     </div>
   </div>
   <div className="col-sm-6">
     <h1 style={{textAlign: 'center', marginTop: 100}}>Education</h1>
   </div>
   
 </Container>
 <Container style={{marginTop: 100}}>
   <h1>Projects.</h1>
    <iframe style={{width: '100vw', height: 300}} src = "https://floating-beyond-35055.herokuapp.com/"></iframe>
    <iframe style={{width: '100vw', height: 300}} src = "https://homegoods-store.herokuapp.com/"></iframe>
    <iframe style={{width: '100vw', height: 300}} src = "https://travelblogfrontend.herokuapp.com/"></iframe>
 </Container>
    
<footer id ='footer' style={{textAlign: 'center'}}>
      Yulia Glushenko.
      <p>
        < a id = 'footerlink' href="https://www.linkedin.com/in/yulia-glushenko/"> <FaLinkedin/></a>
        < a id = 'footerlink' href="mailto:yulia.glushenko@gmail.com"> <FaEnvelope/> </a>
        < a id = 'footerlink' href="https://github.com/YuliaG1989"> <FaGithub/></a>
  </p>
</footer>

    </>
  );
}

export default App;
