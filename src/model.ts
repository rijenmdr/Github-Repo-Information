export interface repoType {
  id: number;
  full_name: string;
  name: string;
  description: string;
  updated_at: string;
  open_issues_count: number;
  default_branch: string;
  owner: {
    login: string;
    avatar_url: string;
    html_url: string;
  };
  stargazers_count: number;
  watchers_count: number;
  forks_count: number;
  html_url: string;
}

export interface sortOptionType {
  id: number;
  label: string;
  dataField: string;
  sortBy: string;
}
