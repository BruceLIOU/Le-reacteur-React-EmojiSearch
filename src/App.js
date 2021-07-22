// import CSS
import "./assets/css/App.css";

// import components
import Search from "./components/Search";
import Line from "./components/Line";
import Footer from "./components/Footer";

// import useState
import { useState } from "react";

const App = () => {
  const [search, setSearch] = useState("");

  const searchSpace = (event) => {
    if (search) {
      setSearch(event.target.value);
    }
  };
  return (
    <div className="container">
      <Search />
      <Line searchSpace={searchSpace} />
      <Footer />
    </div>
  );
};

export default App;
