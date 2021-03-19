import "./style.css";

const Pokemon = ({ name, image }) => {
	return (
		<div className="pokemon">
			<img src={image} alt="pokemon avatar" />
			<p>{name}</p>
		</div>
	);
};

export default Pokemon;
