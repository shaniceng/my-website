import React from "react";
import Mic from "@material-ui/icons/Mic";
import Volleyball from "@material-ui/icons/SportsVolleyball";
import Favourite from "@material-ui/icons/Favorite";
import Music from "@material-ui/icons/MusicNote";

const interest = [
	{
		src: "/images/volleyball.png",
		alt: "Girl playing volleyball",
		icon: <Volleyball fontSize="large" />,
		title: "Play Volleyball",
		detail: "Most favourite sports to play at my free time",
	},
	{
		src: "/images/crochet.png",
		alt: "Crochet",
		icon: <Favourite fontSize="large" />,
		title: "Crochet",
		detail: "Love crocheting as a form to relief stress",
	},
	{
		src: "/images/music.png",
		alt: "Listen to Music",
		icon: <Music fontSize="large" />,
		title: "Listening to Music",
		detail: "Love listening to mandopop and cantopop",
	},
	{
		src: "/images/singing.png",
		alt: "Singing",
		icon: <Mic fontSize="large" />,
		title: "Singing",
		detail: "Love singing as a form of entertainment",
	},
];

export default interest;
