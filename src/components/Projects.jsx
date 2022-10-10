import React from 'react';

import { Container, Row, Col, Button } from "react-bootstrap";

import ht from "../assets/images/ht.png";
import particles from "../assets/videos/particles.mp4";
import lovebets from "../assets/images/lovebets_home.png";
// import colorSharp2 from "../assets/images/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

	const projects = [
		{
			title: "Webpage design",
			description: "Design of a landing page for a blockchain entrepreneurship with Angular.",
			imgUrl: ht,
		},
		{
			title: "Particle Simulator",
			description: "A Python program made using pygame library that simulates particles behaviour like sand and water.",
			videoUrl: particles,
		},
		{
			title: "Lovebets",
			description: "A smart contract that allows users to register their marriage on blockchain.",
			imgUrl: lovebets,
		},
	];

	return (
		<section className="project" id="project">
			<Container>
				<Row>
					<Col>
						<TrackVisibility>
						{({ isVisible }) => 
							<div className={isVisible ? "animate__animated animate__bounce" : ""}>
								<h2>Projects</h2>
							</div>
						}
						</TrackVisibility>	
					</Col>
				</Row>
				<Row>
					<Col sm={6} md={4}>
						<div className="proj-imgbx">
							<img src={ projects[0].imgUrl } alt="..."/>
							<div className="proj-txtx">
								<h4>{ projects[0].title }</h4>
								<span>{ projects[0].description }</span>
							</div>
						</div>
					</Col>
					<Col sm={6} md={4}>
						<div className="proj-imgbx">
							{<video src={ projects[1].videoUrl } autoPlay loop>Sorry, your browser doesn't support embedded videos.</video>}
							<div className="proj-txtx">
								<h4>{ projects[1].title }</h4>
								<span>{ projects[1].description }</span>
								<Col>
									<Button href="https://github.com/esmegl/particle_simulator">Github Repository</Button>
								</Col>
							</div>
						</div>
					</Col>
					<Col sm={6} md={4}>
						<div className="proj-imgbx">
							<img src={ projects[2].imgUrl } alt="..."/>
							<div className="proj-txtx">
								<h4>{ projects[2].title }</h4>
								<span>{ projects[2].description }</span>
								<Col>
									<a href="https://github.com/esmegl/love_bets_contracts"><Button>Smart Contract Repository</Button></a>
								</Col>
								<Col>
									<a href="https://github.com/esmegl/lovebets-ui"><Button>UI Repository</Button></a>
								</Col>
							</div>
						</div>
					</Col>
				</Row>
			</Container>
			{/*<img className="background-image-right" src={colorSharp2} />*/}
		</section>
	)
}