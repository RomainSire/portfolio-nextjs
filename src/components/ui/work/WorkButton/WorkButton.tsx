"use client";
import btn from "@/styles/button.module.scss";
import { type WorkLinkType } from "@/types/WorkItemType";
import { GithubLogo, ShareFat } from "@phosphor-icons/react";
import Link from "next/link";
import { useId } from "react";
import { Tooltip } from "react-tooltip";

type WorkButtonProps = {
	/**
	 * Work link
	 */
	workLink: WorkLinkType;
	/**
	 * Type of the work link
	 */
	type: "github" | "demo";
};

export default function WorkButton({ workLink, type }: WorkButtonProps) {
	const uniqueId = useId();
	const icon = type === "github" ? <GithubLogo size={32} /> : <ShareFat size={32} />;
	if (workLink.url === "") {
		return (
			<>
				<button
					className={`${btn.button} ${type === "github" ? btn.secondary : ""} ${btn.square}`}
					data-tooltip-id={uniqueId}
					data-tooltip-content={workLink.tooltip}
					disabled
				>
					{icon}
				</button>
				<Tooltip id={uniqueId} />
			</>
		);
	}

	return (
		<Link
			href={workLink.url}
			target="_blank"
		>
			<button
				className={`${btn.button} ${type === "github" ? btn.secondary : ""} ${btn.square}`}
				data-tooltip-id={uniqueId}
				data-tooltip-content={workLink.tooltip}
			>
				{icon}
			</button>
			<Tooltip id={uniqueId} />
		</Link>
	);
}
