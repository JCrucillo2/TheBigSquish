import "./About.scss";

// images
import Lemonade from "@/assets/lemonade.webp";
import ParkEvent from "@/assets/dog-park-event.webp";
import OurFamily from "@/assets/our-family.webp";
import SherwoodBranchTeam from "@/assets/sherwood-branch-team.webp";

const About = () => {
	return (
		<div className="about-wrapper">
			<h2 className="about-title">About Us</h2>

			<div className="about-content">
				<div className="first-entry">
					<div className="first-entry-wrapper">
						<div className="first-entry-image">
							<img src={Lemonade} alt="lemonade drink" />
						</div>

						<div className="first-entry-content">
							<p>Boo witch abomination afraid jack-o-lantern jack-o-lantern trick-or-treat. Haunted skeleton afraid cauldron spooky pumpkin afraid. Candy vampire pumpkin blood haunted blood haunted. Monster black cat werewolf haunted pumpkin afraid spooky. Werewolf nightmare blood afraid scare candy skeleton. </p>

							<p>Boo witch abomination afraid jack-o-lantern jack-o-lantern trick-or-treat. Haunted skeleton afraid cauldron spooky pumpkin afraid. Candy vampire pumpkin blood haunted blood haunted. Monster black cat werewolf haunted pumpkin afraid spooky. Werewolf nightmare blood afraid scare candy skeleton. </p>
						</div>
					</div>
				</div>

				<div className="about-family">
					<h3>A big hello from us!</h3>

					<div className="about-family-grid">
						<div>
							<img src={OurFamily} alt="my family" />
						</div>

						<div>
							<img src={SherwoodBranchTeam} alt="sherwood branch team" />
						</div>

						<div>
							<img src={ParkEvent} alt="a picture from one of our park events" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default About;
