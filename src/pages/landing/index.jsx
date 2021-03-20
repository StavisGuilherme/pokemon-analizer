import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { pokeListFullThunk } from "../../store/models/pokeListFull/thunk";

const LandingPage = () => {
	const dispatch = useDispatch();
	const history = useHistory();

	const handleClick = () => {
		dispatch(pokeListFullThunk());
		history.push("/home");
	};

	return (
		<>
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
		</>
	);
};

export default LandingPage;
