/**
 * Type definition for stack item, mostly used to display technology badges
 */
export type StackItemType = {
	/**
	 * Name of the technology
	 */
	name: string;
	/**
	 * Background color of the badge
	 */
	color: string;
	/**
	 * Icon to be displayed inside badge
	 */
	icon: React.ReactNode;
};
