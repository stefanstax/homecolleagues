// 3rd Party Components
import React, { Component } from "react";
// Local Components
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import ErrorBoundry from "../components/ErrorBoundry";
// Styles
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
    const filteredrobots = this.state.robots.filter((robot) => {
      return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    });


    return !robots.length ? (
      <h1 className="w-screen h-screen bg-indigo-900 text-white text-4xl flex justify-center items-center">Loading...</h1>
    ) : (
      <>
      <div className="flex flex-col bg-indigo-900 h-screen">
        <h1 className="text-4xl text-white text-thin mx-auto mt-5 mb-0">Office Colleagues</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <Scroll>
          <ErrorBoundry>
            <CardList robots={filteredrobots} />
          </ErrorBoundry>
        </Scroll>
        <div className="w-full mt-5 flex flex-wrap justify-center items-center py-7 bg-gray-900">   
          <div className="w-11/12 lg:w-80 md:w-80 flex items-center justify-between mx-2 my-3 md:my-0 font-medium p-3 rounded-md text-white shadow-2xl" style={{backgroundColor: "rgb(0, 74, 173)" }}><p>View Code</p><img src="https://img.shields.io/badge/-GITHUB-303030.svg?style=for-the-badge&logo=github&logoColor=ffffff" /></div>
          <div className="w-11/12 lg:w-80 md:w-80 flex items-center justify-between mx-2 my-3 md:my-0 font-medium p-3 rounded-md text-white shadow-2xl" style={{backgroundColor: "rgb(0, 74, 173)" }}><p>View Code: (With Hooks)</p> <img src="https://img.shields.io/badge/-GITHUB-303030.svg?style=for-the-badge&logo=github&logoColor=ffffff"/> </div>
        </div>
      </div>
      </>
    );
  }
}

export default App;
