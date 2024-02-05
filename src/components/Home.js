import React, { useState, useEffect, useRef } from "react";
import { Row, Col, Button } from "react-bootstrap";
import "./styles/home.css";
import useTypewriter from "react-typewriter-hook";
import ScrollAnimation from "react-animate-on-scroll";
import PictureAsPdfIcon from "@material-ui/icons/PictureAsPdf";
import homeImage from "./images/about.png";
import pdf1 from "./file/shanice_ng_resume.pdf";

//Update wordsDisplay data
const wordsDisplay = [
	"a software engineer",
	"a computer science student",
	"currently studying in NUS",
	"graduating in 2024/2025",
];
let index = 0;

function Home() {
	const [displayName, setDisplayName] = useState("a software engineer");
	const intervalRef = useRef({});
	const name = useTypewriter(displayName);
	useEffect(() => {
		intervalRef.current = setInterval(() => {
			// index = Math.floor(Math.random() * wordsDisplay.length);
			// index = index > 2 ? 0 : ++index;
			index = index > wordsDisplay.length ? 0 : ++index;
			setDisplayName(wordsDisplay[index]);
		}, 5000);
		return function clear() {
			clearInterval(intervalRef.current);
		};
	}, [displayName]);

	return (
		<section className="section home" id="home">
			<Row>
				<Col lg={6}>
					<img
						className="image-home"
						src={homeImage}
						alt="homeImage"
					/>
				</Col>
				<Col lg={6} className="home-col">
					<ScrollAnimation animateIn="animate__backInRight">
						<div id="home-page">
							<h2>Welcome, my name is</h2>
							<h1>Shanice</h1>
							<p>
								and I'm <span>{name}</span>
							</p>
							<p>
								<span img="Pick Me" /> 👇 Here is a pdf of my
								resume 👇
							</p>
							<Button
								className="button-home"
								variant="secondary"
								size="lg"
								target="_blank"
								href={pdf1}
								download
							>
								<PictureAsPdfIcon fontSize="x-large" />
								Shanice's resume
							</Button>
						</div>
					</ScrollAnimation>
				</Col>
			</Row>
		</section>
	);
}

export default Home;
