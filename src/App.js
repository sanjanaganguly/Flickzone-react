import React, { Component } from "react";
import Movies from "./components/movies";
import { Route, Routes, Navigate } from "react-router-dom";
import Navbar from "./components/navbar";
import Customers from "./components/customers";
import Rentals from "./components/rentals";
import NotFound from "./components/notFound";
import "./App.css";

class App extends Component {
  render() {
    return (
      <><Navbar /><main className="container">
        <Routes>
          <Route path="/movies" element={<Movies />}></Route>
          <Route path="/customers" element={<Customers />}></Route>
          <Route path="/rentals" element={<Rentals />}></Route>
          <Route path="/not-found" element={<NotFound />}></Route>
          <Route path="/" element={<Navigate replace to="/movies" />}></Route>
          <Route path="*" element={<Navigate replace to="/not-found" />} />
        </Routes>
      </main></>
    );
  }
}

export default App;
