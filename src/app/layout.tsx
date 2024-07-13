import { rokkittFont, ubuntuFont } from "@/lib/fonts";
import "@/styles/globals.scss";
import type { Metadata } from "next";
import Script from "next/script";

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
		template: "%s | Romain Siré - Développeur frontend freelance",
		default: "Romain Siré - Développeur frontend freelance",
	},
	description:
		"Bienvenue sur le portfolio de Romain Siré, développeur frontend freelance spécialisé en Typescript, React, Next.Js, Astro et SASS. Découvrez son parcours professionnel, explorez ses réalisations, lisez des articles de blog et contactez-le pour des collaborations ou des discussions.",
	metadataBase: new URL("https://romainsire.com"),
	openGraph: {
		title: "Romain Siré - Développeur frontend freelance",
		description:
			"Bienvenue sur le portfolio de Romain Siré, développeur frontend freelance spécialisé en Typescript, React, Next.Js, Astro et SASS. Découvrez son parcours professionnel, explorez ses réalisations, lisez des articles de blog et contactez-le pour des collaborations ou des discussions.",
		url: "https://romainsire.com",
		siteName: "Romain Siré - Développeur frontend freelance",
		images: [
			{
				url: "https://romainsire.com/opengraph-image.jpg", // Must be an absolute URL
				width: 1200,
				height: 630,
			},
		],
		locale: "fr-FR",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
	},
};

/**
 * Root layout
 */
export default function RootLayout({ children }: Props) {
	return (
		<html lang="fr">
			<body className={`${ubuntuFont.variable} ${rokkittFont.variable}`}>{children}</body>
			<Script
				defer
				src="https://umami.romainsire.com/script.js"
				data-website-id="4b683a87-661a-4ad3-8d3a-942bfe54cc7b"
			/>
		</html>
	);
}
