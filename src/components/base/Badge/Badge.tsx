"use client";
import { contrast, lightenColor } from "@/lib/colors";
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
	 * Lighten the background color
	 * @default true
	 */
	lightenBgColor?: boolean;
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
export default function Badge({ children, bgColor, lightenBgColor = true, icon, className }: BadgeProps) {
	// Lighten the given background color
	const lightBgColor = lightenBgColor ? lightenColor(bgColor, 60) : bgColor;

	// Determinates the text color (light or dark) based on the background color
	const baseColor = "#272116";
	const neutralColor = "#fffaf0";
	const contrastToDark = contrast(baseColor, lightBgColor);
	const contrastToLight = contrast(neutralColor, lightBgColor);
	const textColorClass = contrastToLight > contrastToDark ? style.txtLight : "";

	return (
		<span
			className={`${style.badge} ${textColorClass} ${className}`}
			style={{
				backgroundColor: lightBgColor,
			}}
		>
			{icon}
			{children}
		</span>
	);
}
