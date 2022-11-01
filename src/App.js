import { useState } from "react";
import { Container } from "react-bootstrap";
import "./App.css";
import { SearchForm } from "./components/form/SearchForm";
import { FavList } from "./components/list/FavList";
import { Title } from "./components/title/Title";

function App() {
  const [favList, setFavList] = useState([]);

  const addToFavList = (name) => {
    if (favList.includes(name)) {
      return;
    } else {
      setFavList([...favList, name]);
    }
  };

  // 2. Removing an item from the list

  const removeFromFavList = (name) => {
    const tempList = favList.filter((movie) => movie !== name);
    setFavList(tempList);
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
