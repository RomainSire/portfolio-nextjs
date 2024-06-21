import LandingNavItem from "@/components/ui/landing/LandingNavItem/LandingNavItem";
import style from "./LandingNav.module.scss";

export default function LandingNav() {
	return (
		<nav className={style.navigation}>
			<ul role="list">
				<LandingNavItem href="/about">Intro</LandingNavItem>
				<LandingNavItem href="/work">Projets</LandingNavItem>
				{/* <LandingNavItem href="/blog">Blog</LandingNavItem> */}
				<LandingNavItem href="/contact">Contact</LandingNavItem>
			</ul>
		</nav>
	);
}
