import { getWorkItems } from "@/actions/workItemsActions";
import WorkItem from "@/components/ui/work/WorkItem/WorkItem";
import { Metadata } from "next";
import style from "./page.module.scss";

export const metadata: Metadata = {
	title: "Work",
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
