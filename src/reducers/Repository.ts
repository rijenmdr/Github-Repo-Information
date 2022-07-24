import { repoType } from "../model";

interface IType {
  isLoading: boolean;
  error: string;
  data: repoType[];
  total: number;
}

const initialState: IType = {
  isLoading: false,
  error: "",
  data: [],
  total: 0,
};

export enum RepositoryActionType {
  FETCH_INIT = "FETCH_INIT",
  FETCH_SUCCESS = "FETCH_SUCCESS",
  FETCH_FAILURE = "FETCH_FAILURE",
  FETCH_RESET = "FETCH_RESET",
}

interface RepoActionType {
  type: RepositoryActionType;
  payload?: {
    items: repoType[];
    total_count: number;
  };
}

const reducer = (state: IType, action: RepoActionType) => {
  switch (action.type) {
    case RepositoryActionType.FETCH_INIT:
      return {
        isLoading: true,
        error: "",
        data: [],
        total: 0,
      };
    case RepositoryActionType.FETCH_SUCCESS:
      return {
        isLoading: false,
        error: "",
        data: action?.payload?.items,
        total: action?.payload?.total_count,
      };
    case RepositoryActionType.FETCH_FAILURE:
      return {
        isLoading: false,
        error: "Something went wrong",
        data: [],
        total: 0,
      };
    case RepositoryActionType.FETCH_RESET:
      return {
        isLoading: false,
        error: "",
        data: [],
        total: 0,
      };
    default:
      return state;
  }
};

export { initialState, reducer };
