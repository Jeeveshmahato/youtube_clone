import React from "react";
import { useSelector } from "react-redux";

const Search = () => {
  const searchItems = useSelector((store) => store?.mySearch?.mySearch);
  console.log(searchItems);

  if (!searchItems) return null;
  return (
    <>
    {
      searchItems.map((item) => {
        return (
          <ol className="text-black py-2" key={item.id}>
            {item.snippet.title}
          </ol>
        );
      })
    }
     
    </>
  );
};

export default Search;
