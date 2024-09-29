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
					src="/logo.svg"
					alt="Logo: un cercle vert"
					width={32}
					height={32}
					className={style.logo}
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
