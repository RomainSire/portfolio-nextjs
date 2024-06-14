import { getWorkItems } from "@/actions/workItemsActions";
import WorkItem from "@/components/ui/work/WorkItem/WorkItem";
import { Metadata } from "next";
import style from "./page.module.scss";

export const metadata: Metadata = {
	title: "Work",
	description:
		"Explore the portfolio of Romain Sire, a freelance frontend developer. Discover a range of projects, from web applications to ecourage renewable energy to personal portfolio and a small social network. Each project showcases a unique blend of design, coding, deployment, and project management skills.",
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
				/>
			))}
		</div>
	);
}
