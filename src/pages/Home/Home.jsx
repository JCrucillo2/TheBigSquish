import FranchiseArea from "@/components/FranchiseArea/FranchiseArea";
import "./Home.scss";

const Home = () => {
	return (
		<div className="home-wrapper">
			<h2>Home</h2>

			{/* placeholder code */}
			<div className="placeholder">
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, repellendus. Natus nisi asperiores accusamus. Nesciunt incidunt id delectus molestias ea autem fugiat est? Ut vitae in modi laborum nostrum possimus. Saepe ex alias dolore, soluta sint, accusamus ea magni hic fuga sapiente dignissimos est mollitia cupiditate distinctio eius assumenda perspiciatis.</p>

				<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi accusamus culpa temporibus fugiat corrupti. Inventore laborum veniam, illo distinctio architecto exercitationem eum. Ratione vero placeat laboriosam provident impedit fugiat quia.</p>
			</div>

			<FranchiseArea />
		</div>
	);
};
export default Home;
