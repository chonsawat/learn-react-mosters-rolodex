import "./App.css";
import { Component } from "react";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      originalMonster: [],
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
              originalMonster: user,
            };
          },
          () => {
            console.log(this.state);
          }
        );
      });
  }

  render() {
    return (
      <div className="App">
        <input
          className="search-box"
          type="search"
          placeholder="Search monsters"
          onChange={(event) => {
            console.log("event: ", event.target.value);
            const searchStringMonsters = event.target.value.toLocaleLowerCase();
            const filterMonsters = this.state.originalMonster.filter(
              (monster) => {
                return monster.name
                  .toLocaleLowerCase()
                  .includes(searchStringMonsters);
              }
            );

            this.setState({
              monsters: filterMonsters,
            });
          }}
        />
        {this.state.monsters.map((monster) => {
          return (
            <div key={monster.id} className="mt-5">
              <h1>{monster.name}</h1>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
