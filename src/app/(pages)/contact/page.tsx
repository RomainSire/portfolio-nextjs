import ContactForm from "@/components/ui/contact/ContactForm/ContactForm";
import SocialBtns from "@/components/ui/contact/SocialBtns/SocialBtns";
import style from "./page.module.scss";

export default function ContactPage() {
	return (
		<div className={style.wrapper}>
			<h2>Let&#39;s discuss your project!</h2>
			<section>
				<h3 className={style.subtitle}>Come to say hi on...</h3>
				<SocialBtns />
			</section>
			<section>
				<h3 className={style.subtitle}>Or send me a message</h3>
				<ContactForm />
			</section>
		</div>
	);
}
