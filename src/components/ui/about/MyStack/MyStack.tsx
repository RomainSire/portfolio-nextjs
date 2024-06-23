import Badge from "@/components/base/Badge/Badge";
import {
	SiAngular,
	SiAstro,
	SiAstroHex,
	SiDocker,
	SiDockerHex,
	SiFigma,
	SiFigmaHex,
	SiGit,
	SiGitHex,
	SiGithub,
	SiGithubHex,
	SiLinux,
	SiLinuxHex,
	SiMongodb,
	SiMongodbHex,
	SiMysql,
	SiMysqlHex,
	SiNextdotjs,
	SiNextdotjsHex,
	SiNodedotjs,
	SiNodedotjsHex,
	SiReact,
	SiReactHex,
	SiSass,
	SiSassHex,
	SiSvelte,
	SiSvelteHex,
	SiTypescript,
	SiTypescriptHex,
	SiVisualstudiocode,
	SiVisualstudiocodeHex,
} from "@icons-pack/react-simple-icons";
import style from "./MyStack.module.scss";

export default function MyStack() {
	return (
		<div className={style.wrapper}>
			<section>
				<h2 className={`entry-animation slide delay-6 ${style.title}`}>Ma stack de prédilection</h2>
				<div className={`entry-animation slide delay-7 ${style.badgeWrapper}`}>
					{/* REACT */}
					<Badge
						color={SiReactHex}
						icon={<SiReact />}
					>
						React
					</Badge>
					{/* NEXT JS */}
					<Badge
						color={SiNextdotjsHex}
						icon={<SiNextdotjs />}
					>
						Next.Js
					</Badge>
					{/* ASTRO */}
					<Badge
						color={SiAstroHex}
						icon={<SiAstro />}
					>
						Astro
					</Badge>
					{/* TYPESCRIPT */}
					<Badge
						color={SiTypescriptHex}
						icon={<SiTypescript />}
					>
						Typescript
					</Badge>
					{/* SASS */}
					<Badge
						color={SiSassHex}
						icon={<SiSass />}
					>
						SASS
					</Badge>
				</div>
			</section>
			<section>
				<h2 className={`entry-animation slide delay-8 ${style.title}`}>Ma boîte à outils</h2>
				<div className={`entry-animation slide delay-9 ${style.badgeWrapper}`}>
					{/* VSCODE */}
					<Badge
						color={SiVisualstudiocodeHex}
						icon={<SiVisualstudiocode />}
					>
						VSCode
					</Badge>
					{/* LINUX */}
					<Badge
						color={SiLinuxHex}
						icon={<SiLinux />}
					>
						Linux
					</Badge>
					{/* DOCKER */}
					<Badge
						color={SiDockerHex}
						icon={<SiDocker />}
					>
						Docker
					</Badge>
					{/* GIT */}
					<Badge
						color={SiGitHex}
						icon={<SiGit />}
					>
						Git
					</Badge>
					{/* GITHUB */}
					<Badge
						color={SiGithubHex}
						icon={<SiGithub />}
					>
						GitHub
					</Badge>
					{/* FIGMA */}
					<Badge
						color={SiFigmaHex}
						icon={<SiFigma />}
					>
						Figma
					</Badge>
				</div>
			</section>
			<section>
				<h2 className={`entry-animation slide delay-10 ${style.title}`}>Mes explorations</h2>
				<div className={`entry-animation slide delay-11 ${style.badgeWrapper}`}>
					{/* SVELTE */}
					<Badge
						color={SiSvelteHex}
						icon={<SiSvelte />}
					>
						Svelte
					</Badge>
					{/* ANGULAR */}
					<Badge
						color="#a4374f"
						icon={<SiAngular />}
					>
						Angular
					</Badge>
					{/* NodeJS */}
					<Badge
						color={SiNodedotjsHex}
						icon={<SiNodedotjs />}
					>
						Node.Js
					</Badge>
					{/* MySQL */}
					<Badge
						color={SiMysqlHex}
						icon={<SiMysql />}
					>
						MySQL
					</Badge>
					{/* Mongo DB */}
					<Badge
						color={SiMongodbHex}
						icon={<SiMongodb />}
					>
						MongoDB
					</Badge>
				</div>
			</section>
		</div>
	);
}
