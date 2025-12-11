import Carousel from "react-multi-carousel";
import { Container, Row, Col } from "react-bootstrap";
import "react-multi-carousel/lib/styles.css";
import blockchain from "../assets/images/blockchain.svg";
import game from "../assets/images/game.svg";
import backend from "../assets/images/backend.png";
import web from "../assets/images/web.svg";
import ai from "../assets/images/ai.png";
import illustrations from "../assets/images/ilustration.svg";


export const AboutMe = () => {
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
		<section className="about" id="about">
			<Container>
				<Row>
					<h2>About Me</h2>
					<p>I am a highly motivated systems engineering student, but I earned most of my knowledge in software development trying to code on my own. It wasn't easy at first, but at the end it helped me develop a lot of autonomy and self management to carry on challenging projects and learn new technologies quicker.</p>
					<p>I enjoy coding so much!</p>
					<p>Most of the ilustrations and designs in this page and all ilustrations in my projects were made by me, if you like my art feel free to check out my designs gallery <a href="https://esmegl.github.io/art-portfolio">here</a> (still in development). All photos used in this page are from Unsplash.</p>
				</Row>
				<Row className="interests">
					<Col>
						<div className="interests-bx">
							<h3>My Interests</h3>
							{<Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider"> 
								<div className="item">
									<img src={blockchain} alt="Blockchain"/>
									<h5>Blockchain Technology</h5>
								</div>
								<div className="item">
									<img src={ai} alt="AI"/>
									<h5>Artificial Intelligence</h5>
								</div>
								<div className="item">
									<img src={game} alt="Game"/>
									<h5>Game Making</h5>
								</div>
								<div className="item">
									<img src={backend} alt="Back-End"/>
									<h5>Back-end Development</h5>
								</div>
								<div className="item">
									<img src={web} alt="Web-Design"/>
									<h5>Web Design</h5>
								</div>
								<div className="item">
									<img src={illustrations} alt="Illustrations"/>
									<h5>Digital Art</h5>
								</div>
							</Carousel> }
						</div>
					</Col>
				</Row>
			</Container>
		</section>
	)

}