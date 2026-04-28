import React from "react";
import Favourite from "@material-ui/icons/Favorite";

const interest = [
	{
		src: process.env.PUBLIC_URL + "/images/crochet.jpg",
		alt: "Crochet",
		icon: <Favourite fontSize="small" />,
		title: "Crochet",
		detail: "",
	},
	{
		src: process.env.PUBLIC_URL + "/images/kindle.jpg",
		alt: "Kindle",
		icon: <Favourite fontSize="small" />,
		title: "Reading",
		detail: "",
	},
];

export default interest;
