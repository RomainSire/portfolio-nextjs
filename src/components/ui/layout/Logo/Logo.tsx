import style from "./Logo.module.scss";

export default function Logo() {
	return (
		<h1 className={style.title}>
			<a
				className={style.link}
				href="/"
			>
				Romain Siré
			</a>
		</h1>
	);
}
