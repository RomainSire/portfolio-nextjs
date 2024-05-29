import style from "./Logo.module.scss";

const logoTitle = "Romain Siré";

export default function Logo() {
	return (
		<h1>
			<a
				className={style.link}
				href="/"
			>
				<span className={style.before}>&#60;</span>
				<span
					className={style.text}
					data-content={logoTitle}
				>
					{logoTitle}
				</span>
				<span className={style.after}>&#47;&#62;</span>
			</a>
		</h1>
	);
}
