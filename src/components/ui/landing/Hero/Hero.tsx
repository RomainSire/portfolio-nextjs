import Image from "next/image";
import style from "./Hero.module.scss";

export default function Hero() {
	return (
		<section className={style.hero}>
			<Image
				src="/profile.webp"
				alt="Une photo portrait de moi avec un parc en arrière-plan."
				width={350}
				height={350}
				className={`entry-animation slide ${style.img}`}
			/>
			<h1 className={`entry-animation slide delay-1 ${style.title}`}>Romain Siré</h1>
			<p className="entry-animation slide delay-2">
				<strong>Développeur frontend freelance</strong> à votre service,
				<br />
				j’aime aussi coder des petites applis pendant mon temps libre.
			</p>
		</section>
	);
}
