import { forwardRef, useImperativeHandle, useRef } from "react";
import styles from "./Modal.module.scss";

interface ModalProps {
	/**
	 * The content to be displayed inside the modal.
	 */
	children: React.ReactNode;
	/**
	 * The class name to apply to the modal.
	 */
	className?: string;
}

/**
 * The methods provided by the `Modal` component.
 */
export type ModalRefType = {
	/**
	 * Opens the modal dialog.
	 */
	openModal: () => void;
	/**
	 * Closes the modal dialog.
	 */
	closeModal: () => void;
};

/**
 * `Modal` is a component that creates a modal dialog. It uses the HTML `dialog` element and provides methods to open and close the dialog.
 *
 * @example How to use the `Modal` component:
 * ```tsx
 * import { useRef } from "react";
 * import Button from "@/components/base/Button/Button";
 * import Modal, { ModalRefType } from "@/components/base/Modal/Modal";
 *
 * function ParentComponent() {
 *   const modalRef = useRef<ModalRefType>();
 *
 *   const openModal = () => {
 *     if (modalRef.current) {
 *       modalRef.current.openModal();
 *     }
 *   };
 *
 *   const closeModal = () => {
 *     if (modalRef.current) {
 *       modalRef.current.closeModal();
 *     }
 *   };
 *
 *   return (
 *     <>
 *       <Button onClick={openModal}>Open Modal</Button>
 *       <Modal ref={modalRef}>
 *         Modal Content
 *         <footer>
 *           <Button onClick={closeModal}>Close</Button>
 *         </footer>
 *       </Modal>
 *     </>
 *   );
 * }
 * ```
 *
 * @param props - The properties passed to the component.
 * @param props.children - The content to be displayed inside the modal.
 * @param props.className - The class name to apply to the modal.
 * @param ref - A ref that provides methods to open and close the modal.
 */
const Modal = forwardRef(({ children, className }: ModalProps, ref) => {
	const dialogRef = useRef<HTMLDialogElement | null>(null);

	// Define the `openModal` and `closeModal` methods.
	const openModal: ModalRefType["openModal"] = () => {
		if (dialogRef.current) {
			dialogRef.current.showModal();
		}
	};
	const closeModal: ModalRefType["closeModal"] = () => {
		if (dialogRef.current) {
			dialogRef.current.close();
		}
	};

	// Expose the `openModal` and `closeModal` methods to the parent component.
	useImperativeHandle(ref, () => ({
		openModal: openModal,
		closeModal: closeModal,
	}));

	return (
		<dialog
			ref={dialogRef}
			className={styles.dialog}
		>
			<div className={className}>{children}</div>
		</dialog>
	);
});

Modal.displayName = "Modal";
export default Modal;
