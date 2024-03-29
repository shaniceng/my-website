import React from "react";
import { DiJava } from "react-icons/di";
import { SiUnity, SiFirebase, SiMicrosoftword } from "react-icons/si";
import { AiOutlineTeam } from "react-icons/ai";

const skill = [
	{
		name: "Languages",
		style: {
			background: "#122",
			color: "#fff",
			width: "5rem",
			height: "5rem",
			margin: "10px auto",
		},
		icon: <DiJava size={70} />,
		detail: [
			{
				title: "Java",
			},
			{
				title: "C#",
			},
			{
				title: "C",
			},
			{
				title: "Python",
			},
			{
				title: "Dart",
			},
			{
				title: "JavaScript",
			},
		],
	},
	{
		name: "Frameworks",
		style: {
			background: "#122",
			color: "#fff",
			width: "5rem",
			height: "5rem",
			margin: "10px auto",
		},
		icon: <DiJava size={70} />,
		detail: [
			{
				title: "Flutter",
			},
			{
				title: "ReactJS",
			},
			{
				title: "Docker",
			},
			{
				title: "Bootstrap",
			},
		],
	},

	{
		name: "Game Development",
		style: {
			background: "#122",
			color: "#fff",
			width: "5rem",
			height: "5rem",
			margin: "10px auto",
		},
		icon: <SiUnity size={70} />,
		detail: [
			{
				title: "Unity",
			},
			{
				title: "Aesprite",
			},
			{
				title: "Itch.io",
			},
			{
				title: "WebGL",
			},
		],
	},
	{
		name: "Others",
		style: {
			background: "#122",
			color: "#fff",
			width: "5rem",
			height: "5rem",
			margin: "10px auto",
		},
		icon: <SiFirebase size={70} />,
		detail: [
			{
				title: "Firebase",
			},
			{
				title: "Visual Studio Code",
			},
			{
				title: "Android Studio",
			},
			{
				title: "IntelliJ",
			},
			{
				title: "GitHub",
			},
			{
				title: "IoT",
			},
		],
	},
	{
		name: "Tools",
		style: {
			background: "#122",
			color: "#fff",
			width: "5rem",
			height: "5rem",
			margin: "10px auto",
		},
		icon: <SiMicrosoftword size={70} />,
		detail: [
			{
				title: "Microsoft Word",
			},
			{
				title: "Microsoft Excel",
			},
			{
				title: "Microsoft Powerpoint",
			},
			{
				title: "Microsoft Office",
			},
		],
	},
	{
		name: "Soft Skills",
		style: {
			background: "#122",
			color: "#fff",
			width: "5rem",
			height: "5rem",
			margin: "10px auto",
		},
		icon: <AiOutlineTeam size={70} />,
		detail: [
			{
				title: "Teamwork",
			},
			{
				title: "Leadership",
			},
			{
				title: "Time-management",
			},
			{
				title: "Problem-solving",
			},
		],
	},
];

export default skill;
