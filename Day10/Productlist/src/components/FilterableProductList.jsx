import React, { useState, useMemo, useCallback } from "react";
import SearchBar from "./SearchBar";
import ProductList from "./ProductList";
import { products } from "../api/fakeApi";

const FilterableProductList = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = useMemo(() => {
    return products.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  const clearSearch = useCallback(() => {
    setSearchTerm("");
  }, []);

  return (
    <div>
      <SearchBar
        searchTerm={searchTerm}
        onSearch={setSearchTerm}
        onClear={clearSearch}
      />
      <p>Products found: {filteredProducts.length}</p>
      <ProductList products={filteredProducts} />
    </div>
  );
};

export default FilterableProductList;
    