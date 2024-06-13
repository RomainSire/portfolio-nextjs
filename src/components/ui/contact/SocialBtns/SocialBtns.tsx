import btnStyle from "@/styles/button.module.scss";
import { SiGithub, SiLinkedin, SiTwitter } from "@icons-pack/react-simple-icons";
import Link from "next/link";
import style from "./SocialBtns.module.scss";

export default function SocialBtns() {
	return (
		<div className={style.wrapper}>
			<Link
				className={`${btnStyle.button} ${btnStyle.secondary}`}
				href="https://github.com/RomainSire"
			>
				<SiGithub /> Github
			</Link>
			<Link
				className={`${btnStyle.button} ${btnStyle.secondary}`}
				href="https://www.linkedin.com/in/romainsire"
			>
				<SiLinkedin /> Linkedin
			</Link>
			<Link
				className={`${btnStyle.button} ${btnStyle.secondary}`}
				href="https://twitter.com/freebison"
			>
				<SiTwitter /> Twitter
			</Link>
		</div>
	);
}
