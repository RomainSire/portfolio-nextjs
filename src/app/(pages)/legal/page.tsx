import { Metadata } from "next";
import style from "./page.module.scss";

export const metadata: Metadata = {
	title: "Mentions légales",
	description: "Mentions légales du site romainsire.com",
};

export default function LegalPage() {
	return (
		<div className={style.wrapper}>
			<h1>Mentions légales</h1>
			<p>En vigueur au 01 juin 2024</p>
			<p>
				Conformément aux dispositions des Articles 6-III et 19 de la Loi n°2004-575 du 21 juin 2004 pour la Confiance
				dans l’économie numérique, dite L.C.E.N., il est porté à la connaissance des utilisateurs et visiteurs, ci-après
				l’« Utilisateur », du site http://romainsire.com , ci-après le « Site », les présentes mentions légales.
			</p>
			<p>
				La connexion et la navigation sur le Site par l’Utilisateur implique acceptation intégrale et sans réserve des
				présentes mentions légales.
			</p>
			<p>
				Ces dernières sont accessibles sur le Site à la rubrique « <strong>Mentions légales</strong> ».
			</p>

			<h2>ARTICLE 1 - L’ÉDITEUR</h2>
			<p>
				L’édition et la direction de la publication du Site est assurée par Romain Siré, domiciliée 10 El Plaçal 66500
				Mosset FRANCE, dont le numéro de téléphone est 33679887956, et l’adresse e-mail support@romainsire.com.
			</p>
			<p>
				ci-après l’« <strong>Editeur</strong> ».
			</p>

			<h2>ARTICLE 2 - L’HÉBERGEUR</h2>
			<p>
				L’hébergeur du Site est la société HOSTINGER INTERNATIONAL LTD, dont le siège social est situé au 61 Lordou
				Vironos Street, 6023 Larnaca, Chypre, joignable à l’adresse : https://www.hostinger.fr/contact
			</p>

			<h2>ARTICLE 3 - ACCÈS AU SITE</h2>
			<p>
				Le Site est accessible en tout endroit, 7j/7, 24h/24 sauf cas de force majeure, interruption programmée ou non
				et pouvant découlant d’une nécessité de maintenance.
			</p>
			<p>En cas de modification, interruption ou suspension du Site, l’Editeur ne saurait être tenu responsable.</p>

			<h2>ARTICLE 4 - COLLECTE DES DONNÉES</h2>
			<p>
				Le Site assure à l’Utilisateur une collecte et un traitement d’informations personnelles (via le formulaire de
				contact) dans le respect de la vie privée conformément à la loi n°78-17 du 6 janvier 1978 relative à
				l’informatique, aux fichiers et aux libertés.
			</p>
			<p>
				En vertu de la loi Informatique et Libertés, en date du 6 janvier 1978, l’Utilisateur dispose d’un droit
				d’accès, de rectification, de suppression et d’opposition de ses données personnelles. L’Utilisateur exerce ce
				droit par mail à l’adresse email support@romainsire.com
			</p>
			<p>
				Toute utilisation, reproduction, diffusion, commercialisation, modification de toute ou partie du Site﻿, sans
				autorisation de l’Editeur est prohibée et pourra entraîner des actions et poursuites judiciaires telles que
				notamment prévues par le Code de la propriété intellectuelle et le Code civil.
			</p>
			<p>
				Pour plus d’informations, se reporter aux CGV du site http://romainsire.com/cgv accessible à la rubrique « CGV »{" "}
			</p>
			<p>
				Pour plus d’informations en matière de protection des données à caractère personnel , se reporter à la politique
				de confidentialité du site http://romainsire.com/privacy accessible à la rubrique « Politique de confidentialité
				».
			</p>
		</div>
	);
}
