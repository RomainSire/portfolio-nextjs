import Image from "next/image";
import style from "./Hero.module.scss";

export default function Hero() {
	return (
		<section className={style.hero}>
			<Image
				src="/profile.jpeg"
				alt="Une photo portrait de moi avec un parc en arrière-plan."
				width={350}
				height={350}
				className={style.img}
			/>
			<h1 className={style.title}>Romain Siré</h1>
			<p>
				<strong>Développeur frontend freelance</strong> à votre service,
				<br />
				j’aime aussi coder des petites applis pendant mon temps libre.
			</p>
		</section>
	);
}
