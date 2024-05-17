import Link from "next/link";

type Props = Readonly<{
	children: React.ReactNode;
}>;

export default function PagesLayout({ children }: Props) {
	return (
		<>
			<nav>
				<ul>
					<li>
						<Link href={`/`}>Home</Link>
					</li>
					<li>
						<Link href={`/about`}>About</Link>
					</li>
					<li>
						<Link href={`/work`}>Work</Link>
					</li>
					<li>
						<Link href={`/blog`}>Blog</Link>
					</li>
					<li>
						<Link href={`/contact`}>Contact</Link>
					</li>
				</ul>
			</nav>
			<main>{children}</main>
		</>
	);
}
