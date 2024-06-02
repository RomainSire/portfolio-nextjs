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
			github: {
				url: "https://github.com/blabla",
				tooltip: "Check the code on Github",
			},
			demo: {
				url: "https://demo.com",
				tooltip: "Visit the app",
			},
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
			github: {
				url: "https://github.com/blabla",
				tooltip: "Check it on Github",
			},
			demo: {
				url: "",
				tooltip: "there is no demo yet",
			},
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
			github: {
				url: "",
				tooltip: "The repository is private",
			},
			demo: {
				url: "https://demo.com",
				tooltip: "Go to the website",
			},
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
			github: {
				url: "",
				tooltip: "The repository is private",
			},
			demo: {
				url: "",
				tooltip: "There is no demo yet",
			},
		},
	];
}
