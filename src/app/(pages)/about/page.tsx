import MyStack from "@/components/ui/about/MyStack/MyStack";
import WhoAmI from "@/components/ui/about/WhoAmI/WhoAmI";
import { Metadata } from "next";
import style from "./page.module.scss";

export const metadata: Metadata = {
	title: "À propos",
	description:
		"Découvrez plus en détail Romain Siré, un développeur frontend freelance qualifié, spécialisé en Typescript, React, Next.Js, Astro et SASS. Apprenez-en plus sur son parcours, son expertise et les technologies qu'il utilise dans ses projets.",
};

export default function AboutPage() {
	return (
		<div className={style.wrapper}>
			<WhoAmI />
			<MyStack />
		</div>
	);
}
