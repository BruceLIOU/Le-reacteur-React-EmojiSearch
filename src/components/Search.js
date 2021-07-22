const Search = ({ setSearch }) => {
  return (
    <header>
      <span role="img" aria-label="Sunglasses man">
        😎 EmojiSearch 😎
      </span>
      <input
        onChange={(event) => setSearch(event.target.value)}
        placeholder="What emoji are you looking for ?"
      ></input>
    </header>
  );
};

export default Search;
