import Image from "next/image";
import style from "./Hero.module.scss";

export default function Hero() {
	return (
		<section className={style.hero}>
			<div className={style.imgWrapper}>
				<Image
					src="/profile.jpeg"
					alt="My own headshot smiling in front of a park background"
					width={350}
					height={350}
					className={style.img}
				/>
			</div>
			<h1 className={style.title}>Romain Siré</h1>
			<p>
				I&apos;m a french <strong>freelance front-end developer</strong> for hire,
				<br />
				and I also like to code fun apps on my free time.
			</p>
		</section>
	);
}
