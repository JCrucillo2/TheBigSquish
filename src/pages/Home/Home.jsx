import HomepageVideo from "../../components/HomepageVideo/HomepageVideo";
import "./Home.scss";

import FranchiseArea from "@/components/FranchiseArea/FranchiseArea";

const Home = () => {
	return (
		<div className="home-wrapper">
			<HomepageVideo />

			<div className="home-placeholder">
				<h2>What we sell!</h2>

				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt odio rerum quidem eveniet sequi nemo aperiam excepturi quo architecto nostrum quos alias odit nisi vero quisquam, quae esse doloremque molestias, voluptatem iure deleniti blanditiis? Dignissimos ea, eligendi nisi totam natus sed temporibus. Ullam fugiat repellat voluptas nobis minima, dolorum deserunt.</p>

				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati nam non adipisci fuga neque error tempora voluptate amet eaque voluptatibus, consectetur omnis accusamus nobis quaerat ipsam, quo sint ducimus placeat quam iusto, praesentium porro. Magnam, excepturi vel sint, quidem quisquam beatae voluptatibus neque at veniam enim iure cumque officiis repudiandae quos culpa commodi ipsam. Nisi corporis in laborum impedit ut!</p>
			</div>

			<FranchiseArea />
		</div>
	);
};
export default Home;
