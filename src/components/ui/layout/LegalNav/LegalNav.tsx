import Link from "next/link";
import style from "./LegalNav.module.scss";

export default function LegalNav() {
	return (
		<nav>
			<ul className={style.list}>
				<li>
					<Link
						href="/legal"
						className={style.link}
					>
						Mentions légales
					</Link>
				</li>
				<li>
					<Link
						href="/cgv"
						className={style.link}
					>
						CGV
					</Link>
				</li>
				<li>
					<Link
						href="/privacy"
						className={style.link}
					>
						Politique de confidentialité
					</Link>
				</li>
			</ul>
		</nav>
	);
}
