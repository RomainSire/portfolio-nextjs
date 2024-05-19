import LandingNavItem from "@/components/ui/landing/LandingNavItem/LandingNavItem";
import style from "./LandingNav.module.css";

export default function LandingNav() {
	return (
		<nav className={style.navigation}>
			<ul role="list">
				<LandingNavItem href="/about">About</LandingNavItem>
				<LandingNavItem href="/work">Work</LandingNavItem>
				<LandingNavItem href="/blog">Blog</LandingNavItem>
				<LandingNavItem href="/contact">Contact</LandingNavItem>
			</ul>
		</nav>
	);
}
