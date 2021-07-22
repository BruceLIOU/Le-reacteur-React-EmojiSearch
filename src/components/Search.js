// import component
import Line from "./Line";

// import JSON
import datas from "../assets/data/emojiList_mar8cs.json";

const Search = ({ keywords, setKeywords, searchSpace }) => {
  return (
    <>
      <header>
        <span>😎 EmojiSearch 😎</span>
        <input
          onChange={searchSpace}
          placeholder="What emoji are you looking for ?"
        ></input>
      </header>
      {datas.slice(0, 20).map((elem, index) => {
        setKeywords(keywords.toLowerCase());
        if (elem.keywords.indexOf(keywords) !== -1) {
          return <Line key={index} title={elem.title} symbol={elem.symbol} />;
        }
        return <div></div>;
      })}
    </>
  );
};

export default Search;
