import LandingNavItem from "@/components/ui/landing/LandingNavItem";

export default function LandingNav() {
	return (
		<nav>
			<ul role="list">
				<LandingNavItem href="/about">About</LandingNavItem>
				<LandingNavItem href="/work">Work</LandingNavItem>
				<LandingNavItem href="/blog">Blog</LandingNavItem>
				<LandingNavItem href="/contact">Contact</LandingNavItem>
			</ul>
		</nav>
	);
}
