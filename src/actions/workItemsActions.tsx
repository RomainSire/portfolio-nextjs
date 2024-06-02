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
			description:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro incidunt dolorem dignissimos doloribus repellat explicabo, animi maiores quos aspernatur quia sed molestias qui ipsam! Quia atque odio expedita repellat porro.",
			stack: [
				{
					name: "React",
					color: SiReactHex,
					icon: <SiReact />,
				},
			],
			image: "/work/notrelec.png",
			github: "https://github.com/blabla",
			demo: "https://demo.com",
		},
		{
			title: "Work Item 2",
			description:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro incidunt dolorem dignissimos doloribus repellat explicabo, animi maiores quos aspernatur quia sed molestias qui ipsam! Quia atque odio expedita repellat porro.",
			stack: [
				{
					name: "React",
					color: SiReactHex,
					icon: <SiReact />,
				},
			],
			image: "/work/notrelec.png",
			github: "https://github.com/blabla",
		},
		{
			title: "Work Item 3",
			description:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro incidunt dolorem dignissimos doloribus repellat explicabo, animi maiores quos aspernatur quia sed molestias qui ipsam! Quia atque odio expedita repellat porro.",
			stack: [
				{
					name: "React",
					color: SiReactHex,
					icon: <SiReact />,
				},
			],
			image: "/work/notrelec.png",
			demo: "https://demo.com",
		},
		{
			title: "Work Item 4",
			description:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro incidunt dolorem dignissimos doloribus repellat explicabo, animi maiores quos aspernatur quia sed molestias qui ipsam! Quia atque odio expedita repellat porro.",
			stack: [
				{
					name: "React",
					color: SiReactHex,
					icon: <SiReact />,
				},
			],
			image: "/work/notrelec.png",
		},
	];
}
