import Hero from "@/components/ui/landing/Hero/Hero";
import LandingNav from "@/components/ui/landing/LandingNav/LandingNav";
import style from "./page.module.css";

export default function HomePage() {
	return (
		<main className={style.main}>
			<Hero />
			<LandingNav />
		</main>
	);
}
