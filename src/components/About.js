import React from "react";
import { Row, Col, Image } from "react-bootstrap";
import "./styles/about.css";
import ScrollAnimation from "react-animate-on-scroll";
import aboutImage from "./images/shanice_profile.jpg";

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
							I am a software engineer specializing in web and mobile app development, 
							driven by a passion for building clean, user-focused digital experiences.
							I enjoy turning ideas into reality, constantly experimenting with new technologies 
							and creative solutions.	Always learning and evolving, I strive to craft innovative 
							products that make a meaningful impact. Do scroll down to know	more about me :)
						</p>
					</ScrollAnimation>
				</Col>
			</Row>
		</div>
	);
}

export default About;
