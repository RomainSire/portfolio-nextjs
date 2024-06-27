import btnStyle from "@/styles/button.module.scss";
import { Sparkle } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import style from "./WhoAmI.module.scss";

export default function WhoAmI() {
	return (
		<section className={style.section}>
			<h1 className={`entry-animation slide ${style.title}`}>Qui suis-je ?</h1>
			<p className="entry-animation slide delay-1">
				Avec un background de 10 ans dans l’ingénierie et les EnR, j’ai ensuite pivoté vers le dynamique monde du
				développement web, séduit par les <strong>possibilités infinies</strong> et la <strong>créativité</strong> qu’il
				permet.
			</p>
			<p className="entry-animation slide delay-2">
				En alliant mon sens aigu du détail à une approche collaborative, je crée des applications web qui s’alignent
				parfaitement sur les <strong>besoins spécifiques de mes clients</strong>. Je maîtrise parfaitement les langages
				et frameworks front-end les plus récents, tels que React, Next.js et TypeScript, ce qui me permet de concevoir
				des interfaces intuitives et performantes.
			</p>
			<p className="entry-animation slide delay-3">
				Mon parcours atypique me confère une <strong>perspective unique</strong>. Mon expertise en ingénierie me
				garantit une approche rigoureuse et analytique, tandis que mon expérience dans le domaine des énergies
				renouvelables m’a inculqué une compréhension profonde des enjeux environnementaux et sociétaux, que j’intègre
				dans mes projets.
			</p>
			<p className="entry-animation slide delay-4">
				En tant que <strong>développeur frontal freelance</strong>, je m’épanouis dans la flexibilité et l’autonomie que
				ce statut me confère. Je suis particulièrement attiré par des projets de 6 mois environ avec des startups ou des
				petites équipes. Cependant, je reste ouvert à de nouveaux défis, y compris des opportunités dans des
				organisations plus importantes.
			</p>
			<Link
				className={`entry-animation slide delay-5 ${btnStyle.button}`}
				href="/contact"
			>
				<Sparkle size={24} />
				<span>Discutons de votre projet !</span>
				<Sparkle size={24} />
			</Link>
		</section>
	);
}
