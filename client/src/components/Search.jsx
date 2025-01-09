import React, { useState } from "react";
import { publicRequest } from "../request-methods";
import { Link } from "react-router-dom";

const Search = () => {
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [noResults, setNoResults] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!query) return;

    setIsSearching(true);
    setNoResults(false);
    try {
      const response = await publicRequest.get(
        `/products/search?query=${query}`
      );
      const results = response.data;
      setSearchResults(results);

      // Check if no results are found
      if (results.length === 0) {
        setNoResults(true);
      }
    } catch (error) {
      console.error("Error fetching search results:", error);
    } finally {
      setIsSearching(false);
    }
  };

  const handleInputChange = (e) => {
    setQuery(e.target.value);
    if (!e.target.value) {
      setSearchResults([]);
      setNoResults(false);
    }
  };

  const handleResultClick = () => {
    setQuery("");
    setSearchResults([]);
  };

  return (
    <div className="relative w-full md:w-1/3">
      <form onSubmit={handleSearch} className="flex items-center">
        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          placeholder="Search for products or categories..."
          className="w-full px-4 py-2 border rounded-l-md focus:outline-none focus:ring focus:ring-blue-500 text-black"
        />
        <button
          type="submit"
          disabled={isSearching}
          className="px-4 py-2 bg-blue-500 text-white rounded-r-md hover:bg-blue-600"
        >
          {isSearching ? "Searching..." : "Search"}
        </button>
      </form>
      {searchResults.length > 0 && (
        <div className="absolute top-full left-0 w-full bg-white border mt-1 rounded-md shadow-lg z-10">
          <ul>
            {searchResults.map((result) => (
              <li
                key={result._id}
                className="p-2 hover:bg-gray-100 cursor-pointer"
              >
                <Link
                  to={`/products/${result._id}`}
                  className="text-blue-600 hover:underline"
                  onClick={handleResultClick}
                >
                  {result.title || result.category}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
      {noResults && (
        <div className="absolute top-full left-0 w-full bg-white border mt-1 rounded-md shadow-lg z-10">
          <p className="p-2 text-gray-600">No such item or category found.</p>
        </div>
      )}
    </div>
  );
};

export default Search;
