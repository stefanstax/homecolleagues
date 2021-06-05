import React, { Component } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import ErrorBoundry from "../components/ErrorBoundry";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchfield: "",
    };
  }

  componentDidMount() {
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then((response) => {
        return response.json();
      })
      .then((users) => {
        this.setState({ robots: users });
      });
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  };

  render() {
    const { robots, searchfield } = this.state;
    const filteredRobots = this.state.robots.filter((robot) => {
      return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    });

    return !robots.length ? (
      <h1 className="tc f4 white fw1">Loading...</h1>
    ) : (
      <div className="flex flex-col">
        <h1
          className="text-4xl text-thin m-auto my-10"
          style={{ color: "rgb(0, 74, 173)" }}
        >
          Office Friends
        </h1>
        <SearchBox searchChange={this.onSearchChange} />
        <Scroll>
          <ErrorBoundry>
            <CardList robots={filteredRobots} />
          </ErrorBoundry>
        </Scroll>
        <h4 className="my-10 m-auto font-medium ring-4 p-3 rounded-md text-white shadow-2xl" style={{backgroundColor: "rgb(0, 74, 173)" }}>Built by: Stefan Stax</h4>
      </div>
    );
  }
}

export default App;
