/* eslint-disable react-hooks/exhaustive-deps */
import "./App.css";
import { useState, useEffect } from "react";
import CardList from "./components/card-list/card-list.component";
import Searchbar from "./components/search-box/search-box.componet";

const App = () => {
  const [monsters, setMonsters] = useState([]);
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

  return (
    <div className="App">
      <h1 className="app-title">Monster Rolodex</h1>
      <Searchbar
        onSearchChange={onSearchChange}
        placeHolderString="Search monsters"
      />
      <CardList monsters={filteredMonsters} />
    </div>
  );
};

export default App;
