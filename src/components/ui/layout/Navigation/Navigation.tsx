import NavItem from "../NavItem/NavItem";
import style from "./Navigation.module.scss";

export default function Navigation() {
	return (
		<nav role="navigation">
			<ul
				className={style.list}
				role="list"
			>
				<NavItem href="/about">About</NavItem>
				<NavItem href="/work">Work</NavItem>
				{/* <NavItem href="/blog">Blog</NavItem> */}
				<NavItem href="/contact">Contact</NavItem>
			</ul>
		</nav>
	);
}
