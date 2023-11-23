import "./HomepageVideo.scss";

import MainVideo from "@/assets/videos/main-page-vid.mp4";

const HomepageVideo = () => {
	return (
		<div className="home-container">
			<div className="home-overlay"></div>
			<video src={MainVideo} autoPlay loop muted />
			<div className="home-content">
				<h2>The Big Squish Lemonade & Bubble Tea</h2>
			</div>
		</div>
	);
};
export default HomepageVideo;
