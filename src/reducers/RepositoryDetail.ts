import { repoType } from "../model";

interface IType {
  isLoading: boolean;
  error: string;
  repoDetail: repoType | any;
}

const initialState: IType = {
  isLoading: false,
  error: "",
  repoDetail: {},
};

export enum RepositoryDetailActionType {
  FETCH_INIT = "FETCH_INIT",
  FETCH_SUCCESS = "FETCH_SUCCESS",
  FETCH_FAILURE = "FETCH_FAILURE",
}

interface RepoActionType {
  type: RepositoryDetailActionType;
  payload?: repoType;
}

const reducer = (state: IType, action: RepoActionType) => {
  switch (action.type) {
    case RepositoryDetailActionType.FETCH_INIT:
      return {
        isLoading: true,
        error: "",
        repoDetail: {},
      };
    case RepositoryDetailActionType.FETCH_SUCCESS:
      return {
        isLoading: false,
        error: "",
        repoDetail: action?.payload,
      };
    case RepositoryDetailActionType.FETCH_FAILURE:
      return {
        isLoading: false,
        error: "Something went wrong",
        repoDetail: {},
      };
    default:
      return state;
  }
};

export { initialState, reducer };
