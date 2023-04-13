import "./App.css";
import { Component } from "react";
import CardList from "./components/card-list/card-list.component";
import Searchbar from "./components/search-box/search-box.componet";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        return response.json();
      })
      .then((user) => {
        this.setState(
          () => {
            return {
              monsters: user,
              searchField: "",
            };
          },
          () => {
            console.log(this.state);
          }
        );
      });
  }

  onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase();

    this.setState({
      searchField,
    });
  };

  render() {
    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;

    const filterMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });

    return (
      <div className="App">
        <h1 className="app-title">Monster Rolodex</h1>
        <Searchbar onSearchChange={onSearchChange} />
        <CardList monsters={filterMonsters} />
      </div>
    );
  }
}

export default App;
