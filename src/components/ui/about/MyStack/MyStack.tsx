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
						bgColor={SiTypescriptHex}
						icon={<SiTypescript />}
					>
						Typescript
					</Badge>
					{/* REACT */}
					<Badge
						bgColor={SiReactHex}
						icon={<SiReact />}
					>
						React
					</Badge>
					{/* NEXT JS */}
					<Badge
						bgColor={SiNextdotjsHex}
						icon={<SiNextdotjs />}
					>
						Next.Js
					</Badge>
					{/* ASTRO */}
					<Badge
						bgColor={SiAstroHex}
						icon={<SiAstro />}
					>
						Astro
					</Badge>
					{/* SASS */}
					<Badge
						bgColor={SiSassHex}
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
						bgColor={SiLinuxHex}
						icon={<SiLinux />}
					>
						Linux
					</Badge>
					{/* VSCODE */}
					<Badge
						bgColor={SiVisualstudiocodeHex}
						icon={<SiVisualstudiocode />}
					>
						VSCode
					</Badge>
					{/* GIT */}
					<Badge
						bgColor={SiGitHex}
						icon={<SiGit />}
					>
						Git
					</Badge>
					{/* GITHUB */}
					<Badge
						bgColor={SiGithubHex}
						icon={<SiGithub />}
					>
						GitHub
					</Badge>
					{/* DOCKER */}
					<Badge
						bgColor={SiDockerHex}
						icon={<SiDocker />}
					>
						Docker
					</Badge>
					{/* FIGMA */}
					<Badge
						bgColor={SiFigmaHex}
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
						bgColor={SiMongodbHex}
						icon={<SiMongodb />}
					>
						MongoDB
					</Badge>
					{/* MySQL */}
					<Badge
						bgColor={SiMysqlHex}
						icon={<SiMysql />}
					>
						MySQL
					</Badge>
					{/* NodeJS */}
					<Badge
						bgColor={SiNodedotjsHex}
						icon={<SiNodedotjs />}
					>
						Node.Js
					</Badge>
					{/* SVELTE */}
					<Badge
						bgColor={SiSvelteHex}
						icon={<SiSvelte />}
					>
						Svelte
					</Badge>
					{/* ANGULAR */}
					<Badge
						bgColor={SiAngularHex}
						icon={<SiAngular />}
					>
						Angular
					</Badge>
				</div>
			</section>
		</div>
	);
}
