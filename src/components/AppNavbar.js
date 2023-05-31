import { Navbar, Nav, Container } from "react-bootstrap";
import { useState, useEffect } from "react"
import navcon1 from "../assets/images/nav-icon1.svg";
import navcon3 from "../assets/images/nav-icon3.svg";
import navcon2 from "../assets/images/nav-icon2.svg";
import { HashLink } from 'react-router-hash-link';
import { BrowserRouter as Router } from "react-router-dom";


export const AppNavbar = () => {

	const [activeLink, setActiveLink] = useState('home');
	  const [scrolled, setScrolled] = useState(false);

	  useEffect(() => {
	    const onScroll = () => {
	      if (window.scrollY > 50) {
	        setScrolled(true);
	      } else {
	        setScrolled(false);
	      }
	    }

	    window.addEventListener("scroll", onScroll);

	    return () => window.removeEventListener("scroll", onScroll);
	  }, [])

	  const onUpdateActiveLink = (value) => {
	    setActiveLink(value);
	  }

	return (
		<Router>
		     <Navbar expand="md" className={scrolled ? "scrolled" :""}>
		       <Container>
		         <Navbar.Brand href="/" id="Nav-txt">DevJohn</Navbar.Brand>
		         <Navbar.Toggle aria-controls="basic-navbar-nav">
		           <span className="navbar-toggler-icon"></span>
		         </Navbar.Toggle>
		         <Navbar.Collapse id="basic-navbar-nav">
		           <Nav className="ms-auto">
		             <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')} id="Nav-txt2">Home</Nav.Link>
		             <Nav.Link href="#aboutMe" className={activeLink === 'aboutMe' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('aboutMe')} id="Nav-txt2">About Me</Nav.Link>
		             <Nav.Link href="#projects" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')} id="Nav-txt2">Projects</Nav.Link>
		             <Nav.Link href="#Tools" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('Tools')} id="Nav-txt2">Tools</Nav.Link>
		           </Nav>
		           <span className="navbar-text">
		             <div className="social-icon">
		               <a href="https://www.linkedin.com/in/johnirishjuaneza/" target="_blank" rel="noopener noreferrer"><img src={navcon1} alt="" /></a>
		               <a href="https://www.facebook.com/Juaneza.JohnIrish" target="_blank" rel="noopener noreferrer"><img src={navcon2} alt="" /></a>
		               <a href="#"><img src={navcon3} alt="" /></a>
		             </div>
		             <HashLink to='#connect'>
		               <button className="vvd"><span>Let’s Connect</span></button>
		             </HashLink>
		           </span>
		         </Navbar.Collapse>
		       </Container>
		     </Navbar>
		   </Router>
		);
}