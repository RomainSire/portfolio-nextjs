"use server";
import { type WorkItemType } from "@/types/WorkItemType";
import { SiReact, SiReactHex } from "@icons-pack/react-simple-icons";

/**
 * Get work items
 * @returns Array of work items
 */
export async function getWorkItems(): Promise<WorkItemType[]> {
	return [
		{
			title: "Work Item 1",
			description: "This is the first work item.",
			stack: [
				{
					name: "React",
					color: SiReactHex,
					icon: <SiReact />,
				},
			],
			github: "https://github.com/blabla",
			demo: "https://demo.com",
		},
		{
			title: "Work Item 2",
			description: "This is the second work item.",
			stack: [
				{
					name: "React",
					color: SiReactHex,
					icon: <SiReact />,
				},
			],
			github: "https://github.com/blabla",
		},
		{
			title: "Work Item 3",
			description: "This is the third work item.",
			stack: [
				{
					name: "React",
					color: SiReactHex,
					icon: <SiReact />,
				},
			],
			demo: "https://demo.com",
		},
		{
			title: "Work Item 4",
			description: "This is the fourth work item.",
			stack: [
				{
					name: "React",
					color: SiReactHex,
					icon: <SiReact />,
				},
			],
		},
	];
}
