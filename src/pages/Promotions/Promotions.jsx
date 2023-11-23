import "./Promotions.scss";

// images
import BlackFriday2023 from "@/assets/black-friday-2023-deal.webp";

const Promotions = () => {
	return (
		<div className="promotions-wrapper">
			<div className="promotions-header">
				<h2 className="promotions-title">Promotions</h2>
				<p>Here are some of our currently available promotions. Be sure to check back for some thirst-quenching deals!</p>
			</div>

			<div className="promotions-main">
				<img src={BlackFriday2023} alt="black friday 2023 deal" />
			</div>
		</div>
	);
};
export default Promotions;
