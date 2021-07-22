const Line = ({ title, symbol }) => {
  return (
    <div
      className="line"
      onClick={() => {
        navigator.clipboard.writeText(symbol);
      }}
    >
      <span>
        {symbol}
        {title}
      </span>
      <span class="copy-span">Click to copy !</span>
    </div>
  );
};

export default Line;
