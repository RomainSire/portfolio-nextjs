import { Rokkitt, Ubuntu } from "next/font/google";

export const ubuntuFont = Ubuntu({
	subsets: ["latin"],
	weight: ["400", "700"],
	variable: "--font-text",
});

export const rokkittFont = Rokkitt({
	subsets: ["latin"],
	weight: "800",
	variable: "--font-heading",
});
