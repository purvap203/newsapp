import "./App.css";
import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { HashRouter, Route, Routes } from "react-router-dom";

export default class App extends Component {
  state = {
    darkMode: false,
    searchQuery: "",
  };

  toggleDarkMode = () => {
    this.setState({ darkMode: !this.state.darkMode });
  };

  handleSearch = (query) => {
    this.setState({ searchQuery: query });
  };

  render() {
    const { darkMode, searchQuery } = this.state;
    return (
      <div
        style={{
          minHeight: "100vh",
          backgroundColor: darkMode ? "#121212" : "#f8f9fa",
          color: darkMode ? "#f8f9fa" : "#121212",
          transition: "all 0.3s ease",
        }}
      >
        <HashRouter>
          <Navbar
            darkMode={darkMode}
            toggleDarkMode={this.toggleDarkMode}
            onSearch={this.handleSearch}
          />
          <Routes>
            <Route exact path="/" element={<News key={searchQuery || "general"} category="general" darkMode={darkMode} searchQuery={searchQuery} />} />
            <Route exact path="/business" element={<News key={searchQuery || "business"} category="business" darkMode={darkMode} searchQuery={searchQuery} />} />
            <Route exact path="/entertainment" element={<News key={searchQuery || "entertainment"} category="entertainment" darkMode={darkMode} searchQuery={searchQuery} />} />
            <Route exact path="/general" element={<News key={searchQuery || "general"} category="general" darkMode={darkMode} searchQuery={searchQuery} />} />
            <Route exact path="/health" element={<News key={searchQuery || "health"} category="health" darkMode={darkMode} searchQuery={searchQuery} />} />
            <Route exact path="/science" element={<News key={searchQuery || "science"} category="science" darkMode={darkMode} searchQuery={searchQuery} />} />
            <Route exact path="/sports" element={<News key={searchQuery || "sports"} category="sports" darkMode={darkMode} searchQuery={searchQuery} />} />
            <Route exact path="/technology" element={<News key={searchQuery || "technology"} category="technology" darkMode={darkMode} searchQuery={searchQuery} />} />
          </Routes>
        </HashRouter>
      </div>
    );
  }
}