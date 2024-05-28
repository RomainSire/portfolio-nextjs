import Link from "next/link";
import style from "./Navigation.module.scss";

export default function Navigation() {
	return (
		<nav>
			<ul
				className={style.list}
				role="list"
			>
				<li>
					<Link
						className={style.link}
						href={`/about`}
					>
						About
					</Link>
				</li>
				<li>
					<Link
						className={style.link}
						href={`/work`}
					>
						Work
					</Link>
				</li>
				<li>
					<Link
						className={style.link}
						href={`/blog`}
					>
						Blog
					</Link>
				</li>
				<li>
					<Link
						className={style.link}
						href={`/contact`}
					>
						Contact
					</Link>
				</li>
			</ul>
		</nav>
	);
}
