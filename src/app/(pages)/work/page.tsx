import { getWorkItems } from "@/actions/workItemsActions";
import WorkItem from "@/components/ui/work/WorkItem/WorkItem";
import { Metadata } from "next";
import style from "./page.module.scss";

export const metadata: Metadata = {
	title: "Réalisations",
	description:
		"Explorez le portfolio de Romain Siré, développeur frontend freelance. Découvrez une gamme de projets, allant des applications web pour encourager les énergies renouvelables à son portfolio personnel et un petit réseau social. Chaque projet met en valeur une combinaison unique de compétences en design, code, déploiement et gestion de projet.",
};

export default async function WorkPage() {
	const workItems = await getWorkItems();

	return (
		<div className={style.wrapper}>
			{workItems.map((workItem, index) => (
				<WorkItem
					key={workItem.title}
					workItem={workItem}
					reverse={!(index % 2 === 0)}
					className={`entry-animation slide delay-${index}`}
				/>
			))}
		</div>
	);
}
