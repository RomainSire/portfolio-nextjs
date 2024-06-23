import ContactForm from "@/components/ui/contact/ContactForm/ContactForm";
import SocialBtns from "@/components/ui/contact/SocialBtns/SocialBtns";
import { Metadata } from "next";
import style from "./page.module.scss";

export const metadata: Metadata = {
	title: "Contact",
	description:
		"Entrez en contact avec Romain Siré, développeur frontend freelance. Que vous ayez un projet en tête ou que vous souhaitiez simplement dire bonjour, Romain est toujours ouvert aux discussions. Contactez-le sur les réseaux sociaux ou envoyez-lui un message direct via le formulaire de contact.",
};

export default function ContactPage() {
	return (
		<div className={style.wrapper}>
			<h1 className="entry-animation slide">Discutons de votre projet !</h1>
			<section>
				<h2 className={`entry-animation slide delay-1 ${style.subtitle}`}>Venez me rejoindre sur...</h2>
				<SocialBtns className="entry-animation slide delay-2" />
			</section>
			<section>
				<h2 className={`entry-animation slide delay-3 ${style.subtitle}`}>Ou envoyez-moi directement un message</h2>
				<ContactForm />
			</section>
		</div>
	);
}
