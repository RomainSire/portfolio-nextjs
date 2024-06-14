import Copyright from "@/components/ui/layout/Copyright/Copyright";
import LegalNav from "@/components/ui/layout/LegalNav/LegalNav";
import Logo from "@/components/ui/layout/Logo/Logo";
import Navigation from "@/components/ui/layout/Navigation/Navigation";
import style from "./layout.module.scss";

type Props = Readonly<{
	children: React.ReactNode;
}>;

export default function PagesLayout({ children }: Props) {
	return (
		<div className={style.wrapper}>
			<header className={style.header}>
				<Logo />
				<Navigation />
			</header>
			<main className={style.main}>{children}</main>
			<footer className={style.footer}>
				<Copyright />
				<LegalNav />
			</footer>
		</div>
	);
}
