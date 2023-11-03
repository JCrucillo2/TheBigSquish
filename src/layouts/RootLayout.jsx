import { Outlet } from "react-router-dom";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";

const RootLayout = () => {
	return (
		<>
			<header className="site-header">
				<Header />
			</header>

			<main>
				<Outlet />
			</main>

			<footer className="site-footer">
				<Footer />
			</footer>
		</>
	);
};
export default RootLayout;
