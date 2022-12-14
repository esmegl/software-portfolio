import { useState, useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from '../assets/images/logo.svg';
import { Icon } from '@iconify/react';

export const NavBar = () => {
	const [activeLink, setActiveLink] = useState('home');
	// Check if the user scrolls the window
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const onScroll = () => {
			if(window.scrollY > 50) {
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
		<Navbar expand="lg" className={scrolled ? "scrolled": ""}>
      <Container>
        <Navbar.Brand href="#home">
        	<img src={logo} alt="Logo"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
        	<span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link': 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#about" className={activeLink === 'about' ? 'active navbar-link': 'navbar-link'} onClick={() => onUpdateActiveLink('about')}>About me</Nav.Link>
            <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link': 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Knowledge</Nav.Link>
            <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link': 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
          </Nav>
          <span className="navbar-text">
          	<div className="social-icon">
          		<a href="https://www.linkedin.com/in/esmeralda-gallardo-8a4977215/"><Icon icon="akar-icons:linkedin-box-fill" color="white" width="25" height="25"/></a>
          		<a href="https://github.com/esmegl"><Icon icon="akar-icons:github-fill" color="white" width="25" height="25" /></a>
          		<a href="https://leetcode.com/emerald_21/"><Icon icon="simple-icons:leetcode" color="white" width="25" height="25" /></a>
              <a href="https://www.hackerrank.com/gallardo_esmera1?hr_r=1"><Icon icon="cib:hackerrank" color="white" width="25" height="25" /></a>
          	</div>
{/*          	<button className="vvd" onClick={ () => console.log('Connect')}>
          		<span> Let's Connect!</span>
          	</button>*/}
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
	)
}