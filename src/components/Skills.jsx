import Carousel from "react-multi-carousel";
import { Container, Row, Col } from "react-bootstrap";
import "react-multi-carousel/lib/styles.css";

import angular from "../assets/images/angular.png";
import cplus from "../assets/images/c-.png";
import css from "../assets/images/css.png";
import docker from "../assets/images/docker.png";
import git from "../assets/images/git.png";
import java from "../assets/images/java.png";
import js from "../assets/images/js.png";
import py from "../assets/images/python.png";
import springboot from "../assets/images/springboot.png";
import sql from "../assets/images/sql-server.png";
import vue from "../assets/images/vue.png";
import react from "../assets/images/react.png";
import html from "../assets/images/html.png";
import mariadb from "../assets/images/mariadb.png";

export const Skills = () => {
	const responsive = {
	  superLargeDesktop: {
	    breakpoint: { max: 4000, min: 3000 },
	    items: 5
	  },
	  desktop: {
	    breakpoint: { max: 3000, min: 1024 },
	    items: 3
	  },
	  tablet: {
	    breakpoint: { max: 1024, min: 464 },
	    items: 2
	  },
	  mobile: {
	    breakpoint: { max: 464, min: 0 },
	    items: 1
	  }
	};

	return (
		<section className="skills" id="skills">
			<Container>
				<Row>
					<Col>
						<div className="skill-bx">
							<h2>Knowledge</h2>
							<Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider"> 
								<div className="item">
									<img src={py} alt="Python"/>
									<h5>Python</h5>
								</div>
								<div className="item">
									<img src={java} alt="Java"/>
									<h5>Java</h5>
								</div>
								<div className="item">
									<img src={cplus} alt="CPlus"/>
									<h5>C++</h5>
								</div>
								<div className="item">
									<img src={sql} alt="SQL"/>
									<h5>SQL</h5>
								</div>
								<div className="item">
									<img src={js} alt="JavaScript"/>
									<h5>JavaScript</h5>
								</div>
								<div className="item">
									<img src={html} alt="HTML"/>
									<h5>HTML</h5>
								</div>
								<div className="item">
									<img src={css} alt="CSS"/>
									<h5>CSS</h5>
								</div>
								<div className="item">
									<img src={vue} alt="Vue"/>
									<h5>Vue</h5>
								</div>
								<div className="item">
									<img src={angular} alt="Angular"/>
									<h5>Angular</h5>
								</div>
								<div className="item">
									<img src={react} alt="React"/>
									<h5>React</h5>
								</div>
								<div className="item">
									<img src={springboot} alt="SpringBoot"/>
									<h5>Spring Boot</h5>
								</div>
								<div className="item">
									<img src={git} alt="Git"/>
									<h5>Git</h5>
								</div>
								<div className="item">
									<img src={docker} alt="Docker"/>
									<h5>Docker</h5>
								</div>
								<div className="item">
									<img src={mariadb} alt="MariaDB"/>
									<h5>MariaDB</h5>
								</div>
							</Carousel>
						</div>
					</Col>
				</Row>
			</Container>
		</section>
	)

}