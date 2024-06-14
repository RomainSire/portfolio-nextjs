import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Blog",
	description:
		"Dive into the insightful blog of Romain Sire, a freelance frontend developer. Explore a variety of topics from tutorials to trends in frontend development, project management, freelancing and more. Each post reflects Romain's expertise and passion for coding and technology.",
};

export default function BlogPage() {
	return <h1>Blog</h1>;
}
