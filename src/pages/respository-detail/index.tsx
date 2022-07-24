import { Box } from "@mui/material";
import DetailBody from "../../components/repositoryDetail/DetailBody";
import DetailHeader from "../../components/repositoryDetail/DetailHeader";

import { useParams } from "react-router-dom";
import { useCallback, useEffect, useReducer } from "react";
import API from "../../utils/axios";
import {
  initialState,
  reducer,
  RepositoryDetailActionType,
} from "../../reducers/RepositoryDetail";

const RepositoryDetail = () => {
  const params = useParams();
  const { owner, repo } = params;

  const [state, dispatch] = useReducer(reducer, initialState);
  const { repoDetail, isLoading } = state;

  const getData = useCallback(async () => {
    dispatch({ type: RepositoryDetailActionType.FETCH_INIT });
    try {
      const response = await API.get(`/repos/${owner}/${repo}`);

      dispatch({
        type: RepositoryDetailActionType.FETCH_SUCCESS,
        payload: response?.data,
      });
    } catch (err) {
      dispatch({ type: RepositoryDetailActionType.FETCH_FAILURE });
    }
  }, [owner, repo]);

  useEffect(() => {
    getData();
    window.scrollTo(0, 0);
  }, [getData]);

  return (
    <Box width="100%">
      <DetailHeader detail={repoDetail} isLoading={isLoading} />
      <DetailBody detail={repoDetail} isLoading={isLoading} />
    </Box>
  );
};

export default RepositoryDetail;
