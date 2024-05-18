import Hero from "@/components/ui/landing/Hero";
import LandingNav from "@/components/ui/landing/LandingNav";
import styles from "./page.module.css";

export default function HomePage() {
	return (
		<main className={styles.main}>
			<Hero />
			<LandingNav />
		</main>
	);
}
