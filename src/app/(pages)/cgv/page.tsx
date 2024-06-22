import { Metadata } from "next";
import style from "./page.module.scss";

export const metadata: Metadata = {
	title: "Conditions Générales de Vente",
	description: "Consultez les conditions générales de vente de Romain SIRE EI, freelance en développement web.",
};

export default function CGVPage() {
	return (
		<div className={style.wrapper}>
			<h1>Conditions Générales de Vente</h1>
			<p>En vigueur au 01 juin 2024</p>

			<section>
				<h2>Article 1 : Objet</h2>
				<p>
					Les présentes conditions générales de vente (ci-après dénommées « CGV ») définissent les modalités de
					prestation de services de développement informatique par Romain SIRE EI (ci-après dénommé le « Prestataire »)
					auprès de ses clients (ci-après dénommés le « Client »).
				</p>
				<p>
					Les CGV s’appliquent à toutes les prestations de développement informatique proposées par le Prestataire, à
					l’exclusion des prestations expressément exclues dans les présentes.
				</p>
				<p>
					En cas de contradiction entre une disposition des présentes CGV et une disposition d’un devis ou d’un contrat
					de prestation de services, la disposition du devis ou du contrat de prestation de services prévaudra.
				</p>
				<p>
					Les CGV sont susceptibles de faire l’objet de modifications par le Prestataire. Le Client sera informé de
					toute modification par courrier électronique. Les modifications prendront effet à compter de la date de leur
					notification.
				</p>
			</section>

			<section>
				<h2>Article 2 : Définitions</h2>
				<p>Au sens des présentes CGV, les termes suivants sont définis comme suit :</p>
				<ul>
					<li>
						<strong>Client :</strong> Toute personne physique ou morale qui souscrit une prestation de développement
						informatique auprès du Prestataire.
					</li>
					<li>
						<strong>Prestataire :</strong> Romain SIRE EI, prestataire de services de développement web, dont le siège
						social est situé à 10 El Plaçal 66500 MOSSET, et dont le SIRET est 81775938400024.
					</li>
					<li>
						<strong>Contrat :</strong> Désigne indifféremment le devis ou le contrat de prestation de services signé par
						le Développeur et le Client, qui définit l’objet de la mission, les prestations à réaliser, les prix, les
						délais, les conditions de paiement et les autres conditions contractuelles applicables à la prestation.
					</li>
					<li>
						<strong>Prestation :</strong> Ensemble des services de développement informatique fournis par le Prestataire
						au Client, tels que définis dans le contrat. Cela peut inclure, mais sans s’y limiter, le développement
						d’applications web, de sites web, de modules, etc.
					</li>
					<li>
						<strong>Site web :</strong> Site internet développé par le Prestataire pour le compte du Client.
					</li>
					<li>
						<strong>Hébergement :</strong> Mise à disposition d’un espace de stockage sur un serveur pour héberger le
						site web ou l’application web du Client.
					</li>
					<li>
						<strong>Maintenance :</strong> Ensemble des interventions effectuées par le Prestataire pour assurer le bon
						fonctionnement du site web ou de l’application web du Client.
					</li>
					<li>
						<strong>Application web :</strong> Logiciel applicatif accessible directement en ligne via un navigateur
						web, sans installation sur l’appareil du Client.
					</li>
					<li>
						<strong>Interface utilisateur :</strong> Partie visible d’une application web avec laquelle le Client
						interagit.
					</li>
					<li>
						<strong>Base de données :</strong>Ensemble structuré de données accessible via l’application web.
					</li>
					<li>
						<strong>API (Application Programming Interface) :</strong> Interface de programmation qui permet à d’autres
						applications d’interagir avec l’application web.
					</li>
				</ul>
			</section>

			<section>
				<h2>Article 3 : Formation du contrat</h2>
				<p>Cet article définit les étapes de la formation du contrat entre le Prestataire et le Client.</p>

				<h3>3.1. Demande de prestation</h3>
				<p>
					Le Client contacte le Prestataire par courrier électronique, téléphone ou via le formulaire de contact du site
					web du Prestataire pour obtenir un contrat pour une prestation de développement web.
				</p>

				<h3>3.2. Établissement du contrat</h3>
				<p>
					Le Prestataire analyse les besoins du Client et établit un contrat (devis ou contrat de prestation de service)
					détaillé, précisant :
				</p>
				<ul>
					<li>La nature des prestations à réaliser</li>
					<li>Le prix des prestations</li>
					<li>Les délais de réalisation</li>
					<li>Les conditions de paiement</li>
					<li>Les modalités de réception des prestations</li>
					<li>Les garanties contractuelles</li>
				</ul>
				<p>Le contrat est transmis au Client par courrier électronique.</p>

				<h3>3.3. Acceptation du contrat</h3>
				<p>
					Le Client retourne le contrat signé (manuellement ou électroniquement) au Prestataire, accompagnée de
					l’acompte éventuellement prévu. L’acompte est payable par virement bancaire.
				</p>

				<h3>3.4. Conclusion du contrat</h3>
				<p>
					Le contrat de prestation de services est formé à la date de réception du devis signé et de l’éventuel acompte
					par le Prestataire.
				</p>

				<h3>3.5. Modifications du contrat</h3>
				<p>
					Le contrat peut être modifié après acceptation par le Client, à la demande du Client ou du Prestataire. Toute
					modification du contrat doit faire l’objet d’un avenant signé par les deux parties.
				</p>

				<h3>3.6. Annulation de la commande</h3>
				<p>
					Le Client peut annuler sa commande à tout moment <strong>avant le début des prestations</strong>. L’acompte
					versé par le Client lui sera remboursé dans un délai de 14 jours suivant la notification de l’annulation de la
					commande.
				</p>

				<h3>3.7. Signature</h3>
				<p>Les signatures manuelle ou électronique du devis ou du contrat sont valables entre les parties.</p>
			</section>

			<section>
				<h2>Article 4 : Objet de la mission</h2>
				<p>L’objet de chaque mission est précisément défini dans le contrat.</p>
				<p>Le contrat précise notamment :</p>
				<ul>
					<li>La nature des prestations à réaliser</li>
					<li>Le périmètre des prestations</li>
					<li>Les livrables attendus</li>
					<li>Les délais de réalisation ou la durée de la mission</li>
					<li>Les conditions de modification des prestations</li>
					<li>Les conditions de réception des prestations</li>
					<li>Les garanties contractuelles</li>
				</ul>
				<p>
					Le Client s’engage à fournir au Prestataire toutes les informations nécessaires à la bonne réalisation de la
					mission.
				</p>
			</section>

			<section>
				<h2>Article 5 : Modalités de réalisation de la Mission</h2>
				<p>
					Le prestataire s’engage envers le Client à réaliser la Mission telle que définie dans le contrat, avec le plus
					grand professionnalisme, à respecter les dispositions légales et réglementaires applicables et à se conformer
					aux normes et procédures applicables. Le prestataire s’engage à mobiliser les moyens techniques nécessaires à
					l’exécution de la Mission.
				</p>
				<p>
					Le Client s’engage à coopérer pleinement avec le Prestataire en vue de faciliter au mieux les conditions
					d’intervention du Prestataire et la bonne exécution des présentes et, à cet effet, notamment ne rien faire ou
					laisser faire qui puisse être de nature à empêcher l’exécution par le Prestataire de la Mission ou de la
					rendre plus difficile ou onéreuse, et informer en temps utile le Prestataire de toute décision, tout élément
					et toute précision susceptibles d’avoir un impact sur la Mission.
				</p>
			</section>

			<section>
				<h2>Article 6 : Prix</h2>

				<h3>6.1. Base de détermination du prix</h3>
				<p>Le prix des prestations est déterminé selon les modalités suivantes :</p>
				<ul>
					<li>
						<strong>Forfait :</strong> Le prix est fixé forfaitairement dans le contrat pour l’ensemble des prestations
						prévues.
					</li>
					<li>
						<strong>Taux horaire :</strong> Le prix est déterminé en fonction du temps passé par le Prestataire sur la
						prestation, selon un taux horaire fixé dans le contrat.
					</li>
				</ul>

				<h3>6.2. Frais annexes</h3>
				<p>
					Les frais annexes éventuels, tels que les frais de déplacement, d’hébergement ou de matériel, sont facturés au
					Client en sus du prix des prestations. Ces frais sont précisés dans le contrat.
				</p>

				<h3>6.3. Révision du prix</h3>
				<p>Le prix des prestations peut être révisé dans les cas suivants :</p>
				<ul>
					<li>Changement significatif des besoins du Client</li>
					<li>Augmentation des coûts des fournitures ou des services nécessaires à la réalisation des prestations</li>
					<li>Délai de réalisation des prestations différent de celui prévu dans le contrat</li>
				</ul>
				<p>Toute révision du prix fera l’objet d’un avenant au contrat signé par les deux parties.</p>

				<h3>6.4. Modalités de paiement</h3>
				<p>Le Client s’engage à régler la facture dans un délai de 30 jours suivant sa réception.</p>
				<p>Le Client peut régler ses factures par virement bancaire.</p>

				<h3>6.5. Pénalités de retard de paiement</h3>
				<p>
					En cas de retard de paiement, le Client s’expose à des pénalités de retard (3 x le taux de l’intérêt légal à
					la date de la signature du devis) et à une indemnité forfaitaire de 40€ pour frais de recouvrements à verser
					au Prestataire.
				</p>

				<h3>6.6. Acomptes</h3>
				<p>
					Si expressément mentionné dans le contrat, un acompte de 30% du prix total des prestations peut être exigé et
					est payable à la signature du devis.
				</p>
				<p>L’acompte est versé par virement bancaire.</p>
			</section>

			<section>
				<h2>Article 7 : Résiliation anticipée du contrat</h2>
				<p>
					Dans le cas d’une tarification au taux horaire, le contrat pourra être résilié à tout instant par chacune des
					parties, sous la réserve d’un préavis de deux semaines.
				</p>
				<p>
					Dans cette hypothèse, le Prestataire facturera au Client les journées de travail effectivement effectuées
					jusqu’à la date de prise d’effet de la résiliation et le client pourrait faire l’usage le plus libre des
					informations qui lui auraient été communiquées, ou des livrables d’ores et déjà remis.
				</p>
			</section>

			<section>
				<h2>Article 8 : Déclaration d’indépendance réciproque</h2>
				<p>
					La relation établie entre le Client et le Prestataire est celle d’entreprises indépendantes et autonomes.
					Aucune clause du contrat ne pourra être interprétée comme donnant à l’une des Parties le pouvoir de diriger
					les activités de l’autre Partie ni de contrôler l’autre d’une manière ou d’une autre. Le contrat vise
					exclusivement l’objet défini en son Article 1 et ne contient aucune forme ni intention de constituer une
					société de droit ou de fait, les Parties étant dépourvues d’affectio societatis. Le prestataire pourra
					s’organiser librement dans l’exécution du Contrat, dans la mesure où il n’existe entre les Parties aucun lien
					de subordination mais uniquement un lien contractuel de nature commerciale.
				</p>
				<p>
					Aucune des Parties ne pourra, en outre, sauf mandat particulier écrit, exprès et préalable de l’autre Partie,
					être considéré comme représentant de l’autre Partie, et ce à quelque titre et sous quelque modalité que ce
					soit.
				</p>
				<p>
					Il est expressément convenu que le contrat est spécifique et qu’aucune de ses stipulations ne peut amener à
					des revendications autres que celles découlant des obligations expressément prévues dans le Contrat.
				</p>
				<p>
					Le présent Contrat n’habilite en aucun cas le Prestataire à engager le Client vis-à-vis de quiconque dans la
					mesure où il ne comporte aucun mandat.
				</p>
				<p>
					Il est enfin précisé en tant que de besoin que le client sera libre de suivre ou non toutes préconisations
					éventuelles du Prestataire.
				</p>
			</section>

			<section>
				<h2>Article 9 – Obligation de confidentialité</h2>
				<p>
					Le prestataire considérera comme strictement confidentiel, et s’interdit de divulguer, toute information,
					document, donnée ou concept, dont il pourra avoir connaissance à l’occasion du présent contrat. Pour
					l’application de la présente clause, le prestataire répond de ses salariés comme de lui-même. Le prestataire,
					toutefois, ne saurait être tenu pour responsable d’aucune divulgation si les éléments divulgués étaient dans
					le domaine public à la date de la divulgation, ou s’il en avait déjà connaissance antérieurement à la date de
					signature du présent contrat, ou s’il les obtenait de tiers par des moyens légitimes.
				</p>
			</section>

			<section>
				<h2>Article 10 – Référencement</h2>
				<p>
					Le client accepte que le prestataire puisse faire figurer parmi ses références les travaux accomplis dans le
					cadre du présent contrat.
				</p>
			</section>

			<section>
				<h2>Article 11 – Propriété des résultats</h2>
				<p>
					De convention expresse, les résultats de la Mission seront en la pleine maîtrise du client, à compter du
					paiement intégral de la prestation et le client pourra en disposer comme il l’entend. Le prestataire, pour sa
					part, s’interdit de faire état des résultats dont il s’agit et de les utiliser de quelque manière, sauf à
					obtenir préalablement l’autorisation écrite du client.
				</p>
			</section>

			<section>
				<h2>Article 12 – Garanties</h2>
				<p>
					Le prestataire garantit le client contre toute revendication de tiers alléguée à l’encontre du client et
					concernant les éléments, ou informations, fournis par le prestataire au client.
				</p>
			</section>

			<section>
				<h2>Article 13 – Responsabilités</h2>
				<p>
					Le client convient que, quels que soient les fondements de sa réclamation, et la procédure suivie pour la
					mettre en œuvre, la responsabilité éventuelle du prestataire à raison de l’exécution des obligations prévues
					au présent contrat, sera limitée à un montant n’excédant pas la somme totale effectivement payée par le
					client, pour les services ou tâches fournis par le prestataire.
				</p>
				<p>
					Le prestataire dégage sa responsabilité à l’égard des dommages matériels pouvant atteindre les immeubles,
					installations, matériels, mobiliers du client.
				</p>
				<p>
					Le client convient que le prestataire n’encourra aucune responsabilité à raison de toute perte de bénéfices,
					de trouble commercial, de demandes que le client subirait; de demandes ou de réclamations formulées contre le
					client et émanant d’un tiers quel qu’il soit.{" "}
				</p>
			</section>

			<section>
				<h2>Article 14 – Assurance</h2>
				<p>
					Le Prestataire souscrit une assurance responsabilité civile professionnelle pour couvrir les dommages causés à
					des tiers dans le cadre de l’exécution du présent Contrat.
				</p>
				<p>Le Prestataire fournira au Client une attestation d’assurance sur demande.</p>
			</section>

			<section>
				<h2>Article 15 – Force majeure</h2>
				<p>
					On entend par force majeure des événements de guerre déclarés ou non déclarés, de grève générale de travail,
					de maladies épidémiques, de mise en quarantaine, d’incendie, de catastrophes naturelles, d’accidents ou
					d’autres événements indépendants de la volonté des deux parties.
				</p>
				<p>
					Aucune des deux parties ne sera tenue responsable du retard constaté en raison des événements de force
					majeure.
				</p>
			</section>

			<section>
				<h2>Article 16 – Dispositions générales</h2>

				<h3>16.1. Bonne foi et coopération</h3>
				<p>
					Les Parties s’engagent à toujours se comporter l’une envers l’autre comme des partenaires loyaux et de bonne
					foi et notamment à s’informer mutuellement de toute difficulté qu’elles pourraient rencontrer à l’occasion de
					l’exécution du Contrat ainsi qu’à coopérer à la bonne exécution du Contrat.
				</p>

				<h3>16.2. Modification du Contrat</h3>
				<p>
					Aucun document postérieur, aucune modification du Contrat quelle qu’en soit la forme ne produira d’effet entre
					les Parties sans prendre la forme d’un avenant daté et signé par elles.
				</p>

				<h3>16.3. Nullité</h3>
				<p>
					Si l’une quelconque des stipulations du Contrat s’avérait nulle au regard d’une règle de droit en vigueur ou
					d’une décision judiciaire devenue définitive, elle serait alors réputée non écrite, sans pour autant entraîner
					la nullité du Contrat ni altérer la validité des autres stipulations.
				</p>

				<h3>16.4. Droit applicable</h3>
				<p>Le Contrat est soumis au droit français.</p>
			</section>
		</div>
	);
}
