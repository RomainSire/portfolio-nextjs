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
				<div className="entry-animation slide delay-4">
					<label
						className={style.label}
						htmlFor="name"
					>
						Votre nom
					</label>
					<input
						className={style.input}
						type="text"
						id="name"
						name="name"
						required
					/>
				</div>
				<div className="entry-animation slide delay-5">
					<label
						className={style.label}
						htmlFor="email"
					>
						Votre email
					</label>
					<input
						className={style.input}
						type="email"
						id="email"
						name="email"
						required
					/>
				</div>
				<div className="entry-animation slide delay-6">
					<label
						className={style.label}
						htmlFor="message"
					>
						Votre message
					</label>
					<textarea
						className={style.input}
						id="message"
						name="message"
						required
					></textarea>
				</div>
				<div className="entry-animation slide delay-7">
					<button
						type="submit"
						className={btnStyle.button}
					>
						<Sparkle size={24} />
						Envoyer le message
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
					<strong>Votre message a été envoyé avec succès !</strong>
				</div>
				<p>
					Merci de m’avoir contacté.
					<br />
					Je vous répondrai dés que possible.
					<br />
					Vérifiez votre dossier spam si vous ne recevez pas d’email de confirmation.
				</p>
				<footer>
					<button
						type="button"
						className={`${btnStyle.button} ${btnStyle.secondary}`}
						onClick={() => closeModal("success")}
					>
						Fermer
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
					<strong>Une erreur est survenue lors de l’envoi de votre message.</strong>
				</div>
				<p>Veuillez réessayer plus tard ou me contacter via mes réseaux sociaux.</p>
				<footer>
					<button
						type="button"
						className={`${btnStyle.button} ${btnStyle.secondary}`}
						onClick={() => closeModal("fail")}
					>
						Fermer
					</button>
				</footer>
			</Modal>
		</>
	);
}
