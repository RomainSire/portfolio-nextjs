import styles from "./LandingNavItem.module.css";

type LandingNavItemProps = Readonly<{
	/**
	 * The href attribute.
	 */
	href: string;
	/**
	 * The children nodes.
	 */
	children: React.ReactNode;
}>;

export default function LandingNavItem({ href, children }: LandingNavItemProps) {
	return (
		<li>
			<a
				href={href}
				className={styles.link}
			>
				{children}
			</a>
		</li>
	);
}
