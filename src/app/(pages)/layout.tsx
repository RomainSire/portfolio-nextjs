import Copyright from "@/components/ui/layout/Copyright/Copyright";
import Logo from "@/components/ui/layout/Logo/Logo";
import Navigation from "@/components/ui/layout/Navigation/Navigation";
import PrivacyPolicy from "@/components/ui/layout/PrivacyPolicy/PrivacyPolicy";
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
				&#8226;
				<PrivacyPolicy />
			</footer>
		</div>
	);
}
