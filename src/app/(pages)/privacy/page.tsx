import style from "./page.module.scss";

export default function PrivacyPage() {
	return (
		<div className={style.wrapper}>
			<h2>Politique de confidentialité</h2>
			<p>En vigueur au 01 juin 2024</p>
			<p>Chez Romain SIRE EI, la protection de vos données personnelles est une priorité.</p>
			<p>
				Lors de votre utilisation du site internet https://romainsire.com (ci-après le « Site »), nous sommes amenés à
				recueillir des données à caractère personnel vous concernant.
			</p>
			<p>
				Le but de cette politique est de vous informer sur les modalités selon lesquelles nous traitons ces données en
				conformité avec le Règlement (UE) 2016/679 du 27 avril 2016 relatif à la protection des personnes physiques à
				l’égard du traitement des données à caractère personnel et à la libre circulation de ces données (ci-après le
				« RGPD »).
			</p>

			<h3>1. Qui est le responsable de traitement ?</h3>
			<p>
				Le responsable de traitement est la société Romain SIRE, Entreprise Individuelle, et dont le siège social est
				situé au 10 El Plaçal, 66500 Mosset (ci-après « Nous »).
			</p>

			<h3>2. Quelles données collectons-nous ? </h3>
			<p>
				Une donnée à caractère personnel est une donnée qui permet d’identifier un individu directement ou par
				recoupement avec d’autres données.
			</p>
			<p>Nous collectons des données qui relèvent des catégories suivantes :</p>
			<ul>
				<li>Des données d’identification (notamment vos nom, prénoms, et adresse email)</li>
				<li>Toute information que vous souhaitez nous transmettre dans le cadre de votre demande de contact</li>
				<li>Des données Internet (par exemple adresse IP)</li>
			</ul>
			<p>
				Les données obligatoires sont indiquées lorsque vous nous fournissez vos données. Elles sont toutes obligatoires
				et sont nécessaires pour vous fournir nos services.
			</p>

			<h3>
				3. Sur quelles bases légales, pour quelles finalités et pendant combien de temps conservons-nous vos données
				personnelles ?
			</h3>
			<p>Nous traitons vos données personnelles sur les bases légales suivantes :</p>
			<ul>
				<li>
					{/* contact */}
					Répondre à vos demandes de contact, vous fournir un devis et vous recontacter le cas échéant
					<ul>
						<li>Base légale : Exécution de mesures précontractuelles prises à votre demande</li>
						<li>
							Durée de conservation : Vos données sont conservées pour une durée de 3 ans à compter du dernier contact
							de votre part.
						</li>
					</ul>
				</li>
				<li>
					{/* obligations légales */}
					Respecter nos obligations légales
					<ul>
						<li>Base légale : Respect d’une obligation légale</li>
						<li>Durée de conservation : 3 ans à compter de la collecte</li>
					</ul>
				</li>
				<li>
					{/* amélioration du site */}
					Améliorer notre Site
					<ul>
						<li>Base légale : Notre intérêt légitime à développer et promouvoir notre activité</li>
						<li>Durée de conservation : 13 mois</li>
					</ul>
				</li>
			</ul>

			<h3>4. Qui sont les destinataires de vos données ?</h3>
			<p>Auront accès à vos données à caractère personnel :</p>
			<ul>
				<li>Le personnel de notre société</li>
				<li>
					Le cas échéant : les organismes publics et privés, exclusivement pour répondre à nos obligations légales.
				</li>
			</ul>

			<h3>5. Vos données sont-elles susceptibles d’être transférées hors de l’Union européenne ?</h3>
			<p>
				Vos données sont conservées et stockées pendant toute la durée des traitements sur les serveurs de la société
				Tutanota GmbH (service de messagerie chiffrée), situés en Allemagne.
			</p>
			<p>
				Le temps du transfert vers les serveurs de Tutanota, vos données transitent par les serveurs européens de
				Mailgun (service d’API d’envoi de mails), pendant 24 heures.
			</p>
			<p>
				Dans le cadre des outils que nous utilisons, vos données ne sont donc pas susceptibles de faire l’objet de
				transferts hors de l’Union européenne.
			</p>

			<h3>6. Quels sont vos droits sur vos données ?</h3>
			<p>Vous disposez des droits suivants s’agissant de vos données personnelles :</p>
			<ul>
				<li>
					Droit à l’information : c’est justement la raison pour laquelle nous avons rédigé la présente politique. Ce
					droit est prévu par les articles 13 et 14 du RGPD.{" "}
				</li>
				<li>
					Droit d’accès : vous avez le droit d’accéder à tout moment à l’ensemble de vos données personnelles, en vertu
					de l’article 15 du RGPD.
				</li>
				<li>
					Droit de rectification : vous avez le droit de rectifier à tout moment vos données personnelles inexactes,
					incomplètes ou obsolètes conformément à l’article 16 du RGPD
				</li>
				<li>
					Droit à la limitation : vous avez le droit d’obtenir la limitation du traitement de vos données personnelles
					dans certains cas définis à l’article 18 du RGPD.
				</li>
				<li>
					Droit à l’effacement : vous avez le droit d’exiger que vos données personnelles soient effacées, et d’en
					interdire toute collecte future pour les motifs énoncés à l’article 17 du RGPD
				</li>
				<li>
					Droit d’introduire une réclamation auprès d’une autorité de contrôle compétente (en France, la CNIL), si vous
					considérez que le traitement de vos données personnelles constitue une violation des textes applicables.
					(Article 77 du RGPD)
				</li>
				<li>
					Droit de définir des directives relatives à la conservation, à l’effacement et à la communication de vos
					données personnelles après votre mort.{" "}
				</li>
				<li>
					Droit de retirer votre consentement à tout moment : pour les finalités fondées sur le consentement, l’article
					7 du RGPD dispose que vous pouvez retirer votre consentement à tout moment. Ce retrait ne remettra pas en
					cause la légalité du traitement effectué avant le retrait.
				</li>
				<li>
					Droit à la portabilité : selon certaines conditions précisées à l’article 20 du RGPD, vous avez le droit de
					recevoir les données personnelles que vous nous avez fournies dans un format standard lisible par machine et
					d’exiger leur transfert au destinataire de votre choix.
				</li>
				<li>
					Droit d’opposition : en vertu de l’article 21 du RGPD, vous avez le droit de vous opposer au traitement de vos
					données personnelles. Notez toutefois que nous pourrons maintenir leur traitement malgré cette opposition,
					pour des motifs légitimes ou la défense de droits en justice.
				</li>
			</ul>
			<p>
				Vous pouvez exercer ces droits en nous écrivant aux coordonnées ci-dessous. Nous pourrons vous demander à cette
				occasion de nous fournir des informations ou documents complémentaires pour justifier votre identité.
			</p>

			<h3>7. Point de contact en matière de données personnelles </h3>
			<p>Email de contact : support@romainsire.com</p>

			<h3>8. Modifications</h3>
			<p>
				Nous pouvons modifier à tout moment la présente politique, afin notamment de nous conformer à toutes évolutions
				réglementaires, jurisprudentielles, éditoriales ou techniques. Ces modifications s’appliqueront à la date
				d’entrée en vigueur de la version modifiée. Vous êtes donc invité à consulter régulièrement la dernière version
				de cette politique. Néanmoins, nous vous tiendrons informé(e) de toute modification significative de la présente
				politique de confidentialité.
			</p>
		</div>
	);
}
