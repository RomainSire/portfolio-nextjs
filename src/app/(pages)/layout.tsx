import ConfidentialityPolicy from "@/components/ui/layout/ConfidentialityPolicy/ConfidentialityPolicy";
import Copyright from "@/components/ui/layout/Copyright/Copyright";
import Logo from "@/components/ui/layout/Logo/Logo";
import Navigation from "@/components/ui/layout/Navigation/Navigation";
import style from "./layout.module.scss";

type Props = Readonly<{
	children: React.ReactNode;
}>;

export default function PagesLayout({ children }: Props) {
	return (
		<>
			<header className={style.header}>
				<Logo />
				<Navigation />
			</header>
			<main className={style.main}>{children}</main>
			<footer className={style.footer}>
				<Copyright />
				&#8226;
				<ConfidentialityPolicy />
			</footer>
		</>
	);
}
