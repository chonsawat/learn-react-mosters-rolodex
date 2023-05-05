import "./home.styles.css";
import { useState, useEffect, ChangeEvent } from "react";
import CardList from "../components/card-list/card-list.component";
import Searchbar from "../components/search-box/search-box.componet";
import { getData } from "../utils/data.utils";

export type Monster = {
  id: string;
  name: string;
  email: string;
};

const Home = () => {
  const [monsters, setMonsters] = useState<Monster[]>([]);
  const [title, setTitle] = useState("Monster Rolodex");
  const [searchField, setSearchField] = useState("");
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  // console.log("App.js - render: ", monsters, filteredMonsters);

  useEffect(() => {
    const fetchUsers = async () => {
      const users = await getData < Monster[] >("https://jsonplaceholder.typicode.com/users");
      setMonsters(users)
    };

    fetchUsers();
    // console.log("set: monsters - render", monsters, filteredMonsters);
  }, []);

  useEffect(() => {
    const filterMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });

    setFilteredMonsters(filterMonsters);
    // console.log("set: filteredMonsters - render", monsters, filteredMonsters);
  }, [monsters, searchField]);

  const onSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  const onTitleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  return (
    <div className="App">
      <h1 className="app-title">{title}</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          border: "1px",
          borderWidth: "2rems",
          borderColor: "white",
        }}
        className="search-monsters mx-5"
      >
        <Searchbar
          onSearchChange={onSearchChange}
          placeHolderString="Search monsters"
          id="search-monsters"
        />
        <Searchbar
          className="title-search-box"
          onSearchChange={onTitleChange}
          placeHolderString={title}
          value={title}
        />
      </div>

      <CardList monsters={filteredMonsters} />
    </div>
  );
};

export default Home;
