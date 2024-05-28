"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
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
};

export default function NavItem({ href, children }: NavItemProps) {
	const pathname = usePathname();
	return (
		<li className={`${style.listItem} ${pathname === href ? style.active : ""}`}>
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
