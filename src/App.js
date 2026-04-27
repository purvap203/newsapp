import "./App.css";
import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { HashRouter, Route, Routes } from "react-router-dom";
export default class App extends Component {
  render() {
    return (
      <div>
        <HashRouter>
          <Navbar />
          <Routes>
            <Route
              exact
              path="/"
              element={<News key="general" country="in" category="General" />}
            />
            <Route />

            <Route
              exact
              path="/business"
              element={
                <News key="business" country="in" category="Business" />
              }
            />
            <Route />

            <Route
              exact
              path="/entertainment"
              element={
                <News key="entertainment" country="in" category="Entertainment" />
              }
            />
            <Route />

            <Route
              exact
              path="/general"
              element={<News key="general" country="in" category="General" />}
            />
            <Route />

            <Route
              exact
              path="/health"
              element={<News key=" health" country="in" category="Health" />}
            />
            <Route />

            <Route
              exact
              path="/science"
              element={<News key="science" country="in" category="Science" />}
            />
            <Route />

            <Route
              exact
              path="/sports"
              element={<News key="sports" country="in" category="Sports" />}
            />
            <Route />

            <Route
              exact
              path="/technology"
              element={
                <News key="technology" country="in" category="Technology" />
              }
            />
            <Route />
          </Routes>
        </HashRouter>
      </div>
    );
  }
}
