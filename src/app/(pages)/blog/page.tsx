import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Blog",
	description:
		"Plongez dans le blog de Romain Siré, développeur frontend freelance. Explorez une variété de sujets allant des tutoriels aux tendances du développement frontend, en passant par la gestion de projet, le freelancing et plus encore. Chaque article reflète l'expertise et la passion de Romain pour le code et la technologie.",
};

export default function BlogPage() {
	return <h1>Blog</h1>;
}
