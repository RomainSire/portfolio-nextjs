import Link from "next/link";
import style from "./NavItem.module.scss";

type NavItemProps = {
	/**
	 * The URL to navigate to.
	 */
	href: string;
	/**
	 * The content of the link.
	 */
	children: React.ReactNode;
	/**
	 * Whether the link is active.
	 */
	active?: boolean;
};

export default function NavItem({ href, children, active }: NavItemProps) {
	return (
		<li className={style.listItem}>
			<Link
				className={style.link}
				href={href}
				data-content={children}
			>
				{children}
			</Link>
		</li>
	);
}
