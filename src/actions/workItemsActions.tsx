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
				"Le travail que j'apprécie et qui me motive, dans l'un des secteurs d'activité qui fait le plus de sens pour moi ! L'application web vise à faciliter la création et la gestion de communautés d'autoconsommation d'énergie renouvelable. L'équipe était petite, le projet était ambitieux et le calendrier était serré, j'ai donc dû porter plusieurs casquettes, du design, du code, du déploiement, mais aussi de la gestion de projet et de la formation des alternants. Le projet a été très stimulant et gratifiant !",
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
				tooltip: "Le dépôt Github est privé",
			},
			demo: {
				url: "",
				tooltip: "Le backend est toujours en développement",
			},
		},
		/**
		 * MY PORTFOLIO
		 */
		{
			title: "My portfolio",
			description:
				"Pour mettre en valeur mes compétences, j'ai passé quelques jours à concevoir et à coder mon propre portfolio (oui, celui que vous visitez en ce moment même !). Ca a été l'occasion de me lancer un défi : alors que j'ai plutôt l'habitude de coder des sites web d'entreprise minimalistes et épurés, j'ai cette fois adopté un style néo-brutalisme audacieux pour mon portfolio. Ce fut une façon stimulante et enrichissante d'explorer et de sortir des sentiers battus.",
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
				tooltip: "Voir le code sur Github",
			},
			demo: {
				url: "https://romainsire.com",
				tooltip: "Voir le site web",
			},
		},
		/**
		 * THESS
		 */
		{
			title: "Thess Corporate",
			description:
				"Chez Thess (THérapy Smart System), j'ai contribué au développement d'une solution innovante de télésurveillance des patients, dotée d'un distributeur de médicaments sécurisé et réglable. Travaillant au sein d'une équipe Scrum Agile de 10 personnes pendant 3 ans (en CDI puis en freelance), j'ai pu m'épanouir dans un environnement mêlant design, développement de nouvelles fonctionnalités, maintenance et tests. Une expérience enrichissante qui a un impact positif sur la vie des patients !",
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
				tooltip: "Le dépôt Gitlab est privé",
			},
			demo: {
				url: "https://www.lavaleriane.fr/solutions/thess",
				tooltip: "Voir le site web de présentation",
			},
		},
		/**
		 * GROUPOMANIA
		 */
		{
			title: "Groupomania",
			description:
				"C'était le projet final de ma formation en développement web. Je me suis lancé dans la construction d'un réseau social full-stack pour une entreprise fictive. Ce projet regorgeait de fonctionnalités telles que les profils d'utilisateurs, la recherche, la création de contenu avec redimensionnement d'images à la vonée, les notifications, etc. La courbe d'apprentissage était raide et le délai serré (seulement 1 mois et demi). Ce projet a renforcé mon intérêt pour le développement web et a démontré ma capacité à apprendre rapidement et à relever des défis complexes.",
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
				tooltip: "Voir le code sur Github",
			},
			demo: {
				url: "https://youtu.be/WLgvV_l-GcI",
				tooltip: "Voir la démo sur Youtube",
			},
		},
	];
}
