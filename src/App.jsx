import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";

// pages
import Home from "@/pages/Home/Home";

// layout
import RootLayout from "@/layouts/RootLayout";
import Locations from "@/pages/Locations/Locations";
import About from "@/pages/About/About";

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<RootLayout />}>
			<Route index element={<Home />} />
			<Route path="locations" element={<Locations />} />
			<Route path="about" element={<About />} />
		</Route>
	)
);

const App = () => {
	return <RouterProvider router={router} />;
};
export default App;
