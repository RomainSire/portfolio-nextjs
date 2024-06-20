import Hero from "@/components/ui/landing/Hero/Hero";
import LandingNav from "@/components/ui/landing/LandingNav/LandingNav";
import LegalNav from "@/components/ui/layout/LegalNav/LegalNav";
import style from "./page.module.scss";

export default function HomePage() {
	return (
		<main className={style.main}>
			<Hero />
			<LandingNav />
			<footer className={style.footer}>
				<LegalNav />
			</footer>
		</main>
	);
}
