import btnStyle from "@/styles/button.module.scss";
import { SiGithub, SiLinkedin, SiTwitter } from "@icons-pack/react-simple-icons";
import Link from "next/link";
import style from "./SocialBtns.module.scss";

type SocialBtnsType = Readonly<{
	/**
	 * Additional classes.
	 */
	className?: string;
}>;

export default function SocialBtns({ className }: SocialBtnsType) {
	return (
		<div className={`${style.wrapper} ${className}`}>
			<Link
				className={`${btnStyle.button} ${btnStyle.secondary}`}
				target="_blank"
				href="https://github.com/RomainSire"
			>
				<SiGithub /> Github
			</Link>
			<Link
				className={`${btnStyle.button} ${btnStyle.secondary}`}
				target="_blank"
				href="https://www.linkedin.com/in/romainsire"
			>
				<SiLinkedin /> Linkedin
			</Link>
			<Link
				className={`${btnStyle.button} ${btnStyle.secondary}`}
				target="_blank"
				href="https://twitter.com/bisonvoyageur"
			>
				<SiTwitter /> Twitter
			</Link>
		</div>
	);
}
