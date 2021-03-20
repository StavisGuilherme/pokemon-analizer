import PokeList from "../../components/pokeList";

import "./style.css";

const Home = () => {
	return (
		<div className="landing">
			<h1>Pokedéx Nacional</h1>
			<PokeList />
		</div>
	);
};

export default Home;
