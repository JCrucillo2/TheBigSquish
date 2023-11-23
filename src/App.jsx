import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";

// pages
import Home from "@/pages/Home/Home";

// layout
import RootLayout from "@/layouts/RootLayout";
import Locations from "@/pages/Locations/Locations";
import About from "@/pages/About/About";
import Contact from "@/pages/Contact/Contact";
import Promotions from "@/pages/Promotions/Promotions";

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<RootLayout />}>
			<Route index element={<Home />} />
			<Route path="locations" element={<Locations />} />
			<Route path="about" element={<About />} />
			<Route path="contact" element={<Contact />} />
			<Route path="promotions" element={<Promotions />} />
		</Route>
	)
);

const App = () => {
	return <RouterProvider router={router} />;
};
export default App;
