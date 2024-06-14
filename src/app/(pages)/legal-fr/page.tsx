import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Mentions légales",
	description:
		"Consultez les mentions légales de Romain Sire, développeur frontend freelance. Cette page fournit des informations légales importantes sur l'utilisation de ce site Web, y compris les droits d'auteur, la clause de non-responsabilité et la politique de confidentialité. Restez informé de vos droits et responsabilités en tant qu'utilisateur de ce site.",
};

export default function LegalNoticesEnPage() {
	return <h1>Mentions légales</h1>;
}
