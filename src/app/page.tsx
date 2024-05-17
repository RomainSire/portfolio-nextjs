import styles from "./page.module.css";

export default function HomePage() {
	return (
		<main className={styles.main}>
			<h1>Hey dude !</h1>
			<nav>
				<ul role="list">
					<li>
						<a href="/about">About</a>
					</li>
					<li>
						<a href="/work">Work</a>
					</li>
					<li>
						<a href="/blog">Blog</a>
					</li>
					<li>
						<a href="/contact">Contact</a>
					</li>
				</ul>
			</nav>
		</main>
	);
}
