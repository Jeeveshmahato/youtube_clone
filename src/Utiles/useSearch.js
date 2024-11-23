import { useEffect } from "react";
import { Youtube_Search_Url } from "./Constant";
import { setSearch } from "./SearchSlice";
import { useDispatch } from "react-redux";

const useSearch = (searchText) => {
  const dispatch = useDispatch();
  const searchResults = async () => {
    const response = await fetch(`${Youtube_Search_Url}${searchText}`);
    if (!response.ok) {
      console.error("Network response was not ok");
      return;
    }
    const json = await response.json();
    console.log(json?.items); // Log all items
    dispatch(setSearch({ [searchText]: json.items }));
  };

  useEffect(() => {
    if (!searchText) return;

    const timer = setTimeout(() => {
      searchResults();
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchText]);
};

export default useSearch;
