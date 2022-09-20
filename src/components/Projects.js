import { Container, Row, Col } from "react-bootstrap";

import { ProjectCard } from '../components/ProjectCard';
import project1 from "../assets/images/project-img1.png";
import project2 from "../assets/images/project-img2.png";
import lovebets from "../assets/images/lovebets_home.png";
import colorSharp2 from "../assets/images/color-sharp2.png";

export const Projects = () => {

	const projects = [
		{
			title: "Webpage design",
			description: "Design of a landing page for a blockchain entrepreneurship.",
			imgUrl: project1,
		},
		{
			title: "Particle Simulator",
			description: "A Python program made using pygame library that simulates particles behaviour like sand and water.",
			imgUrl: project2,
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
						<h2>Projects</h2>
						<p>Lorem ipsum</p>
					</Col>
				</Row>
				<Row>
					{
						projects.map((project, index) => {
							return (
								<ProjectCard
									key={index}
									{...project}
								/>
							)
						})
					}	
				</Row>
			</Container>
			<img className="background-image-right" src={colorSharp2} />
		</section>
	)
}