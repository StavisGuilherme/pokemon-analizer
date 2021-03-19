const SearchBar = ({ search, setSearch, setCurrentOffset }) => {
	return (
		<>
			<input
				type="text"
				placeholder="Faça sua busca!"
				onChange={(evt) => {
					setCurrentOffset(0);
					setSearch(evt.target.value);
				}}
				value={search}
			/>
		</>
	);
};

export default SearchBar;
