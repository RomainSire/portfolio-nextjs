import btnStyle from "@/styles/button.module.scss";
import Link from "next/link";
import style from "./WhoAmI.module.scss";

export default function WhoAmI() {
	return (
		<section className={style.section}>
			<h2 className={style.title}>Who am I?</h2>
			<p>
				As a former engineer who transitioned into the ever-evolving world of web development, I am captivated by the{" "}
				<strong>limitless possibilities</strong> of the digital realm.
			</p>
			<p>
				Combining my meticulous attention to detail with a collaborative approach, I craft web applications that
				seamlessly align with <strong>clients unique requirements</strong>. I am well-versed in the latest front-end
				languages and frameworks, including React, Next.js and TypeScript, enabling me to design high-performance and
				intuitive interfaces.
			</p>
			<p>
				My unconventional background grants me a <strong>unique perspective</strong>. My engineering expertise instills
				a rigorous and analytical approach, while my experience in renewable energy has instilled in me a deep
				understanding of environmental and societal concerns, which I incorporate into my projects.
			</p>
			<p>
				As a <strong>freelance front-end developer</strong>, I thrive on the flexibility and autonomy it offers. I am
				particularly drawn to projects of around 6 months with startups or small teams. However, I am always open to new
				challenges, including opportunities in larger organizations.
			</p>
			<Link
				className={btnStyle.button}
				href="/contact"
			>
				Let&apos;s discuss your project!
			</Link>
		</section>
	);
}
