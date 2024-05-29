import Link from "next/link";
import style from "./ConfidentialityPolicy.module.scss";

export default function ConfidentialityPolicy() {
	return (
		<Link
			href="/test.pdf"
			target="_blank"
			className={style.link}
		>
			Confidentiality Policy
		</Link>
	);
}
