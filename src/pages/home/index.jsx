import PokeList from "../../components/pokeList";

import styled from "styled-components";

const Home = () => {
	return (
		<HomeContainer>
			<h1>Pokedéx Nacional</h1>
			<PokeList />
		</HomeContainer>
	);
};

export default Home;

const HomeContainer = styled.div`
	display: flex;
	flex-flow: column nowrap;
	align-items: center;
	background-image: linear-gradient(#eb2f28 35%, #2b73b9 100%);
	height: 100vh;

	h1 {
		color: #ffcb05;
		text-shadow: 2px 2px #2b72b9;
	}
`;
