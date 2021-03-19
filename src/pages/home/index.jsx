import { useDispatch } from "react-redux";

import { regionThunk } from "../../store/models/region/thunk";
import { pokeListPageThunk } from "../../store/models/pokeListPage/thunk";

import { Link } from "react-router-dom";

const Home = () => {
	const dispatch = useDispatch();

	return (
		<>
			<h1>Selecione sua região!</h1>

			<Link to="/main">
				<button
					onClick={() => {
						dispatch(regionThunk("Kanto"));
						dispatch(pokeListPageThunk(0, 150));
					}}
				>
					Kanto
				</button>
			</Link>

			<Link to="/main">
				<button
					onClick={() => {
						dispatch(regionThunk("Jhoto"));
						dispatch(pokeListPageThunk(151, 100));
					}}
				>
					Jhoto
				</button>
			</Link>

			<Link to="/main">
				<button
					onClick={() => {
						dispatch(regionThunk("Hoen"));
						dispatch(pokeListPageThunk(251, 135));
					}}
				>
					Hoen
				</button>
			</Link>
		</>
	);
};

export default Home;
