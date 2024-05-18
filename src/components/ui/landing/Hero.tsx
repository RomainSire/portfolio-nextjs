import Image from "next/image";
import style from "./Hero.module.css";

export default function Hero() {
	return (
		<section>
			<Image
				src="/bison.jpeg"
				alt="a colorfoul and stylized painting of a bison's head with sunglasses"
				width={350}
				height={350}
				className={style.avatar}
			/>
			<h1 className={style.title}>Romain Siré</h1>
			<p>
				I&apos;m a french <strong>freelance front-end developer</strong> for hire,
				<br />
				and I also like to code fun apps on my free time.
			</p>
		</section>
	);
}
