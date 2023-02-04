import React from "react";
import OndemandVideo from "@material-ui/icons/OndemandVideo";
import Volleyball from "@material-ui/icons/SportsVolleyball";
import Favourite from "@material-ui/icons/Favorite";
import Music from "@material-ui/icons/MusicNote";

const interest = [
	{
		src: "images/drama.png",
		alt: "Girl watching drama",
		icon: <OndemandVideo fontSize="large" />,
		title: "Watch Netflix",
		detail: "Would catch up on my netflix series on my free time",
	},
	{
		src: "images/volleyball.png",
		alt: "Girl playing volleyball",
		icon: <Volleyball fontSize="large" />,
		title: "Play Volleyball",
		detail: "Most favourite sports to play at my free time",
	},
	{
		src: "images/crochet.png",
		alt: "Crochet",
		icon: <Favourite fontSize="large" />,
		title: "Crochet",
		detail: "Love crocheting as a form to relief stress",
	},
	{
<<<<<<< HEAD
		src: "images/Music.png",
=======
		src: "images/music.png",
>>>>>>> e5cae5c61966e73759d8d5252ba40bac619f15ae
		alt: "Listen to Music",
		icon: <Music fontSize="large" />,
		title: "Listening to Music",
		detail: "Love listening to mandopop and cantopop",
	},
];

export default interest;
