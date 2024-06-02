"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import style from "./LandingNavItem.module.scss";

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
	// Prevents the bullet from animating on initial render.
	const [isInitialRender, setIsInitialRender] = useState(true);
	useEffect(() => {
		setTimeout(() => setIsInitialRender(false), 200);
	}, []);

	return (
		<li className={style.listItem}>
			<Link href={href}>
				<span className={`${style.bullet} ${isInitialRender ? style.preload : ""}`}></span>
				<span className={style.text}>{children}</span>
			</Link>
		</li>
	);
}
