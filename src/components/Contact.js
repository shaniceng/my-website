import React from "react";
import {
	Container,
	Row,
	Col,
	Carousel,
	Badge,
	ProgressBar,
} from "react-bootstrap";
import "./styles/contact.css";
import interest from "./data/interest.js";
import language from "./data/language.js";

import { SiLinkedin, SiGithub, SiInstagram } from "react-icons/si";

function Contact() {
	return (
		<section className="section contact" id="contact">
			<Container>
				<h1>Interests & Languages</h1>
				<Row className="contact-row">
					<Col lg="6">
						<Carousel>
							{interest.map((interestCarousel, index) => (
								<Carousel.Item
									key={index}
									interval={3000}
									className="contact-img"
								>
									<img
										className="d-block w-100"
										src={interestCarousel.src}
										alt={interestCarousel.alt}
									/>
									<Carousel.Caption>
										<h3>
											<Badge variant="dark">
												{interestCarousel.icon}
												{"  "}
												{interestCarousel.title}
											</Badge>
										</h3>
										<p>
											<Badge variant="dark">
												{interestCarousel.detail}
											</Badge>
										</p>
									</Carousel.Caption>
								</Carousel.Item>
							))}
						</Carousel>
					</Col>
					<Col lg="6">
						{language.map((languages, index) => (
							<div key={index}>
								<h3>{languages.title}</h3>
								<h6>{languages.detail}</h6>
								<ProgressBar
									className="progress"
									striped
									variant="warning"
									animated
									now={languages.percentage}
								/>
							</div>
						))}
					</Col>
				</Row>
				<Row>
					<Col>
						<h1>Contact</h1>
						<a href="https://github.com/shaniceng">
							<SiGithub size={40} />
						</a>
						<a href="https://www.linkedin.com/in/shaniceng">
							<SiLinkedin size={40} />
						</a>
						<a href="https://www.instagram.com/ngshanice/">
							<SiInstagram size={40} />
						</a>
					</Col>
				</Row>
			</Container>
		</section>
	);
}

export default Contact;
