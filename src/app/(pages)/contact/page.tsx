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
			<h2>Discutons de votre projet !</h2>
			<section>
				<h3 className={style.subtitle}>Venez me rejoindre sur...</h3>
				<SocialBtns />
			</section>
			<section>
				<h3 className={style.subtitle}>Ou envoyez-moi directement un message</h3>
				<ContactForm />
			</section>
		</div>
	);
}
