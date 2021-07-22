// import CSS
import "./assets/css/App.css";

// import components
import Search from "./components/Search";
import Footer from "./components/Footer";

// import useState
import { useState } from "react";

const App = () => {
  const [keywords, setKeywords] = useState("");

  const searchSpace = (event) => {
    const value = event.target.value;
    setKeywords(value);
  };
  return (
    <div className="container">
      <Search
        keywords={keywords}
        setKeywords={setKeywords}
        searchSpace={searchSpace}
      />
      <Footer />
    </div>
  );
};

export default App;
