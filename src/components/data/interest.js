import React from "react";
import Mic from "@material-ui/icons/Mic";
import Volleyball from "@material-ui/icons/SportsVolleyball";
import Favourite from "@material-ui/icons/Favorite";
import Music from "@material-ui/icons/MusicNote";

const interest = [
	{
		src: process.env.PUBLIC_URL + "/images/volleyball.jpg",
		alt: "Girl playing volleyball",
		icon: <Volleyball fontSize="large" />,
		title: "Play Volleyball",
		detail: "Most favourite sports to play at my free time",
	},
	{
		src: process.env.PUBLIC_URL + "/images/crochet.jpg",
		alt: "Crochet",
		icon: <Favourite fontSize="large" />,
		title: "Crochet",
		detail: "Love crocheting as a form to relief stress",
	},
	{
		src: process.env.PUBLIC_URL + "/images/music.jpg",
		alt: "Listen to Music",
		icon: <Music fontSize="large" />,
		title: "Listening to Music",
		detail: "Love listening to mandopop and cantopop",
	},
	{
		src: process.env.PUBLIC_URL + "/images/singing.jpg",
		alt: "Singing",
		icon: <Mic fontSize="large" />,
		title: "Singing",
		detail: "Love singing as a form of entertainment",
	},
];

export default interest;
