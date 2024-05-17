import { kreonFont, ubuntuFont } from "@/lib/fonts";
import "@/styles/_reset.css";
import "@/styles/globals.css";
import type { Metadata } from "next";

type Props = Readonly<{
	/**
	 * The children nodes.
	 */
	children: React.ReactNode;
}>;

/**
 * Root layout metadata
 */
export const metadata: Metadata = {
	title: "Romain Siré - Frontend Developer",
	description: "I am a freelance front-end developer for hire, and I also code fun apps on my free time.",
};

/**
 * Root layout
 */
export default function RootLayout({ children }: Props) {
	return (
		<html lang="en">
			<body className={`${kreonFont.variable} ${ubuntuFont.variable}`}>{children}</body>
		</html>
	);
}
