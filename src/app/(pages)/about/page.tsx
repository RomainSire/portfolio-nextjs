import MyStack from "@/components/ui/about/MyStack/MyStack";
import WhoAmI from "@/components/ui/about/WhoAmI/WhoAmI";
import { Metadata } from "next";
import style from "./page.module.scss";

export const metadata: Metadata = {
	title: "About",
};

export default function AboutPage() {
	return (
		<div className={style.wrapper}>
			<WhoAmI />
			<MyStack />
		</div>
	);
}
