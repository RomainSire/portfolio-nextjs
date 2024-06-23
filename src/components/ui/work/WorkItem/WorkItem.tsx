import Badge from "@/components/base/Badge/Badge";
import { type WorkItemType } from "@/types/WorkItemType";
import Image from "next/image";
import "react-tooltip/dist/react-tooltip.css";
import WorkButton from "../WorkButton/WorkButton";
import style from "./WorkItem.module.scss";

type WorkItemProps = {
	/**
	 * Work item to be displayed
	 */
	workItem: WorkItemType;
	/**
	 * Reverse the order of the image and the content
	 */
	reverse?: boolean;
	/**
	 * Additional classes
	 */
	className?: string;
};

export default function WorkItem({ workItem, reverse, className }: WorkItemProps) {
	return (
		<article className={`${style.wrapper} ${reverse ? style.reverse : ""} ${className}`}>
			<h1 className={style.title}>{workItem.title}</h1>
			<div className={style.badges}>
				{workItem.stack.map((stackItem) => (
					<Badge
						color={stackItem.color}
						icon={stackItem.icon}
						key={`${workItem.title}-${stackItem.name}`}
					>
						{stackItem.name}
					</Badge>
				))}
			</div>
			<Image
				className={style.image}
				src={workItem.image}
				alt={`Capture d'écran du projet : ${workItem.title}`}
				height={300}
				width={600}
			/>
			<div className={style.description}>{workItem.description}</div>
			<div className={style.cta}>
				<WorkButton
					workLink={workItem.github}
					type="github"
				/>
				<WorkButton
					workLink={workItem.demo}
					type="demo"
				/>
			</div>
		</article>
	);
}
