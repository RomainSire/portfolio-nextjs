import btnStyle from "@/styles/button.module.scss";
import { Sparkle } from "@phosphor-icons/react/dist/ssr";
import style from "./ContactForm.module.scss";

export default function ContactForm() {
	return (
		<form
			action=""
			className={style.form}
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
	);
}
