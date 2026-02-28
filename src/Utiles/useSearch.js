import { useEffect } from "react";
import { Youtube_Search_Url } from "./Constant";
import { cacheResults } from "./SearchSlice";
import { useDispatch } from "react-redux";

const useSearch = (searchText) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (!searchText) return;

    const searchResults = async () => {
      try {
        const response = await fetch(
          `${Youtube_Search_Url}${encodeURIComponent(searchText)}`
        );
        if (!response.ok) return;
        const json = await response.json();
        dispatch(cacheResults({ [searchText]: json[1] }));
      } catch {
        // silently fail on network errors
      }
    };

    const timer = setTimeout(searchResults, 200);
    return () => clearTimeout(timer);
  }, [searchText, dispatch]);
};

export default useSearch;
