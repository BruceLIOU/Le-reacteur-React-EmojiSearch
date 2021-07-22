import datas from "../assets/data/emojiList_mar8cs.json";

const Line = () => {
  console.log(datas[0].title);
  return (
    <>
      {datas.map((emoji, index) => {
        return (
          <div className="line">
            <span key={index}>
              {emoji.symbol}
              {emoji.title}
            </span>
            {/* <span class="copy-span">Click to copy !</span> */}
          </div>
        );
      })}
    </>
  );
};

export default Line;
