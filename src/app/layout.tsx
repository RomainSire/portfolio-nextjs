import { rokkittFont, ubuntuFont } from "@/lib/fonts";
import "@/styles/globals.scss";
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
	title: {
		template: "%s | Romain Siré - Frontend Developer",
		default: "Romain Siré - Frontend Developer",
	},
	description: "I am a freelance front-end developer for hire, and I also code fun apps on my free time.",
	metadataBase: new URL("https://romainsire.com"),
};

/**
 * Root layout
 */
export default function RootLayout({ children }: Props) {
	return (
		<html lang="en">
			<body className={`${ubuntuFont.variable} ${rokkittFont.variable}`}>{children}</body>
		</html>
	);
}
