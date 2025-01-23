import React from "react";
import "./styles/App.css";
import FilterableProductList from "./components/FilterableProductList";

const App = () => {
  return (
    <div className="App">
      <h1>Filterable Product List</h1>
      <FilterableProductList />
    </div>
  );
};

export default App;
