const Line = ({ title, symbol }) => {
  return (
    <div className="line">
      <span>
        {symbol}
        {title}
      </span>
      {/* <span class="copy-span">Click to copy !</span> */}
    </div>
  );
};

export default Line;
