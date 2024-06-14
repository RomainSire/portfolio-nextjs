import Link from "next/link";
import style from "./LegalNav.module.scss";

export default function LegalNav() {
	return (
		<nav>
			<ul className={style.list}>
				<li>
					<Link
						href="/legal-fr"
						className={style.link}
					>
						Mentions légales (Fr)
					</Link>
				</li>
				<li>
					<Link
						href="/legal-en"
						className={style.link}
					>
						Legal Notices (En)
					</Link>
				</li>
			</ul>
		</nav>
	);
}
