import React from "react";
import { CardList } from "../components/CardList";
import SearchBar from "../components/SearchBar";
import Scroll from "../components/Scroll";
import ErrorBoundaryContainer from "../components/ErrorBoundaryContainer";
//import { robots } from "./robots";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      //robots: robots,
      robots: [],
      filteredRobots: [],
      searchBarText: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        //console.log(response);
        return response.json();
      })
      .then((users) => {
        //console.log(users);
        this.setState({ robots: users, filteredRobots: users });
      }); //1127
  }

  filterRobots = (event,receiveddata) => {
    //console.log(event.target.value);
    this.setState(
      {
        filteredRobots: event.target.value
          ? this.state.robots.filter((robot) => {
              return robot.name
                .toLowerCase()
                .includes(event.target.value.toLowerCase());
            })
          : this.state.robots,
        searchBarText: event.target.value,
      },
      () => {
        console.log(this.state.searchBarText);
      }
    );
  };

  render() {
    return (
      <div className="w-100">
        <h1 className="tc fw7 f-5 washed-green">Robot Yellowpages</h1>
        <SearchBar filterFunction={this.filterRobots} />
        <Scroll>
          <ErrorBoundaryContainer>
            <CardList robots={this.state.filteredRobots} />
          </ErrorBoundaryContainer>
        </Scroll>
      </div>
    );
  }
}

export default App;
