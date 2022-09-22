import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/images/logo.svg";
import linkedin from "../assets/images/linkedin.svg";
import github from "../assets/images/github.png";
import navIcon3 from "../assets/images/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/esmeralda-gallardo-8a4977215/"><img src={linkedin} alt="Icon" /></a>
              <a href="https://github.com/esmegl"><img src={github} alt="Icon" /></a>
              <a href="#"><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}