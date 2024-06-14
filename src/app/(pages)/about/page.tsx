import MyStack from "@/components/ui/about/MyStack/MyStack";
import WhoAmI from "@/components/ui/about/WhoAmI/WhoAmI";
import { Metadata } from "next";
import style from "./page.module.scss";

export const metadata: Metadata = {
	title: "About",
	description:
		"Discover more about Romain Sire, a skilled freelance frontend developer specializing in Typescript, React, Next.Js, Astro, and SASS. Learn about his journey, expertise, and the advanced technologies he uses in his projects.",
};

export default function AboutPage() {
	return (
		<div className={style.wrapper}>
			<WhoAmI />
			<MyStack />
		</div>
	);
}
