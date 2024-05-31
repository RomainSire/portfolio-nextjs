"use client";
import { contrast } from "@/lib/colors";
import style from "./Badge.module.scss";

type BadgeProps = {
	/**
	 * Text to be displayed inside badge
	 */
	children: string;
	/**
	 * Background color of the badge
	 */
	bgColor: string;
	/**
	 * Icon to be displayed inside badge
	 */
	icon?: React.ReactNode;
	/**
	 * Additional class name
	 */
	className?: string;
};

/**
 * Badge component
 */
export default function Badge({ children, bgColor, icon, className }: BadgeProps) {
	// Calculate whick text color to use based on the background color
	const baseColor = "#272116";
	const neutralColor = "#fffaf0";
	const contrastToDark = contrast(baseColor, bgColor);
	const contrastToLight = contrast(neutralColor, bgColor);
	const textColorClass = contrastToLight > contrastToDark ? style.txtLight : "";

	return (
		<span
			className={`${style.badge} ${textColorClass} ${className}`}
			style={{
				backgroundColor: bgColor,
			}}
		>
			{icon}
			{children}
		</span>
	);
}
