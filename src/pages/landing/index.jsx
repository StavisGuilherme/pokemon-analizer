import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { pokeListFullThunk } from "../../store/models/pokeListFull/thunk";

import styled from "styled-components";

const LandingPage = () => {
	const dispatch = useDispatch();
	const history = useHistory();

	const handleClick = () => {
		dispatch(pokeListFullThunk());
		history.push("/home");
	};

	return (
		<>
			<LandingContainer>
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
			</LandingContainer>
		</>
	);
};

export default LandingPage;

const LandingContainer = styled.div`
	display: flex;
	flex-flow: column nowrap;
	align-items: center;
	background-image: linear-gradient(#eb2f28 35%, #2b73b9 100%);
	height: 100vh;
	.logo {
		margin-top: 3vh;
	}

	.pokeball {
		margin-top: 10vh;
		width: 17vw;
	}

	.pokeball img {
		width: 17vw;
	}

	.pokeball img:hover {
		width: 20vw;
		transition: 0.3s;
	}

	.pokeball:hover {
		cursor: pointer;
		width: 20vw;
		margin-top: 7vh;
		transition: 0.3s;
	}
`;
