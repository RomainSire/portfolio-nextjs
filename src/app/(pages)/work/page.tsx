import { getWorkItems } from "@/actions/workItemsActions";
import WorkItem from "@/components/ui/WorkItem/WorkItem";
import style from "./page.module.scss";

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
