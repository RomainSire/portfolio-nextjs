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
	description:
		"Welcome to the portfolio of Romain Siré, a freelance frontend developer specializing in Typescript, React, Next.Js, Astro, and SASS. Discover his professional journey, explore his work, read insightful blog posts, and get in touch for collaborations or discussions.",
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
