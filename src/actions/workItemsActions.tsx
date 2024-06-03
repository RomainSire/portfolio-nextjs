"use server";
import { type WorkItemType } from "@/types/WorkItemType";
import {
	SiAngular,
	SiMysql,
	SiMysqlHex,
	SiNextdotjs,
	SiNextdotjsHex,
	SiNodedotjs,
	SiNodedotjsHex,
	SiReact,
	SiReactHex,
	SiSass,
	SiSassHex,
	SiTypescript,
	SiTypescriptHex,
} from "@icons-pack/react-simple-icons";

/**
 * Get work items
 * @returns Array of work items
 */
export async function getWorkItems(): Promise<WorkItemType[]> {
	return [
		/**
		 * NOTRELEC
		 */
		{
			title: "Notrelec",
			description:
				"The job that I enjoy and motivates me, in one of the most meaningful business sector for me! The web application aims to facilitate the creation and management of renewable energy self-consumption communities. The team was small, the project was ambitious and the schedule was tight, so I had to wear many hats, from design, code, deployment, and also project management and intern training. The project was very challenging and rewarding!",
			stack: [
				{
					name: "Next.js",
					color: SiNextdotjsHex,
					icon: <SiNextdotjs />,
				},
				{
					name: "TypeScript",
					color: SiTypescriptHex,
					icon: <SiTypescript />,
				},
				{
					name: "React",
					color: SiReactHex,
					icon: <SiReact />,
				},
			],
			image: "/work/notrelec.png",
			github: {
				url: "",
				tooltip: "The Github repository is private",
			},
			demo: {
				url: "",
				tooltip: "The backend is still in development",
			},
		},
		/**
		 * MY PORTFOLIO
		 */
		{
			title: "My portfolio",
			description:
				"To showcase my skills, I spent a few days to design and code my own portfolio (yes, the one you're visiting right now!). This self-imposed challenge pushed me out of my comfort zone: because while I typically gravitate towards clean, minimalist corporate websites, this time I embraced a bold new-brutalism style for my portfolio. It was a refreshing and rewarding way to demonstrate my versatility and love for exploration.",
			stack: [
				{
					name: "Next.js",
					color: SiNextdotjsHex,
					icon: <SiNextdotjs />,
				},
				{
					name: "TypeScript",
					color: SiTypescriptHex,
					icon: <SiTypescript />,
				},
				{
					name: "SASS",
					color: SiSassHex,
					icon: <SiSass />,
				},
			],
			image: "/work/portfolio.png",
			github: {
				url: "https://github.com/RomainSire/portfolio-nextJs",
				tooltip: "Check the code on Github",
			},
			demo: {
				url: "https://romainsire.com",
				tooltip: "Check the website",
			},
		},
		/**
		 * THESS
		 */
		{
			title: "Thess Corporate",
			description:
				"At Thess (THérapy Smart System), I helped develop a groundbreaking remote patient monitoring solution with a secure, adjustable medication dispenser. Working within a 10-person agile Scrum team for 3 years (as permanent contract, then as freelance), I thrived on a mix of design, new feature coding, maintenance, and testing. A rewarding experience impacting patient lives!",
			stack: [
				{
					name: "React",
					color: SiReactHex,
					icon: <SiReact />,
				},
				{
					name: "TypeScript",
					color: SiTypescriptHex,
					icon: <SiTypescript />,
				},
				{
					name: "SASS",
					color: SiSassHex,
					icon: <SiSass />,
				},
			],
			image: "/work/thess.png",
			github: {
				url: "",
				tooltip: "The Gitlab repository is private",
			},
			demo: {
				url: "https://www.lavaleriane.fr/solutions/thess",
				tooltip: "Check the website",
			},
		},
		/**
		 * GROUPOMANIA
		 */
		{
			title: "Groupomania",
			description:
				"It was the last project of my web development training. I jumped headfirst into building a full-stack social network for a fictional company. This project was packed with features like user profiles, search, content creation with image resizing, etc. The learning curve was steep, and the timeframe was short (only 1,5 month). This project solidified my love for web development and showed my ability to learn quickly and tackle complex challenges.",
			stack: [
				{
					name: "Angular",
					color: "#a4374f",
					icon: <SiAngular />,
				},
				{
					name: "Node.js",
					color: SiNodedotjsHex,
					icon: <SiNodedotjs />,
				},
				{
					name: "MySQL",
					color: SiMysqlHex,
					icon: <SiMysql />,
				},
			],
			image: "/work/groupomania.png",
			github: {
				url: "https://github.com/RomainSire/OC-P7-Social-Network",
				tooltip: "Check the code on Github",
			},
			demo: {
				url: "https://youtu.be/WLgvV_l-GcI",
				tooltip: "Check the demo on Youtube",
			},
		},
	];
}
