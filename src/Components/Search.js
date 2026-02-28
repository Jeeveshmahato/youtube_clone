import React from "react";
import { useSelector } from "react-redux";

const Search = () => {
  const searchItems = useSelector((store) => store?.mySearch);

  if (!searchItems || Object.keys(searchItems).length === 0) return null;

  return (
    <div className="text-white">
      {Object.entries(searchItems).map(([query, results]) => (
        <div key={query}>
          {Array.isArray(results) &&
            results.map((item, index) => (
              <p className="py-2" key={index}>
                {item}
              </p>
            ))}
        </div>
      ))}
    </div>
  );
};

export default Search;
