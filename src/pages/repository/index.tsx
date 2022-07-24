import { Box } from "@mui/material";
import { useCallback, useEffect, useReducer, useState } from "react";
import RepositoryBodyBottom from "../../components/repository/RepositoryBodyBottom";
import RepositoryBodyTop from "../../components/repository/RepositoryBodyTop";
import RepositoryHeader from "../../components/repository/RepositoryHeader";
import RepositorySearchList from "../../components/repository/RepositorySearchList";
import useDebounce from "../../hooks/useDebounce";
import {
  initialState,
  reducer,
  RepositoryActionType,
} from "../../reducers/Repository";
import API from "../../utils/axios";

const Repository = () => {
  // state for api params
  const [sortBy, setSortBy] = useState({
    id: 1,
    label: "Best Match",
    dataField: "_score",
    sortBy: "desc",
  });
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");

  const [state, dispatch] = useReducer(reducer, initialState);
  const { data, total, isLoading } = state;

  //use debouncer
  const debouncedValue = useDebounce<string>(searchTerm, 500);

  //api fetching
  const getData = useCallback(async () => {
    dispatch({ type: RepositoryActionType.FETCH_INIT });
    try {
      const response = await API.get(
        `/search/repositories?q=${debouncedValue}&sort=${sortBy?.dataField}&order=${sortBy?.sortBy}&per_page=${limit}&page=${page}`
      );
      dispatch({
        type: RepositoryActionType.FETCH_SUCCESS,
        payload: response?.data,
      });
    } catch (err) {
      dispatch({ type: RepositoryActionType.FETCH_FAILURE });
    }
  }, [debouncedValue, sortBy?.dataField, sortBy?.sortBy, page, limit]);

  //resetting / refetching data
  useEffect(() => {
    if (debouncedValue !== "") {
      getData();
      return;
    }
    dispatch({ type: RepositoryActionType.FETCH_RESET });
    window.scrollTo(0, 0);
  }, [getData, debouncedValue]);

  return (
    <Box width="100%">
      <RepositoryHeader searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      <Box className={`section`} bgcolor="primary.light" minHeight="80vh">
        {searchTerm && (
          <RepositoryBodyTop
            setSortBy={setSortBy}
            total={total}
            searchTerm={searchTerm}
          />
        )}

        <RepositorySearchList repos={data} isLoading={isLoading} />

        {searchTerm && (
          <RepositoryBodyBottom
            limit={limit}
            setLimit={setLimit}
            page={page}
            setPage={setPage}
            total={total}
          />
        )}
      </Box>
    </Box>
  );
};

export default Repository;
