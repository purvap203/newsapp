import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Navbar extends Component {
  state = { searchQuery: "" };

  handleSearch = (e) => {
    e.preventDefault();
    if (this.state.searchQuery.trim()) {
      this.props.onSearch(this.state.searchQuery);
    }
  };

  render() {
    const { darkMode, toggleDarkMode } = this.props;
    return (
      <nav
        className="navbar navbar-expand-lg sticky-top"
        style={{
          backgroundColor: darkMode ? "#1e1e1e" : "#ffffff",
          borderBottom: darkMode ? "1px solid #333" : "1px solid #dee2e6",
          transition: "all 0.3s ease",
        }}
      >
        <div className="container-fluid">
          <Link
            className="navbar-brand fw-bold"
            to="/"
            style={{ color: darkMode ? "#fff" : "#121212" }}
          >
            🐒 NewsMonkey
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {["", "business", "entertainment", "general", "health", "science", "sports", "technology"].map((cat) => (
                <li className="nav-item" key={cat}>
                  <Link
                    className="nav-link"
                    to={`/${cat}`}
                    style={{ color: darkMode ? "#ccc" : "#121212" }}
                  >
                    {cat === "" ? "Home" : cat.charAt(0).toUpperCase() + cat.slice(1)}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Search Bar */}
            <form className="d-flex me-3" onSubmit={this.handleSearch}>
              <input
                type="text"
                className="form-control form-control-sm me-2"
                placeholder="Search news..."
                value={this.state.searchQuery}
                onChange={(e) => this.setState({ searchQuery: e.target.value })}
                style={{
                  backgroundColor: darkMode ? "#333" : "#fff",
                  color: darkMode ? "#fff" : "#121212",
                  border: darkMode ? "1px solid #555" : "1px solid #dee2e6",
                  width: "200px",
                  caretColor: darkMode ? "#fff" : "#121212",
                }}
              />
              <button
                type="submit"
                className="btn btn-sm"
                style={{
                  backgroundColor: "#6366F1",
                  color: "#fff",
                  border: "none",
                }}
              >
                🔍
              </button>
            </form>

            {/* Dark Mode Toggle */}
            <div className="d-flex align-items-center">
              <span style={{ color: darkMode ? "#ccc" : "#555", marginRight: "8px", fontSize: "14px" }}>
                {darkMode ? "🌙 Dark" : "☀️ Light"}
              </span>
              <div
                onClick={toggleDarkMode}
                style={{
                  width: "50px",
                  height: "26px",
                  backgroundColor: darkMode ? "#6366F1" : "#dee2e6",
                  borderRadius: "50px",
                  cursor: "pointer",
                  position: "relative",
                  transition: "all 0.3s ease",
                }}
              >
                <div
                  style={{
                    width: "20px",
                    height: "20px",
                    backgroundColor: "#fff",
                    borderRadius: "50%",
                    position: "absolute",
                    top: "3px",
                    left: darkMode ? "27px" : "3px",
                    transition: "all 0.3s ease",
                    boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}
export default Navbar;