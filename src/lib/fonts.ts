import { Kreon, Ubuntu } from "next/font/google";

export const kreonFont = Kreon({
	subsets: ["latin"],
	weight: "700",
	variable: "--font-heading",
});

export const ubuntuFont = Ubuntu({
	subsets: ["latin"],
	weight: ["400", "700"],
	variable: "--font-text",
});
