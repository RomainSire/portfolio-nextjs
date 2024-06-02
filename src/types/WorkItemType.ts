import { type StackItemType } from "./StackItemType";

/**
 * Type definition for work item
 */
export type WorkItemType = {
	/**
	 * Title of the work item
	 */
	title: string;
	/**
	 * Description of the work item
	 */
	description: string;
	/**
	 * Stack of technologies used in the work item
	 */
	stack: StackItemType[];
	/**
	 * Image path of the work item
	 */
	image: string;
	/**
	 * GitHub URL of the work item
	 */
	github: WorkLinkType;
	/**
	 * Demo URL of the work item
	 */
	demo: WorkLinkType;
};

/**
 * Type definition for work link
 */
export type WorkLinkType = {
	/**
	 * URL of the link
	 */
	url: string;
	/**
	 * Tooltip of the link
	 */
	tooltip: string;
};
