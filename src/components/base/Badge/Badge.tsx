import style from "./Badge.module.scss";

type BadgeProps = {
	/**
	 * Text to be displayed inside badge
	 */
	children: string;
	/**
	 * Text color of the badge
	 */
	txtColor?: "dark" | "light";
	/**
	 * Background color of the badge
	 */
	bgColor?: string;
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
export default function Badge({ children, txtColor, bgColor, icon, className }: BadgeProps) {
	return (
		<span
			className={`${style.badge} ${txtColor === "light" ? style.txtLight : ""} ${className}`}
			style={{
				color: txtColor,
				backgroundColor: bgColor,
			}}
		>
			{icon}
			{children}
		</span>
	);
}
