import { sortOptionType } from "../model";

export const sortOptions: sortOptionType[] = [
  {
    id: 1,
    label: "Best Match",
    dataField: "_score",
    sortBy: "desc",
  },
  {
    id: 2,
    label: "Most Stars",
    dataField: "stars",
    sortBy: "desc",
  },
  {
    id: 3,
    label: "Fewest Stars",
    dataField: "stars",
    sortBy: "asc",
  },
  {
    id: 4,
    label: "Most Forks",
    dataField: "forks",
    sortBy: "desc",
  },
  {
    id: 5,
    label: "Fewest Forks",
    dataField: "forks",
    sortBy: "asc",
  },
  {
    id: 6,
    label: "Most Help Wanted Issue",
    dataField: "help-wanted-issues",
    sortBy: "desc",
  },
  {
    id: 7,
    label: "Least Help Wanted Issue",
    dataField: "help-wanted-issues",
    sortBy: "asc",
  },
  {
    id: 8,
    label: "Recently Updated",
    dataField: "updated",
    sortBy: "desc",
  },
  {
    id: 9,
    label: "Least Recently Updated",
    dataField: "updated",
    sortBy: "asc",
  },
];
