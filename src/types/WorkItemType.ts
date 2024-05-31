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
	 * GitHub URL of the work item
	 */
	github?: string;
	/**
	 * Demo URL of the work item
	 */
	demo?: string;
};
