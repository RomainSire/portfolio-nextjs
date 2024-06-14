"use client";
import { sendConfirmationEmail, sendContactMail } from "@/actions/email";
import Modal, { type ModalRefType } from "@/components/base/Modal/Modal";
import btnStyle from "@/styles/button.module.scss";
import { CheckFat, SmileySad } from "@phosphor-icons/react";
import { Sparkle } from "@phosphor-icons/react/dist/ssr";
import { useRef } from "react";
import style from "./ContactForm.module.scss";

export default function ContactForm() {
	const successModalRef = useRef<ModalRefType>();
	const failModalRef = useRef<ModalRefType>();

	/**
	 * Open the modal
	 * @param state - Which modal to open/close
	 */
	const openModal = (state: "success" | "fail") => {
		if (state === "success" && successModalRef.current) {
			successModalRef.current.openModal();
		}
		if (state === "fail" && failModalRef.current) {
			failModalRef.current.openModal();
		}
	};
	/**
	 * Close the modal
	 * @param state - Which modal to open/close
	 */
	const closeModal = (state: "success" | "fail") => {
		if (state === "success" && successModalRef.current) {
			successModalRef.current.closeModal();
		}
		if (state === "fail" && failModalRef.current) {
			failModalRef.current.closeModal();
		}
	};

	/**
	 * Handle the form submission
	 */
	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const form = event.currentTarget;
		const formData = new FormData(form);
		const email = formData.get("email") as string;
		const name = formData.get("name") as string;
		const message = formData.get("message") as string;

		try {
			// Send the email to the admin
			await sendContactMail(email, name, message);
			// Send the confirmation email to the user
			await sendConfirmationEmail(email, name);
			form.reset();
			openModal("success");
		} catch (error) {
			openModal("fail");
		}
	};

	return (
		<>
			<form
				className={style.form}
				onSubmit={handleSubmit}
			>
				{" "}
				<div>
					<label
						className={style.label}
						htmlFor="name"
					>
						Your name
					</label>
					<input
						className={style.input}
						type="text"
						id="name"
						name="name"
						required
					/>
				</div>
				<div>
					<label
						className={style.label}
						htmlFor="email"
					>
						Your email
					</label>
					<input
						className={style.input}
						type="email"
						id="email"
						name="email"
						required
					/>
				</div>
				<div>
					<label
						className={style.label}
						htmlFor="message"
					>
						Your message
					</label>
					<textarea
						className={style.input}
						id="message"
						name="message"
						required
					></textarea>
				</div>
				<div>
					<button
						type="submit"
						className={btnStyle.button}
					>
						<Sparkle size={24} />
						Send the message
						<Sparkle size={24} />
					</button>
				</div>
			</form>
			{/* SUCCESS MODAL */}
			<Modal
				ref={successModalRef}
				className={style.modal}
			>
				<div className={style.success}>
					<CheckFat size={48} />
					<strong>Your message has been sent successfully!</strong>
				</div>
				<p>
					Thank you for contacting me.
					<br />I will get back to you as soon as possible.
					<br />
					Check ou your spam folder if you don&apos;t receive a confirmation email.
				</p>
				<footer>
					<button
						type="button"
						className={`${btnStyle.button} ${btnStyle.secondary}`}
						onClick={() => closeModal("success")}
					>
						Close
					</button>
				</footer>
			</Modal>
			{/* FAIL MODAL */}
			<Modal
				ref={failModalRef}
				className={style.modal}
			>
				<div className={style.fail}>
					<SmileySad size={48} />
					<strong>There was an error sending your message.</strong>
				</div>
				<p>Please try again later or contact me through my social medias.</p>
				<footer>
					<button
						type="button"
						className={`${btnStyle.button} ${btnStyle.secondary}`}
						onClick={() => closeModal("fail")}
					>
						Close
					</button>
				</footer>
			</Modal>
		</>
	);
}
