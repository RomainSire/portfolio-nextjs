import Image from "next/image";
import style from "./Logo.module.scss";

const logoTitle = "Romain Siré";

export default function Logo() {
	return (
		<div>
			<a
				className={style.link}
				href="/"
			>
				<Image
					src="/icon.svg"
					alt="Logo de l'app: une forme géométrique noire sur fond jaune."
					width={32}
					height={32}
				/>
				<span
					className={style.text}
					data-content={logoTitle}
				>
					{logoTitle}
				</span>
			</a>
		</div>
	);
}
