import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/images/logo.svg";
import { Icon } from '@iconify/react';

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
              <a href="https://www.linkedin.com/in/esmeralda-gallardo-8a4977215/"><Icon icon="akar-icons:linkedin-box-fill" color="white" width="30" height="30"/></a>
              <a href="https://github.com/esmegl"><Icon icon="akar-icons:github-fill" color="white" width="30" height="30" /></a>
              <a href="https://www.hackerrank.com/gallardo_esmera1?hr_r=1"><Icon icon="cib:hackerrank" color="white" width="30" height="30" /></a>
            </div>
            <p>Copyright 2022 Esmeralda Gallardo. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}