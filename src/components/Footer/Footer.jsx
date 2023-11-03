import "./Footer.scss";

import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<>
			<div className="site-info">
				<div className="footer-control">
					<div className="main-footer">
						<div>
							<h3>Company</h3>
							<ul>
								<li>
									<Link to="/">Home</Link>
								</li>
								<li>
									<Link to="about">About</Link>
								</li>
								<li>
									<Link to="locations">Locations</Link>
								</li>
							</ul>
						</div>

						<div>
							<h3>Support</h3>
							<ul>
								<li>
									<a href="#">Contact Us</a>
								</li>
							</ul>
						</div>

						<div>
							<h3>Business</h3>
							<ul>
								<li>
									<a href="#">Franchise</a>
								</li>
							</ul>
						</div>
					</div>
					<hr className="footer-break" />
					<div className="copyright">&copy; {new Date().getFullYear()} The Big Squish Lemonade Company. All rights reserved.</div>
				</div>
			</div>
		</>
	);
};
export default Footer;
