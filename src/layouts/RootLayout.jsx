import { Outlet } from "react-router-dom";
import Footer from "@/components/Footer/Footer";

const RootLayout = () => {
	return (
		<div>
			<main>
				<Outlet />
			</main>

			<footer className="site-footer">
				<Footer />
			</footer>
		</div>
	);
};
export default RootLayout;
