import Link from "next/link";
import style from "./PrivacyPolicy.module.scss";

export default function PrivacyPolicy() {
	return (
		<Link
			href="/privacy_policy.pdf"
			target="_blank"
			className={style.link}
		>
			Privacy Policy
		</Link>
	);
}
