import "./Header.scss";
import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "@/assets/main-logo.png";
import { HiMenuAlt2 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";

const Header = () => {
	const [nav, setNav] = useState(false);

	const handleSideNav = () => {
		setNav(!nav);
	};

	return (
		<div className="header-wrapper">
			<nav className={nav ? `sliding-menu active` : `sliding-menu`} onClick={handleSideNav}>
				<ul>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/about">About</Link>
					</li>
					<li>
						<Link to="/locations">Locations</Link>
					</li>
				</ul>
			</nav>

			<div className="header-logo">
				<Link to="/">
					<img className="main-logo" src={Logo} alt="the big squish main logo" />
				</Link>
				<Link to="/">
					<h1 className="logo-title">The Big Squish</h1>
				</Link>
			</div>

			<button className="menu-btn" onClick={handleSideNav}>
				{nav ? <IoClose size={35} /> : <HiMenuAlt2 size={35} />}
			</button>
		</div>
	);
};
export default Header;
