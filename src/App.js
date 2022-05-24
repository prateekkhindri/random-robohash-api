// import logo from "./logo.svg";
import { useState } from "react";
import { Container } from "react-bootstrap";
import "./App.css";
import { SearchForm } from "./components/form/SearchForm";
import { FavList } from "./components/list/FavList";
import { Title } from "./components/title/Title";

function App() {
  const [favList, setFevList] = useState([]);

  const addToFavList = (name) => {
    setFevList([...favList, name]);
  };

  // 2. Removing an item from the list

  const removeFromFavList = (name) => {
    // console.log(name);
    const tempList = favList.filter((movie) => movie !== name);
    setFevList(tempList);
  };

  return (
    <div className="wrapper">
      <Container>
        <Title />
        <SearchForm addToFavList={addToFavList} />
        <hr />
        <FavList favList={favList} removeFromFavList={removeFromFavList} />
      </Container>
    </div>
  );
}

export default App;

// CHALLENGE
// When a searched name already exists do not allow to add it to the list ???
