/* eslint-disable react-hooks/exhaustive-deps */
import "./App.css";
import { useState, useEffect } from "react";
import CardList from "./components/card-list/card-list.component";
import Searchbar from "./components/search-box/search-box.componet";

const App = () => {
  const [monsters, setMonsters] = useState([]);
  const [title, setTitle] = useState("Monster Rolodex");
  const [searchField, setSearchField] = useState("");
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  console.log("App.js - render: ", monsters, filteredMonsters);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        return response.json();
      })
      .then((user) => setMonsters(user));
    console.log("set: monsters - render", monsters, filteredMonsters);
  }, []);

  useEffect(() => {
    const filterMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });

    setFilteredMonsters(filterMonsters);
    console.log("set: filteredMonsters - render", monsters, filteredMonsters);
  }, [monsters, searchField]);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  const onTitleChange = (event) => {
    setTitle(event.target.value);
  };

  return (
    <div className="App">
      <h1 className="app-title">{title}</h1>
      <Searchbar
        onSearchChange={onSearchChange}
        placeHolderString="Search monsters"
      />
      <Searchbar
        className="title-search-box"
        onSearchChange={onTitleChange}
        placeHolderString={title}
        value={title}
      />
      <CardList monsters={filteredMonsters} />
    </div>
  );
};

export default App;
