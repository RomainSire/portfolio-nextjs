import MyStack from "@/components/ui/about/MyStack/MyStack";
import WhoAmI from "@/components/ui/about/WhoAmI/WhoAmI";
import style from "./page.module.scss";

export default function AboutPage() {
	return (
		<div className={style.wrapper}>
			<WhoAmI />
			<MyStack />
		</div>
	);
}
