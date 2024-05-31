import Badge from "@/components/base/Badge/Badge";
import {
	SiAngular,
	SiAngularHex,
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
				<h2 className={style.title}>My go-to tech stack</h2>
				<div className={style.badgeWrapper}>
					{/* TYPESCRIPT */}
					<Badge
						color={SiTypescriptHex}
						icon={<SiTypescript />}
					>
						Typescript
					</Badge>
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
				<h2 className={style.title}>My toolbox</h2>
				<div className={style.badgeWrapper}>
					{/* LINUX */}
					<Badge
						color={SiLinuxHex}
						icon={<SiLinux />}
					>
						Linux
					</Badge>
					{/* VSCODE */}
					<Badge
						color={SiVisualstudiocodeHex}
						icon={<SiVisualstudiocode />}
					>
						VSCode
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
					{/* DOCKER */}
					<Badge
						color={SiDockerHex}
						icon={<SiDocker />}
					>
						Docker
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
				<h2 className={style.title}>My explorations</h2>
				<div className={style.badgeWrapper}>
					{/* Mongo DB */}
					<Badge
						color={SiMongodbHex}
						icon={<SiMongodb />}
					>
						MongoDB
					</Badge>
					{/* MySQL */}
					<Badge
						color={SiMysqlHex}
						icon={<SiMysql />}
					>
						MySQL
					</Badge>
					{/* NodeJS */}
					<Badge
						color={SiNodedotjsHex}
						icon={<SiNodedotjs />}
					>
						Node.Js
					</Badge>
					{/* SVELTE */}
					<Badge
						color={SiSvelteHex}
						icon={<SiSvelte />}
					>
						Svelte
					</Badge>
					{/* ANGULAR */}
					<Badge
						color={SiAngularHex}
						icon={<SiAngular />}
					>
						Angular
					</Badge>
				</div>
			</section>
		</div>
	);
}
