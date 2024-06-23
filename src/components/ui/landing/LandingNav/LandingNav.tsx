import LandingNavItem from "@/components/ui/landing/LandingNavItem/LandingNavItem";
import style from "./LandingNav.module.scss";

export default function LandingNav() {
	return (
		<nav className={style.navigation}>
			<ul role="list">
				<LandingNavItem
					href="/about"
					className="entry-animation slide delay-3"
				>
					Intro
				</LandingNavItem>
				<LandingNavItem
					href="/work"
					className="entry-animation slide delay-4"
				>
					Projets
				</LandingNavItem>
				{/* <LandingNavItem href="/blog">Blog</LandingNavItem> */}
				<LandingNavItem
					href="/contact"
					className="entry-animation slide delay-5"
				>
					Contact
				</LandingNavItem>
			</ul>
		</nav>
	);
}
