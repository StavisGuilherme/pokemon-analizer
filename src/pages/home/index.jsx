import { useDispatch } from "react-redux";
import { useState } from "react";

import { pokeListFullThunk } from "../../store/models/pokeListFull/thunk";

import PokeList from "../../components/pokeList";

import "./style.css";

const Home = () => {
	const dispatch = useDispatch();

	const [start, setStart] = useState(false);

	const handleClick = () => {
		setStart(true);
		dispatch(pokeListFullThunk());
	};

	if (start) {
		return (
			<div className="landing">
				<h1>Pokedéx Nacional</h1>
				<PokeList />
			</div>
		);
	} else {
		return (
			<div className="landing">
				<div className="logo">
					<img
						src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/640px-International_Pok%C3%A9mon_logo.svg.png"
						alt=""
					/>
				</div>
				<div className="pokeball">
					<img
						src="https://pngimg.com/uploads/pokeball/pokeball_PNG21.png"
						alt=""
						onClick={handleClick}
					/>
				</div>
			</div>
		);
	}
};

export default Home;
