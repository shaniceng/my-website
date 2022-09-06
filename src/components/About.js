import React from "react";
import { Row, Col, Image } from "react-bootstrap";
import "./styles/about.css";
import ScrollAnimation from "react-animate-on-scroll";
import aboutImage from "./images/about.png";

function About() {
	return (
		<div className="section about" id="about">
			<h1>About</h1>
			<Row className="about-row">
				<Col lg={4} className="about-col text-center">
					<ScrollAnimation
						animateIn="animate__bounceInLeft"
						animateOut="animate__bounceOutLeft"
					>
						<Image
							className="about-image"
							src={aboutImage}
							thumbnail
							alt="aboutImage"
						/>
					</ScrollAnimation>
				</Col>
				<Col lg={8} className="about-row">
					<ScrollAnimation
						animateIn="animate__bounceInRight"
						animateOut="animate__bounceOutRight"
					>
						<h3>HELLO!</h3>
						<p>
							I am currently a Y2 computer science student
							studying in NUS. I have a strong passion in software
							engineering as I was first exposed in my tertiary
							studies. Since then, I have decided to apply for
							computer science in NUS and have been improving
							myself. I took up multiple projects which are
							further elaborated below. Do scroll down to know
							more about me :)
						</p>
					</ScrollAnimation>
				</Col>
			</Row>
		</div>
	);
}

export default About;
