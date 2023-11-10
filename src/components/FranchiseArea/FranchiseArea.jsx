import { Link } from "react-router-dom";
import "./FranchiseArea.scss";

const FranchiseArea = () => {
	return (
		<div className="franchise-banner">
			<div className="franchise-wrapper">
				<h2 className="franchise-title">Franchise Opportunity</h2>
				<p className="franchise-message">Love bubble teas and lemonade? Start your Low start-up cost franchise in the City! Our team will be happy to assist you. All agreements are executed legally by a specialized franchise lawyer! Contact us for more information!</p>
				<div className="franchise-btn">
					<Link className="btn btn-yellow" to="contact">
						Contact Us
					</Link>
				</div>
			</div>
		</div>
	);
};
export default FranchiseArea;
